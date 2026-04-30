/**
 * AuditContext — sistema de auditoria unificado via API tRPC.
 *
 * Removido o sistema paralelo de localStorage. Única fonte de verdade
 * é o banco de dados (tabela audit_logs). Logs locais eram descartados
 * ao recarregar e criavam duplicatas ao sincronizar.
 *
 * Fallback: se a API não estiver disponível (sem DB configurado),
 * o log é descartado silenciosamente — nunca expõe dados em localStorage.
 */
import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { trpc } from '@/lib/trpc';
import { useAuth } from './AuthContext';
import type { AuditActionType, AuditLog, AuditStats } from '@/types/audit';

interface AuditContextType {
  logs: AuditLog[];
  stats: AuditStats;
  addLog: (
    acao: AuditActionType,
    tabela: string,
    registroId: string,
    registroNome: string,
    descricao: string,
    dadosAntigos?: Record<string, unknown>,
    dadosNovos?: Record<string, unknown>
  ) => Promise<void>;
  exportLogs: (format: 'json' | 'csv') => void;
  isLoading: boolean;
}

const AuditContext = createContext<AuditContextType | undefined>(undefined);

const EMPTY_STATS: AuditStats = {
  totalAcoes: 0,
  acoesPorTipo: { CREATE: 0, UPDATE: 0, DELETE: 0, LOGIN: 0, LOGOUT: 0 },
  ultimasAcoes: [],
  usuariosAtivos: [],
};

export function AuditProvider({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useAuth();
  const utils = trpc.useUtils();

  // Busca da API — só quando autenticado
  const listQuery = trpc.audit.list.useQuery(
    { limit: 500, offset: 0 },
    { enabled: isAuthenticated, staleTime: 30_000 }
  );

  const addMutation = trpc.audit.add.useMutation({
    onSuccess: () => {
      // Revalida a lista após inserir
      utils.audit.list.invalidate();
    },
  });

  // Mapeia os logs da API para o tipo interno (português)
  const logs: AuditLog[] = useMemo(() => {
    if (!listQuery.data) return [];
    return listQuery.data.map((log) => ({
      id: String(log.id),
      timestamp: log.createdAt instanceof Date
        ? log.createdAt.toISOString()
        : String(log.createdAt),
      // userName é armazenado no entityName de LOGIN ou podemos exibir o userId
      usuario: String(log.userId),
      acao: log.action as AuditActionType,
      tabela: log.entity,
      registroId: log.entityId,
      registroNome: log.entityName ?? '',
      descricao: log.description ?? '',
      dadosAntigos: log.oldData as Record<string, unknown> | undefined,
      dadosNovos: log.newData as Record<string, unknown> | undefined,
    }));
  }, [listQuery.data]);

  const addLog = useCallback(
    async (
      acao: AuditActionType,
      tabela: string,
      registroId: string,
      registroNome: string,
      descricao: string,
      dadosAntigos?: Record<string, unknown>,
      dadosNovos?: Record<string, unknown>
    ) => {
      if (!isAuthenticated) return;

      try {
        await addMutation.mutateAsync({
          action: acao,
          entity: tabela,
          entityId: registroId,
          entityName: registroNome,
          description: descricao,
          oldData: dadosAntigos,
          newData: dadosNovos,
        });
      } catch (error) {
        // Sem banco configurado: falha silenciosa — não bloqueia o fluxo do usuário
        console.warn('[Audit] Falha ao registrar log (DB indisponível?):', error);
      }
    },
    [isAuthenticated, addMutation]
  );

  const exportLogs = useCallback(
    (format: 'json' | 'csv') => {
      if (format === 'json') {
        const blob = new Blob([JSON.stringify(logs, null, 2)], {
          type: 'application/json;charset=utf-8',
        });
        downloadBlob(blob, `auditoria-infogeral-${today()}.json`);
      } else {
        const headers = [
          'Data/Hora', 'Usuário', 'Ação', 'Tabela',
          'ID Registro', 'Nome Registro', 'Descrição',
          'Dados Antigos', 'Dados Novos',
        ];
        const rows = logs.map((l) => [
          new Date(l.timestamp).toLocaleString('pt-BR'),
          l.usuario, l.acao, l.tabela,
          l.registroId, l.registroNome, l.descricao,
          JSON.stringify(l.dadosAntigos ?? {}),
          JSON.stringify(l.dadosNovos ?? {}),
        ]);
        const csv = [
          headers.join(','),
          ...rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')),
        ].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        downloadBlob(blob, `auditoria-infogeral-${today()}.csv`);
      }
    },
    [logs]
  );

  const stats: AuditStats = useMemo(() => ({
    totalAcoes: logs.length,
    acoesPorTipo: {
      CREATE: logs.filter((l) => l.acao === 'CREATE').length,
      UPDATE: logs.filter((l) => l.acao === 'UPDATE').length,
      DELETE: logs.filter((l) => l.acao === 'DELETE').length,
      LOGIN:  logs.filter((l) => l.acao === 'LOGIN').length,
      LOGOUT: logs.filter((l) => l.acao === 'LOGOUT').length,
    },
    ultimasAcoes: logs.slice(0, 10),
    usuariosAtivos: Array.from(new Set(logs.map((l) => l.usuario))),
  }), [logs]);

  return (
    <AuditContext.Provider
      value={{ logs, stats, addLog, exportLogs, isLoading: listQuery.isLoading }}
    >
      {children}
    </AuditContext.Provider>
  );
}

export function useAudit() {
  const context = useContext(AuditContext);
  if (!context) throw new Error('useAudit deve ser usado dentro de AuditProvider');
  return context;
}

// ── helpers ──────────────────────────────────────────────────────────────────

function today() {
  return new Date().toISOString().split('T')[0];
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

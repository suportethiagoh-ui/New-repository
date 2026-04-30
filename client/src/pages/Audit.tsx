import { useState, useMemo } from 'react';
import { useAudit } from '@/contexts/AuditContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Download, Trash2, Filter, Search, Clock, Loader2 } from 'lucide-react';
import type { AuditActionType } from '@/types/audit';

export default function Audit() {
  const { logs, exportLogs, stats, isLoading } = useAudit();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAction, setFilterAction] = useState<AuditActionType | 'TODOS'>('TODOS');
  const [filterUser, setFilterUser] = useState<string>('TODOS');

  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const q = searchQuery.toLowerCase();
      const matchSearch =
        log.registroNome.toLowerCase().includes(q) ||
        log.descricao.toLowerCase().includes(q) ||
        log.registroId.toLowerCase().includes(q);
      const matchAction = filterAction === 'TODOS' || log.acao === filterAction;
      const matchUser = filterUser === 'TODOS' || log.usuario === filterUser;
      return matchSearch && matchAction && matchUser;
    });
  }, [logs, searchQuery, filterAction, filterUser]);

  const actionColor = (action: AuditActionType) => {
    const map: Record<AuditActionType, string> = {
      CREATE: 'bg-green-100 text-green-800',
      UPDATE: 'bg-blue-100 text-blue-800',
      DELETE: 'bg-red-100 text-red-800',
      LOGIN:  'bg-purple-100 text-purple-800',
      LOGOUT: 'bg-gray-100 text-gray-800',
    };
    return map[action] ?? 'bg-gray-100 text-gray-800';
  };

  const actionLabel = (action: AuditActionType) => {
    const map: Record<AuditActionType, string> = {
      CREATE: '✨ Criar',
      UPDATE: '✏️ Editar',
      DELETE: '🗑️ Remover',
      LOGIN:  '🔓 Login',
      LOGOUT: '🔒 Logout',
    };
    return map[action];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-8 h-8 text-amber-400" />
            <h1 className="text-4xl font-bold text-white">Histórico de Auditoria</h1>
          </div>
          <p className="text-slate-400">
            Rastreamento completo de todas as ações realizadas no painel administrativo
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Total de Ações</p>
            <p className="text-2xl font-bold text-white">{stats.totalAcoes}</p>
          </div>
          <div className="bg-green-900/30 rounded-lg p-4 border border-green-700/30">
            <p className="text-green-300 text-sm mb-1">Criações</p>
            <p className="text-2xl font-bold text-green-400">{stats.acoesPorTipo.CREATE}</p>
          </div>
          <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/30">
            <p className="text-blue-300 text-sm mb-1">Edições</p>
            <p className="text-2xl font-bold text-blue-400">{stats.acoesPorTipo.UPDATE}</p>
          </div>
          <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
            <p className="text-red-300 text-sm mb-1">Remoções</p>
            <p className="text-2xl font-bold text-red-400">{stats.acoesPorTipo.DELETE}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Usuários Ativos</p>
            <p className="text-2xl font-bold text-white">{stats.usuariosAtivos.length}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Search className="w-4 h-4 inline mr-2" />
                Buscar
              </label>
              <Input
                placeholder="Nome, ID, descrição..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Filter className="w-4 h-4 inline mr-2" />
                Tipo de Ação
              </label>
              <select
                value={filterAction}
                onChange={(e) => setFilterAction(e.target.value as AuditActionType | 'TODOS')}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-white rounded-md"
              >
                <option value="TODOS">Todas as ações</option>
                <option value="CREATE">✨ Criar</option>
                <option value="UPDATE">✏️ Editar</option>
                <option value="DELETE">🗑️ Remover</option>
                <option value="LOGIN">🔓 Login</option>
                <option value="LOGOUT">🔒 Logout</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-300 mb-2">Usuário</label>
              <select
                value={filterUser}
                onChange={(e) => setFilterUser(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-white rounded-md"
              >
                <option value="TODOS">Todos os usuários</option>
                {stats.usuariosAtivos.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 items-end">
              <Button
                onClick={() => exportLogs('json')}
                variant="outline"
                size="sm"
                className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
              >
                <Download className="w-4 h-4 mr-2" />
                JSON
              </Button>
              <Button
                onClick={() => exportLogs('csv')}
                variant="outline"
                size="sm"
                className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
              >
                <Download className="w-4 h-4 mr-2" />
                CSV
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center flex items-center justify-center gap-3">
              <Loader2 className="w-5 h-5 animate-spin text-amber-400" />
              <p className="text-slate-400">Carregando logs...</p>
            </div>
          ) : filteredLogs.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-slate-400">Nenhum registro de auditoria encontrado.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 border-b border-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-300">Data/Hora</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-300">Usuário</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-300">Ação</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-300">Registro</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-300">Descrição</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-4 py-3 text-slate-300">
                        {new Date(log.timestamp).toLocaleString('pt-BR')}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className="bg-slate-700 text-slate-200 border-slate-600">
                          {log.usuario}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge className={actionColor(log.acao)}>
                          {actionLabel(log.acao)}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-slate-300">
                          <p className="font-medium">{log.registroNome}</p>
                          <p className="text-xs text-slate-500">ID: {log.registroId}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-400">{log.descricao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-700">
          <p className="text-sm text-slate-400">
            <strong>Fonte:</strong> Logs armazenados no banco de dados.
            Exporte regularmente para manter cópia local do histórico.
            <br />
            <strong>Usuário atual:</strong> {user?.name ?? user?.email ?? String(user?.id ?? '—')}
          </p>
        </div>
      </div>
    </div>
  );
}

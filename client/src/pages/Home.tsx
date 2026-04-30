// Painel corporativo de gestão de colaboradores
// Interface clara, sem recursos secundários
import { useMemo, useState } from 'react';
import { Activity, Layers3, Plus, LogOut, Users, Download } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { useAudit } from '@/contexts/AuditContext';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { colaboradores as colaboradoresBase, metadata, pecas } from '@/data/infogeralData';
import type { TabKey, SortKey, SortDir, EditableColaborador } from './homeTypes';
import ColaboradoresTab from './ColaboradoresTab';
import AdminForm from './AdminForm';
import Audit from './Audit';


function valueToText(value: unknown): string {
  if (value === null || value === undefined) return '';
  return String(value);
}

function normalize(value: unknown): string {
  return valueToText(value).toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function downloadJson(filename: string, payload: unknown) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function StatCard({ label, value, helper, icon: Icon }: {
  label: string; value: string | number; helper: string; icon: typeof Users;
}) {
  return (
    <section className="metric-card group">
      <div className="metric-icon"><Icon className="h-5 w-5" /></div>
      <p className="metric-label">{label}</p>
      <strong className="metric-value">{value}</strong>
      <span className="metric-helper">{helper}</span>
    </section>
  );
}

export default function Home() {
  const { logout, user } = useAuth();
  const [, navigate] = useLocation();
  const { addLog } = useAudit();

  const [activeTab, setActiveTab] = useState<TabKey>('colaboradores');
  const [rows, setRows] = useState<EditableColaborador[]>(() =>
    colaboradoresBase.map((item) => ({ ...item }))
  );
  const [query, setQuery] = useState('');
  const [sector, setSector] = useState('Todos');
  const [sortKey, setSortKey] = useState<SortKey>('setor');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [editing, setEditing] = useState<EditableColaborador | null | 'new'>(null);

  const displayName = user?.username ?? user?.email ?? `usuário #${user?.id}`;

  const handleLogout = async () => {
    await logout();
    navigate('/login');
    toast.success('Desconectado com sucesso');
  };

  const sectors = useMemo(
    () => ['Todos', ...Array.from(new Set(rows.map((r) => valueToText(r.setor)).filter(Boolean))).sort()],
    [rows]
  );

  const filteredRows = useMemo(() => {
    const q = normalize(query);
    return rows
      .filter((row) => sector === 'Todos' || valueToText(row.setor) === sector)
      .filter((row) => {
        if (!q) return true;
        return [row.codigo, row.carimbo, row.nome, row.nomeCompleto, row.setor].some((v) =>
          normalize(v).includes(q)
        );
      })
      .sort((a, b) => {
        const av = normalize(a[sortKey]);
        const bv = normalize(b[sortKey]);
        const r = av.localeCompare(bv, 'pt-BR', { numeric: true });
        return sortDir === 'asc' ? r : -r;
      });
  }, [rows, query, sector, sortKey, sortDir]);

  const setSort = (key: SortKey) => {
    if (key === sortKey) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else { setSortKey(key); setSortDir('asc'); }
  };

  const saveColaborador = (item: EditableColaborador) => {
    setRows((prev) => {
      const exists = prev.some((r) => r.id === item.id);
      if (exists) {
        const old = prev.find((r) => r.id === item.id);
        addLog('UPDATE', 'colaboradores', item.id, item.nome || '', `Colaborador atualizado: ${item.nome}`, old as any, item);
        return prev.map((r) => (r.id === item.id ? item : r));
      } else {
        addLog('CREATE', 'colaboradores', item.id, item.nome || '', `Novo colaborador criado: ${item.nome}`, undefined, item);
        return [item, ...prev];
      }
    });
    setEditing(null);
    toast.success('Registro salvo.');
  };

  const deleteColaborador = (id: string) => {
    setRows((prev) => {
      const item = prev.find((r) => r.id === id);
      if (item) addLog('DELETE', 'colaboradores', id, item.nome || '', `Colaborador removido: ${item.nome}`, item as any, undefined);
      return prev.filter((r) => r.id !== id);
    });
    toast.success('Registro removido.');
  };

  const importJson = async (file: File) => {
    try {
      const content = await file.text();
      const parsed = JSON.parse(content);
      const imported = Array.isArray(parsed) ? parsed : parsed.colaboradores;
      if (!Array.isArray(imported)) throw new Error('Formato inválido');
      setRows(imported.map((item: Partial<EditableColaborador>, i: number) => ({
        id: item.id ?? `importado-${i + 1}`,
        codigo: item.codigo ?? '',
        carimbo: item.carimbo ?? '',
        carimboNumero: item.carimboNumero ?? null,
        nome: item.nome ?? '',
        nomeCompleto: item.nomeCompleto ?? '',
        setor: item.setor ?? 'Sem setor',
        linhaExcel: item.linhaExcel ?? 0,
        origem: item.origem ?? 'Importação JSON',
      })));
      toast.success('JSON importado com sucesso.');
    } catch {
      toast.error('Erro ao importar JSON.');
    }
  };

  return (
    <main className="app-shell">
      {/* Sidebar */}
      <nav className="sidebar" aria-label="Navegação principal">
        <div className="brand-block">
          <span className="brand-mark">IG</span>
          <div>
            <strong>INFOGERAL</strong>
            <small>Admin</small>
          </div>
        </div>
        {([
          ['colaboradores', Users, 'Colaboradores'],
          ['pecas', Layers3, 'Peças'],
          ['auditoria', Activity, 'Auditoria'],
        ] as [TabKey, typeof Users, string][]).map(([key, Icon, label]) => (
          <button
            key={key}
            className={activeTab === key ? 'nav-item active' : 'nav-item'}
            onClick={() => setActiveTab(key)}
          >
            <Icon /> {label}
          </button>
        ))}
        <div className="sidebar-footer">
          {user && (
            <p className="text-xs text-blue-600 mb-2">
              Usuário: <strong>{displayName}</strong>
            </p>
          )}
          <Activity className="h-4 w-4" />
          <span>Sistema de gestão de colaboradores.</span>
          <Button variant="destructive" size="sm" className="w-full mt-4" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>
      </nav>

      {/* Content area */}
      <section className="content-area">
        <header className="hero-panel bg-gradient-to-r from-blue-50 to-slate-100 border-b border-blue-100">
          <div>
            <p className="eyebrow text-blue-600">Gestão de Recursos Humanos</p>
            <h1 className="text-blue-900">Controle de Colaboradores</h1>
            <p className="hero-copy text-slate-700">
              Sistema corporativo para gestão centralizada de dados de colaboradores,
              com rastreamento de ações e preparação para integração com sistema de ponto.
            </p>
          </div>
          <div className="hero-actions">
            <Button onClick={() => setEditing('new')} className="bg-blue-600 text-white hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" /> Novo colaborador
            </Button>
            <Button
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
              onClick={() => downloadJson('colaboradores-export.json', rows)}
            >
              <Download className="mr-2 h-4 w-4" /> Exportar
            </Button>
          </div>
        </header>

        <section className="metrics-grid">
          <StatCard label="Colaboradores" value={rows.length} helper="total no sistema" icon={Users} />
          <StatCard label="Setores" value={sectors.length - 1} helper="departamentos" icon={Activity} />
          <StatCard label="Peças" value={pecas.length} helper="itens cadastrados" icon={Layers3} />
          <StatCard label="Auditorias" value="Ativa" helper="rastreamento completo" icon={Activity} />
        </section>

        {activeTab === 'colaboradores' && (
          <ColaboradoresTab
            rows={rows}
            filteredRows={filteredRows}
            query={query}
            sector={sector}
            sectors={sectors}
            sortKey={sortKey}
            sortDir={sortDir}
            colaboradoresBase={colaboradoresBase.map((i) => ({ ...i }))}
            onQuery={setQuery}
            onSector={setSector}
            onSort={setSort}
            onEdit={setEditing}
            onNew={() => setEditing('new')}
            onDelete={deleteColaborador}
            onImportJson={importJson}
            onRestore={() => {
              setRows(colaboradoresBase.map((i) => ({ ...i })));
              toast.success('Dados originais do Excel restaurados.');
            }}
            onExport={() => downloadJson('infogeral-colaboradores.json', rows)}
          />
        )}

        {activeTab === 'pecas' && (
          <section className="panel data-table-panel single-panel">
            <div className="table-toolbar">
              <div><p className="eyebrow">Cadastro auxiliar</p><h2>Peças carregadas</h2></div>
              <Button variant="outline" onClick={() => downloadJson('pecas-export.json', pecas)}>
                Exportar peças
              </Button>
            </div>
            <div className="table-wrap compact">
              <table>
                <thead><tr><th>Código</th><th>Peça</th><th>Origem</th></tr></thead>
                <tbody>
                  {pecas.map((p) => (
                    <tr key={p.id}>
                      <td className="mono">{valueToText(p.codigo)}</td>
                      <td><strong>{valueToText(p.nome)}</strong></td>
                      <td>{p.origem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === 'auditoria' && <Audit />}
      </section>

      {editing && (
        <AdminForm
          item={editing === 'new' ? null : editing}
          onCancel={() => setEditing(null)}
          onSave={saveColaborador}
        />
      )}

      <div className="status-strip">
        <Activity className="h-4 w-4" />
        Exibindo {filteredRows.length} de {rows.length} colaboradores · Excel carregado em {metadata.geradoEm}
      </div>
    </main>
  );
}

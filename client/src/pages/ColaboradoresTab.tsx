/**
 * ColaboradoresTab — aba principal da tabela de colaboradores.
 * Extraída de Home.tsx para manter o arquivo pai gerenciável.
 */
import { useMemo, useRef } from 'react';
import {
  BarChart, Bar, Cell, PieChart, Pie,
  ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid,
} from 'recharts';
import {
  ArrowDownUp, Download, Filter, Pencil, Plus,
  RefreshCcw, Search, Trash2, Upload,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { metadata, pecas } from '@/data/infogeralData';
import type { EditableColaborador, SortKey } from './homeTypes';

const TEXTURE_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663613675852/gHqCDfNgYZHZ4KWNmtC3PJ/infogeral-data-texture-KnuxZ4ywYV6EFzydkRsDd2.webp';
const EMPTY_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663613675852/gHqCDfNgYZHZ4KWNmtC3PJ/infogeral-empty-state-VHQ4jmaqeUSsewP2ea7N7D.webp';
const chartColors = ['#0f4c5c', '#1f6f8b', '#2d8aa6', '#d59a2f', '#243447'];

function valueToText(value: unknown): string {
  if (value === null || value === undefined) return '';
  return String(value);
}

interface Props {
  rows: EditableColaborador[];
  filteredRows: EditableColaborador[];
  query: string;
  sector: string;
  sectors: string[];
  sortKey: SortKey;
  sortDir: 'asc' | 'desc';
  colaboradoresBase: EditableColaborador[];
  onQuery: (q: string) => void;
  onSector: (s: string) => void;
  onSort: (k: SortKey) => void;
  onEdit: (item: EditableColaborador) => void;
  onNew: () => void;
  onDelete: (id: string) => void;
  onImportJson: (file: File) => void;
  onRestore: () => void;
  onExport: () => void;
}

export default function ColaboradoresTab({
  rows, filteredRows, query, sector, sectors,
  sortKey, sortDir, onQuery, onSector, onSort,
  onEdit, onNew, onDelete, onImportJson, onRestore, onExport,
}: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const setorChart = useMemo(() => {
    const counts = new Map<string, number>();
    rows.forEach((r) => counts.set(valueToText(r.setor), (counts.get(valueToText(r.setor)) ?? 0) + 1));
    return Array.from(counts.entries())
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [rows]);

  const tipoChart = useMemo(
    () => Object.entries(metadata.tipos).map(([name, value]) => ({ name, value })),
    []
  );

  return (
    <div className="workspace-grid">
      {/* Chart: por setor */}
      <section
        className="panel panel-chart"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.94), rgba(255,255,255,.94)), url(${TEXTURE_URL})` }}
      >
        <div className="panel-heading">
          <div><p className="eyebrow">Distribuição</p><h2>Colaboradores por setor</h2></div>
          <Badge variant="outline">{rows.length} linhas</Badge>
        </div>
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={setorChart} margin={{ top: 16, right: 12, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#d5dde2" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {setorChart.map((_, i) => <Cell key={i} fill={chartColors[i % chartColors.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Chart: tipo/grupo */}
      <section className="panel panel-chart">
        <div className="panel-heading">
          <div><p className="eyebrow">Tipo / Grupo</p><h2>Marcadores operacionais</h2></div>
          <Badge variant="outline">abas setoriais</Badge>
        </div>
        <ResponsiveContainer width="100%" height={230}>
          <PieChart>
            <Pie data={tipoChart} dataKey="value" nameKey="name" innerRadius={58} outerRadius={92} paddingAngle={3}>
              {tipoChart.map((_, i) => <Cell key={i} fill={chartColors[i % chartColors.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="legend-inline">
          {tipoChart.map((item, i) => (
            <span key={item.name}>
              <i style={{ background: chartColors[i % chartColors.length] }} />
              {item.name}: {item.value}
            </span>
          ))}
        </div>
      </section>

      {/* Tabela */}
      <section className="panel data-table-panel">
        <div className="table-toolbar">
          <div><p className="eyebrow">Painel administrativo</p><h2>Tabela de colaboradores</h2></div>
          <div className="toolbar-actions">
            <div className="searchbox">
              <Search className="h-4 w-4" />
              <Input
                placeholder="Buscar por nome, código, carimbo ou setor"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
              />
            </div>
            <select value={sector} onChange={(e) => onSector(e.target.value)} aria-label="Filtrar setor">
              {sectors.map((s) => <option key={s}>{s}</option>)}
            </select>
            <Button variant="outline" onClick={() => fileRef.current?.click()}>
              <Upload className="mr-2 h-4 w-4" /> Importar JSON
            </Button>
            <input
              ref={fileRef}
              className="hidden"
              type="file"
              accept="application/json"
              onChange={(e) => e.target.files?.[0] && onImportJson(e.target.files[0])}
            />
            <Button variant="outline" onClick={onRestore}>
              <RefreshCcw className="mr-2 h-4 w-4" /> Restaurar
            </Button>
            <Button variant="outline" onClick={onExport}>
              <Download className="mr-2 h-4 w-4" /> Exportar
            </Button>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {(['codigo', 'carimbo', 'nome', 'nomeCompleto', 'setor'] as SortKey[]).map((key) => (
                  <th key={key} onClick={() => onSort(key)}>
                    {key === 'nomeCompleto' ? 'Nome completo' : key}
                    <ArrowDownUp className="ml-2 inline h-3 w-3" />
                  </th>
                ))}
                <th>Origem</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => (
                <tr key={row.id}>
                  <td className="mono">{valueToText(row.codigo)}</td>
                  <td className="mono">{valueToText(row.carimbo)}</td>
                  <td><strong>{valueToText(row.nome)}</strong></td>
                  <td>{valueToText(row.nomeCompleto)}</td>
                  <td><span className="sector-pill">{valueToText(row.setor)}</span></td>
                  <td>{row.origem} · linha {row.linhaExcel || 'manual'}</td>
                  <td className="row-actions">
                    <button onClick={() => onEdit(row)} aria-label="Editar"><Pencil /></button>
                    <button onClick={() => onDelete(row.id)} aria-label="Remover"><Trash2 /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

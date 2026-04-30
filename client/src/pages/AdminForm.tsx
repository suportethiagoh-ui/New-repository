/**
 * AdminForm — painel lateral para criar/editar colaboradores.
 * Extraído de Home.tsx.
 */
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { EditableColaborador } from './homeTypes';

function valueToText(value: unknown): string {
  if (value === null || value === undefined) return '';
  return String(value);
}

interface Props {
  item: EditableColaborador | null;
  onCancel: () => void;
  onSave: (item: EditableColaborador) => void;
}

export default function AdminForm({ item, onCancel, onSave }: Props) {
  const [form, setForm] = useState<EditableColaborador>(
    item ?? {
      id: `manual-${Date.now()}`,
      codigo: '',
      carimbo: '',
      carimboNumero: null,
      nome: '',
      nomeCompleto: '',
      setor: 'Fundição',
      linhaExcel: 0,
      origem: 'Cadastro manual local',
    }
  );

  const update = (key: keyof EditableColaborador, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
      carimboNumero:
        key === 'carimbo' ? parseInt(value, 10) || null : prev.carimboNumero,
    }));
  };

  return (
    <aside className="admin-panel" aria-label="Painel de edição de colaborador">
      <div className="admin-panel__header">
        <div>
          <p className="eyebrow">Cadastro local</p>
          <h2>{item ? 'Editar colaborador' : 'Adicionar colaborador'}</h2>
        </div>
        <Button variant="outline" onClick={onCancel}>Fechar</Button>
      </div>
      <div className="form-grid">
        <label>Código<Input value={valueToText(form.codigo)} onChange={(e) => update('codigo', e.target.value)} /></label>
        <label>Carimbo<Input value={valueToText(form.carimbo)} onChange={(e) => update('carimbo', e.target.value)} /></label>
        <label>Nome<Input value={valueToText(form.nome)} onChange={(e) => update('nome', e.target.value)} /></label>
        <label>Nome completo<Input value={valueToText(form.nomeCompleto)} onChange={(e) => update('nomeCompleto', e.target.value)} /></label>
        <label>Setor<Input value={valueToText(form.setor)} onChange={(e) => update('setor', e.target.value)} /></label>
      </div>
      <div className="admin-panel__actions">
        <Button onClick={() => onSave(form)} className="bg-[#173f4f] text-white hover:bg-[#0f2f3d]">
          Salvar registro
        </Button>
        <Button variant="ghost" onClick={onCancel}>Cancelar</Button>
      </div>
    </aside>
  );
}

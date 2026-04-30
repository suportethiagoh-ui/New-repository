/**
 * Tipos compartilhados entre Home.tsx e suas abas extraídas.
 */
import type { Colaborador } from '@/data/infogeralData';

export type SortKey = 'codigo' | 'carimbo' | 'nome' | 'nomeCompleto' | 'setor';
export type SortDir = 'asc' | 'desc';
export type TabKey = 'colaboradores' | 'pecas' | 'abas' | 'api' | 'auditoria';
export type EditableColaborador = Colaborador & { id: string };

export type AuditActionType = 'CREATE' | 'UPDATE' | 'DELETE' | 'LOGIN' | 'LOGOUT';

export interface AuditLog {
  id: string;
  timestamp: string;
  usuario: string;
  acao: AuditActionType;
  tabela: string;
  registroId: string;
  registroNome: string;
  descricao: string;
  dadosAntigos?: Record<string, unknown>;
  dadosNovos?: Record<string, unknown>;
}

export interface AuditStats {
  totalAcoes: number;
  acoesPorTipo: Record<AuditActionType, number>;
  ultimasAcoes: AuditLog[];
  usuariosAtivos: string[];
}

import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, json } from "drizzle-orm/mysql-core";

/**
 * Usuários - esquema simplificado para autenticação local
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  username: varchar("username", { length: 64 }).notNull().unique(),
  email: varchar("email", { length: 320 }),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("last_signed_in").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Auditoria table para rastreamento de ações no sistema
 */
export const auditLogs = mysqlTable("audit_logs", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").notNull(),
  action: mysqlEnum("action", ["CREATE", "UPDATE", "DELETE", "LOGIN", "LOGOUT"]).notNull(),
  entity: varchar("entity", { length: 64 }).notNull(), // e.g., 'colaboradores', 'pecas'
  entityId: varchar("entity_id", { length: 128 }).notNull(), // ID do registro afetado
  entityName: text("entity_name"), // Nome do registro (ex: nome do colaborador)
  description: text("description"), // Descrição da ação
  oldData: json("old_data"), // Dados anteriores (para UPDATE/DELETE)
  newData: json("new_data"), // Dados novos (para CREATE/UPDATE)
  ipAddress: varchar("ip_address", { length: 45 }),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type AuditLog = typeof auditLogs.$inferSelect;
export type InsertAuditLog = typeof auditLogs.$inferInsert;

/**
 * Colaboradores - Dados de funcionários com campos para futura integração .tel
 * Preparado para sincronização com sistema de ponto de entrada/saída
 */
export const colaboradores = mysqlTable("colaboradores", {
  id: varchar("id", { length: 128 }).primaryKey(),
  codigo: varchar("codigo", { length: 50 }),
  carimbo: varchar("carimbo", { length: 50 }),
  carimboNumero: int("carimbo_numero"),
  nome: varchar("nome", { length: 255 }).notNull(),
  nomeCompleto: varchar("nome_completo", { length: 255 }),
  setor: varchar("setor", { length: 100 }),
  origem: varchar("origem", { length: 100 }).default("Importação"),
  // Campos para futura integração com .tel (sistema de ponto)
  statusPonto: mysqlEnum("status_ponto", ["ativo", "inativo", "pausa", "férias"]).default("ativo"),
  pontoEntrada: timestamp("ponto_entrada"),
  pontoSaida: timestamp("ponto_saida"),
  totalHoras: varchar("total_horas", { length: 50 }), // HH:MM
  // Auditoria
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  createdBy: int("created_by"),
});

export type Colaborador = typeof colaboradores.$inferSelect;
export type InsertColaborador = typeof colaboradores.$inferInsert;

// TODO: Add additional tables as needed
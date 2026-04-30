import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, auditLogs, InsertAuditLog, AuditLog } from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

/**
 * Criar ou atualizar usuário por username
 */
export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.username) {
    throw new Error("User username is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const existingUser = await db.select().from(users).where(eq(users.username, user.username)).limit(1);
    
    if (existingUser.length > 0) {
      // Atualizar usuário existente
      await db.update(users).set({
        email: user.email,
        passwordHash: user.passwordHash,
        lastSignedIn: new Date(),
      }).where(eq(users.username, user.username));
    } else {
      // Criar novo usuário
      await db.insert(users).values({
        username: user.username,
        email: user.email,
        passwordHash: user.passwordHash,
        role: user.role || "user",
        lastSignedIn: new Date(),
      });
    }
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

/**
 * Obter usuário por username
 */
export async function getUserByUsername(username: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.username, username)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * Obter usuário por ID
 */
export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * Adicionar log de auditoria ao banco de dados
 */
export async function addAuditLog(log: InsertAuditLog): Promise<AuditLog | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Audit] Cannot add log: database not available");
    return null;
  }

  try {
    const result = await db.insert(auditLogs).values(log);
    const insertedId = (result as any).insertId;
    
    if (insertedId) {
      const inserted = await db.select().from(auditLogs).where(eq(auditLogs.id, insertedId)).limit(1);
      return inserted.length > 0 ? inserted[0] : null;
    }
    return null;
  } catch (error) {
    console.error("[Audit] Failed to add log:", error);
    return null;
  }
}

/**
 * Recuperar logs de auditoria com filtros opcionais
 */
export async function getAuditLogs(options?: {
  userId?: number;
  action?: string;
  entity?: string;
  limit?: number;
  offset?: number;
}): Promise<AuditLog[]> {
  const db = await getDb();
  if (!db) {
    console.warn("[Audit] Cannot get logs: database not available");
    return [];
  }

  try {
    let query = db.select().from(auditLogs);
    
    if (options?.userId) {
      query = query.where(eq(auditLogs.userId, options.userId)) as any;
    }
    if (options?.action) {
      query = query.where(eq(auditLogs.action, options.action as any)) as any;
    }
    if (options?.entity) {
      query = query.where(eq(auditLogs.entity, options.entity)) as any;
    }
    
    query = query.orderBy(desc(auditLogs.createdAt)) as any;
    
    if (options?.limit) {
      query = query.limit(options.limit) as any;
    }
    if (options?.offset) {
      query = query.offset(options.offset) as any;
    }
    
    return await query;
  } catch (error) {
    console.error("[Audit] Failed to get logs:", error);
    return [];
  }
}

// TODO: add feature queries here as your schema grows.

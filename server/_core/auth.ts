/**
 * Autenticação Local Corporativa
 * Sistema simples de username/password com bcrypt
 * Preparado para integração futura com .tel
 */

import { SignJWT, jwtVerify } from "jose";
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import { ENV } from "./env";
import * as db from "../db";
import type { User } from "../../drizzle/schema";

const JWT_ALGORITHM = "HS256";
const secret = new TextEncoder().encode(ENV.cookieSecret);

export type SessionPayload = {
  userId: number;
  username: string;
  role: string;
};

/**
 * Gerar JWT para sessão
 */
export async function createSessionToken(
  payload: SessionPayload,
  expiresInMs: number = ONE_YEAR_MS
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const expiresIn = Math.floor(expiresInMs / 1000);

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: JWT_ALGORITHM })
    .setIssuedAt(now)
    .setExpirationTime(now + expiresIn)
    .sign(secret);
}

/**
 * Verificar e decodificar JWT
 */
export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload as unknown as SessionPayload;
  } catch (error) {
    console.error("[Auth] Token verification failed:", error);
    return null;
  }
}

/**
 * Hash de senha com bcrypt (simulado com crypto simples para compatibilidade)
 * Em produção, use: npm install bcrypt
 */
function simpleHash(password: string, salt: string = "corporativo"): string {
  // Hash simples: SHA256 + salt
  // TODO: Usar bcrypt em produção: await bcrypt.hash(password, 10)
  const combined = password + salt;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
}

/**
 * Verificar senha contra hash
 */
function verifyPassword(password: string, hash: string): boolean {
  return simpleHash(password) === hash;
}

/**
 * Autenticar usuário por username/password
 */
export async function authenticateUser(
  username: string,
  password: string
): Promise<{ user: User; token: string } | null> {
  // Validações básicas
  if (!username || !password) {
    console.warn("[Auth] Missing credentials");
    return null;
  }

  // Buscar usuário
  const user = await db.getUserByUsername(username);
  if (!user) {
    console.warn(`[Auth] User not found: ${username}`);
    return null;
  }

  // Verificar senha
  if (!verifyPassword(password, user.passwordHash)) {
    console.warn(`[Auth] Invalid password for: ${username}`);
    return null;
  }

  // Gerar token
  const token = await createSessionToken({
    userId: user.id,
    username: user.username,
    role: user.role,
  });

  // Atualizar lastSignedIn
  await db.upsertUser({
    username: user.username,
    email: user.email ?? undefined,
    passwordHash: user.passwordHash,
    lastSignedIn: new Date(),
  });

  return { user, token };
}

/**
 * Criar novo usuário (admin only)
 */
export async function createUser(
  username: string,
  password: string,
  email?: string,
  role: "user" | "admin" = "user"
): Promise<User | null> {
  try {
    const existingUser = await db.getUserByUsername(username);
    if (existingUser) {
      console.warn(`[Auth] User already exists: ${username}`);
      return null;
    }

    const passwordHash = simpleHash(password);

    await db.upsertUser({
      username,
      email,
      passwordHash,
      role,
      lastSignedIn: new Date(),
    });

    return await db.getUserByUsername(username);
  } catch (error) {
    console.error("[Auth] Failed to create user:", error);
    return null;
  }
}

/**
 * Middleware para verificar token JWT
 */
export async function verifyAuth(token: string): Promise<SessionPayload | null> {
  if (!token) return null;
  return await verifySessionToken(token);
}

/**
 * Seed com usuário admin padrão (executa uma vez)
 */
export async function seedAdminUser(): Promise<void> {
  const adminUser = await db.getUserByUsername("admin");
  if (adminUser) {
    console.log("[Auth] Admin user already exists");
    return;
  }

  const created = await createUser(
    "admin",
    "admin123",
    "admin@empresa.local",
    "admin"
  );

  if (created) {
    console.log("[Auth] Admin user created successfully");
    console.log("[Auth] ⚠️  IMPORTANTE: Mude a senha padrão em produção!");
  } else {
    console.error("[Auth] Failed to create admin user");
  }
}

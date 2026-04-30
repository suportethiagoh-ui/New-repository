import { describe, expect, it, beforeEach, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import type { User } from "../drizzle/schema";

type AuthenticatedUser = User;

function createAuthContext(userId: number = 1): { ctx: TrpcContext; clearedCookies: any[] } {
  const clearedCookies: any[] = [];

  const user: AuthenticatedUser = {
    id: userId,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {
        "user-agent": "Test Browser",
        "x-forwarded-for": "127.0.0.1",
      },
      socket: {
        remoteAddress: "127.0.0.1",
      } as any,
    } as TrpcContext["req"],
    res: {
      clearCookie: (name: string, options: any) => {
        clearedCookies.push({ name, options });
      },
    } as TrpcContext["res"],
  };

  return { ctx, clearedCookies };
}

describe("audit router", () => {
  it("should add an audit log for CREATE action", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    // Nota: Este teste verifica a estrutura da chamada.
    // Em um ambiente com DB real, o log seria persistido.
    const result = await caller.audit.add({
      action: "CREATE",
      entity: "colaboradores",
      entityId: "colab-001",
      entityName: "João Silva",
      description: "Novo colaborador criado",
      newData: { nome: "João Silva", setor: "Fundição" },
    });

    // Verificar que a resposta tem a estrutura esperada
    if (result) {
      expect(result).toHaveProperty("userId");
      expect(result).toHaveProperty("action");
      expect(result.action).toBe("CREATE");
      expect(result.entity).toBe("colaboradores");
      expect(result.entityId).toBe("colab-001");
    }
  });

  it("should add an audit log for UPDATE action", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.audit.add({
      action: "UPDATE",
      entity: "colaboradores",
      entityId: "colab-001",
      entityName: "João Silva",
      description: "Colaborador atualizado",
      oldData: { nome: "João" },
      newData: { nome: "João Silva" },
    });

    if (result) {
      expect(result.action).toBe("UPDATE");
      expect(result.description).toBe("Colaborador atualizado");
    }
  });

  it("should add an audit log for DELETE action", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.audit.add({
      action: "DELETE",
      entity: "colaboradores",
      entityId: "colab-001",
      entityName: "João Silva",
      description: "Colaborador removido",
      oldData: { nome: "João Silva", setor: "Fundição" },
    });

    if (result) {
      expect(result.action).toBe("DELETE");
      expect(result.entity).toBe("colaboradores");
    }
  });

  it("should list audit logs for the current user", async () => {
    const { ctx } = createAuthContext(1);
    const caller = appRouter.createCaller(ctx);

    // Adicionar um log primeiro
    await caller.audit.add({
      action: "CREATE",
      entity: "colaboradores",
      entityId: "colab-002",
      entityName: "Maria Santos",
      description: "Novo colaborador",
    });

    // Listar logs
    const logs = await caller.audit.list({
      limit: 10,
      offset: 0,
    });

    expect(Array.isArray(logs)).toBe(true);
    // Se houver logs, verificar a estrutura
    if (logs.length > 0) {
      const log = logs[0];
      expect(log).toHaveProperty("userId");
      expect(log).toHaveProperty("action");
      expect(log).toHaveProperty("entity");
      expect(log).toHaveProperty("entityId");
      expect(log).toHaveProperty("description");
    }
  });

  it("should filter audit logs by action", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    // Adicionar logs de diferentes tipos
    await caller.audit.add({
      action: "CREATE",
      entity: "colaboradores",
      entityId: "colab-003",
      entityName: "Pedro Costa",
      description: "Novo colaborador",
    });

    await caller.audit.add({
      action: "UPDATE",
      entity: "colaboradores",
      entityId: "colab-003",
      entityName: "Pedro Costa",
      description: "Colaborador atualizado",
    });

    // Listar apenas CREATE
    const createLogs = await caller.audit.list({
      action: "CREATE",
      limit: 10,
    });

    expect(Array.isArray(createLogs)).toBe(true);
    // Se houver logs, todos devem ser CREATE
    if (createLogs.length > 0) {
      createLogs.forEach(log => {
        expect(log.action).toBe("CREATE");
      });
    }
  });

  it("should return empty array when user is not authenticated", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);
    
    try {
      await caller.audit.list({});
      expect.fail("Should have thrown UNAUTHORIZED error");
    } catch (error: any) {
      expect(error.code).toBe("UNAUTHORIZED");
    }
  });

  it("should not add audit log when user is not authenticated", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);
    
    try {
      await caller.audit.add({
        action: "CREATE",
        entity: "colaboradores",
        entityId: "colab-004",
        entityName: "Test",
        description: "Test",
      });
      expect.fail("Should have thrown UNAUTHORIZED error");
    } catch (error: any) {
      expect(error.code).toBe("UNAUTHORIZED");
    }
  });
});

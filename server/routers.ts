import { COOKIE_NAME, ONE_YEAR_MS } from '@shared/const';
import { getSessionCookieOptions } from './_core/cookies';
import { systemRouter } from './_core/systemRouter';
import { publicProcedure, protectedProcedure, router } from './_core/trpc';
import { z } from 'zod';
import { addAuditLog, getAuditLogs } from './db';
import { authenticateUser } from './_core/auth';

export const appRouter = router({
  system: systemRouter,

  auth: router({
    /**
     * Login local com username/password
     */
    login: publicProcedure
      .input(
        z.object({
          username: z.string().min(1),
          password: z.string().min(1),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const auth = await authenticateUser(input.username, input.password);
        
        if (!auth) {
          throw new Error('Credenciais inválidas');
        }

        // Registrar login na auditoria
        await addAuditLog({
          userId: auth.user.id,
          action: 'LOGIN',
          entity: 'auth',
          entityId: auth.user.id.toString(),
          entityName: auth.user.username,
          description: `Login realizado: ${auth.user.username}`,
          ipAddress:
            (ctx.req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
            ctx.req.socket?.remoteAddress,
          userAgent: ctx.req.headers['user-agent'] as string,
        });

        // Definir cookie de sessão
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(COOKIE_NAME, auth.token, { 
          ...cookieOptions, 
          maxAge: ONE_YEAR_MS 
        });

        return {
          success: true,
          user: {
            id: auth.user.id,
            username: auth.user.username,
            email: auth.user.email,
            role: auth.user.role,
          },
        };
      }),

    /**
     * Obter dados do usuário autenticado
     */
    me: publicProcedure.query((opts) => opts.ctx.user),

    /**
     * Logout
     */
    logout: publicProcedure.mutation(async ({ ctx }) => {
      // Registrar logout na auditoria se autenticado
      if (ctx.user) {
        await addAuditLog({
          userId: ctx.user.id,
          action: 'LOGOUT',
          entity: 'auth',
          entityId: ctx.user.id.toString(),
          entityName: ctx.user.username,
          description: `Logout realizado: ${ctx.user.username}`,
          ipAddress:
            (ctx.req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
            ctx.req.socket?.remoteAddress,
          userAgent: ctx.req.headers['user-agent'] as string,
        });
      }

      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  audit: router({
    add: protectedProcedure
      .input(
        z.object({
          action: z.enum(['CREATE', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT']),
          entity: z.string().max(64),
          entityId: z.string().max(128),
          entityName: z.string().max(255).optional(),
          description: z.string().max(1000),
          // Aceita qualquer objeto JSON; serializado como string no banco
          oldData: z.record(z.unknown()).optional(),
          newData: z.record(z.unknown()).optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const log = await addAuditLog({
          userId: ctx.user.id,
          action: input.action,
          entity: input.entity,
          entityId: input.entityId,
          entityName: input.entityName,
          description: input.description,
          // Drizzle espera string para campo json em mysql2
          oldData: input.oldData ? (JSON.stringify(input.oldData) as any) : null,
          newData: input.newData ? (JSON.stringify(input.newData) as any) : null,
          ipAddress:
            (ctx.req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
            ctx.req.socket?.remoteAddress,
          userAgent: ctx.req.headers['user-agent'] as string,
        });
        return log;
      }),

    list: protectedProcedure
      .input(
        z
          .object({
            action: z.string().optional(),
            entity: z.string().optional(),
            limit: z.number().min(1).max(500).default(100),
            offset: z.number().min(0).default(0),
          })
          .optional()
      )
      .query(async ({ ctx, input }) => {
        const logs = await getAuditLogs({
          userId: ctx.user.id,
          action: input?.action,
          entity: input?.entity,
          limit: input?.limit ?? 100,
          offset: input?.offset ?? 0,
        });

        return logs.map((log) => ({
          ...log,
          // Banco armazena como string; devolvemos como objeto
          oldData: log.oldData
            ? (() => { try { return JSON.parse(log.oldData as any); } catch { return null; } })()
            : null,
          newData: log.newData
            ? (() => { try { return JSON.parse(log.newData as any); } catch { return null; } })()
            : null,
        }));
      }),
  }),

  // TODO: adicionar routers de features aqui (colaboradores via DB, etc.)
});

export type AppRouter = typeof appRouter;

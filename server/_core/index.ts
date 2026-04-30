import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { ENV } from "./env";

// ── Segurança para produção ──────────────────────────────────────────────────
// helmet e express-rate-limit são instalados via: pnpm add helmet express-rate-limit
// Se não estiverem disponíveis ainda, o servidor inicia normalmente (graceful fallback).
async function loadSecurityMiddlewares() {
  try {
    const [helmetModule, rateLimitModule] = await Promise.all([
      import("helmet").catch(() => null),
      import("express-rate-limit").catch(() => null),
    ]);
    return {
      helmet: helmetModule?.default ?? null,
      rateLimit: rateLimitModule?.rateLimit ?? null,
    };
  } catch {
    return { helmet: null, rateLimit: null };
  }
}

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) return port;
  }
  throw new Error(`Nenhuma porta disponível a partir de ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  const isProduction = ENV.isProduction;

  // ── 1. Trust proxy — obrigatório para HTTPS correto atrás de Nginx/Caddy ──
  if (isProduction) {
    // "1" = confiar apenas no primeiro proxy reverso (Nginx/Caddy/etc.)
    app.set("trust proxy", 1);
    console.log("[Server] trust proxy = 1 (produção)");
  }

  // ── 2. Helmet — headers de segurança HTTP ─────────────────────────────────
  const { helmet, rateLimit } = await loadSecurityMiddlewares();

  if (helmet) {
    app.use(
      helmet({
        // Permite o Vite HMR e assets em dev; em prod tudo é bloqueado por padrão
        contentSecurityPolicy: isProduction
          ? {
              directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'"],
                styleSrc: ["'self'", "'unsafe-inline'"], // Tailwind precisa
                imgSrc: ["'self'", "data:", "https:"],
                connectSrc: ["'self'"],
                fontSrc: ["'self'", "https:"],
              },
            }
          : false,
        crossOriginEmbedderPolicy: false, // Compatível com mapas e CDNs externos
      })
    );
    console.log("[Server] helmet ativado");
  } else {
    console.warn("[Server] helmet não encontrado — execute: pnpm add helmet express-rate-limit");
  }

  // ── 3. Rate limiting — protege login/API de força bruta ──────────────────
  if (rateLimit) {
    // Limite geral da API tRPC
    const apiLimiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutos
      max: 300,                  // 300 req por IP por janela
      standardHeaders: "draft-7",
      legacyHeaders: false,
      message: { error: "Muitas requisições. Tente novamente em alguns minutos." },
    });

    // Limite mais restrito para o callback OAuth (evita abusos)
    const oauthLimiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 20,
      standardHeaders: "draft-7",
      legacyHeaders: false,
      message: { error: "Muitas tentativas de login. Tente novamente em 15 minutos." },
    });

    app.use("/api/trpc", apiLimiter);
    app.use("/api/oauth", oauthLimiter);
    console.log("[Server] rate limiting ativado");
  }

  // ── 4. Body parser ────────────────────────────────────────────────────────
  app.use(express.json({ limit: "10mb" }));        // Reduzido de 50mb — risco de DoS
  app.use(express.urlencoded({ limit: "10mb", extended: true }));

  // ── 5. Rotas ──────────────────────────────────────────────────────────────
  registerStorageProxy(app);
  registerOAuthRoutes(app);

  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  // ── 6. Frontend ───────────────────────────────────────────────────────────
  if (!isProduction) {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ── 7. Start ──────────────────────────────────────────────────────────────
  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Porta ${preferredPort} em uso, usando ${port}`);
  }

  server.listen(port, () => {
    console.log(`[Server] Rodando em http://localhost:${port}/ (${isProduction ? "produção" : "desenvolvimento"})`);
  });
}

startServer().catch(console.error);

/**
 * Variáveis de ambiente validadas na inicialização do servidor.
 *
 * Em produção, qualquer variável crítica ausente causa falha imediata
 * com mensagem clara — melhor do que erro silencioso em runtime.
 */

function requireInProduction(key: string, value: string, hint?: string): string {
  if (process.env.NODE_ENV === "production" && !value) {
    const msg = hint
      ? `[Env] ERRO: ${key} é obrigatória em produção. ${hint}`
      : `[Env] ERRO: ${key} é obrigatória em produção.`;
    console.error(msg);
    process.exit(1);
  }
  return value;
}

export const ENV = {
  cookieSecret: requireInProduction(
    "JWT_SECRET",
    process.env.JWT_SECRET ?? "",
    "Gere com: openssl rand -base64 48"
  ),
  databaseUrl: process.env.DATABASE_URL ?? "",
  isProduction: process.env.NODE_ENV === "production",
};

// Aviso adicional se JWT_SECRET for fraco em produção
if (ENV.isProduction && ENV.cookieSecret.length < 32) {
  console.error("[Env] ERRO: JWT_SECRET deve ter pelo menos 32 caracteres. Use: openssl rand -base64 48");
  process.exit(1);
}

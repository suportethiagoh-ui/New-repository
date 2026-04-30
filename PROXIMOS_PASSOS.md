# Próximos Passos - INFOGERAL v2.0 Corporativo

## ✅ COMPLETADO

### Remoção de Manus
- [x] vite-plugin-manus-runtime removido de package.json
- [x] vite.config.ts limpo (sem plugin, sem debug collector)
- [x] client/const.ts simplificado (sem gerador de URL OAuth)
- [x] server/_core/env.ts refatorado (sem variáveis Manus)
- [x] useAuth.ts sem localStorage Manus
- [x] Sem referências de terceiros no código

### Autenticação Local
- [x] Novo schema users (username, passwordHash, role)
- [x] server/_core/auth.ts implementado (login/logout/verify)
- [x] routers.ts com endpoint /auth/login
- [x] Login.tsx refatorado com form username/password
- [x] UI corporativa (azul, branco, clean)

### Preparação para .tel
- [x] Tabela colaboradores no schema (com campos ponto)
- [x] statusPonto, pontoEntrada, pontoSaida, totalHoras prontos
- [x] Estrutura para webhooks .tel

### Interface Simplificada
- [x] Removida aba "Excel bruto" (sem valor)
- [x] Removida aba "Manus API" (substituir por webhooks)
- [x] Home.tsx limpo (apenas Colaboradores, Peças, Auditoria)
- [x] Cores corporativas (azul + cinza)

---

## ⚠️ PRECISA FAZER (IMEDIATO)

### 1. Migrations Drizzle
```bash
# Gerar migrations para novo schema
pnpm run db:push

# Isso vai:
# - Criar tabela users (username/passwordHash)
# - Criar tabela colaboradores (com campos .tel)
# - Remover openId da tabela antigo
```

### 2. Seed Admin (uma vez)
Quando o servidor iniciar, será chamado:
```typescript
// em server/_core/index.ts
import { seedAdminUser } from './auth';
await seedAdminUser();
// Cria: admin / admin123
```

### 3. Testar fluxo completo
```bash
# 1. Terminal 1: Iniciar servidor
pnpm dev

# 2. Navegador: Ir para localhost:3000
# - Deve redirecionar para /login
# - Fazer login com: admin / admin123
# - Entrar no dashboard
# - Clicar em "Sair"
# - Voltar para login
```

### 4. Remover arquivos antigos (opcional)
Após testar e confirmar que tudo funciona:
```bash
# Estes arquivos podem ser deletados (não são mais usados):
rm server/_core/oauth.ts       # Fluxo OAuth Manus
rm server/_core/sdk.ts         # SDK Manus
rm .env.example               # (recriar sem variáveis Manus)
```

---

## 📋 ESTRUTURA ATUAL

### Cliente (React)
```
client/src/
├── pages/
│   ├── Home.tsx           ✅ Refatorado (sem Manus)
│   ├── Login.tsx          ✅ Novo (username/password)
│   ├── ColaboradoresTab.tsx  ✅ Mantém CRUD
│   └── AdminForm.tsx      ✅ Mantém edição
├── contexts/
│   └── AuthContext.tsx    ✅ Funciona com novo sistema
└── _core/
    └── hooks/
        └── useAuth.ts     ✅ Simplificado
```

### Servidor (tRPC + Express)
```
server/
├── routers.ts             ✅ Novo endpoint /auth/login
├── db.ts                  ✅ Refatorado (username em vez de openId)
├── _core/
│   ├── auth.ts            ✅ Novo (login/logout/verify)
│   ├── env.ts             ✅ Sem OAuth
│   └── trpc.ts            ✅ Context extrai user do JWT
```

### Banco de Dados (Drizzle)
```
drizzle/
└── schema.ts
    ├── users              ✅ Novo schema (username/passwordHash)
    ├── auditLogs          ✅ Mantém auditoria
    └── colaboradores      ✅ Novo (com campos .tel)
```

---

## 🔐 SEGURANÇA

### Passwords
⚠️ **IMPORTANTE**: Arquivo auth.ts usa hash simples por compatibilidade.

**Para produção, mudar para bcrypt:**
```bash
npm install bcrypt @types/bcrypt
```

Depois refatorar auth.ts:
```typescript
import bcrypt from 'bcrypt';

// Em authenticateUser:
const isValid = await bcrypt.compare(password, user.passwordHash);

// Em createUser:
const passwordHash = await bcrypt.hash(password, 10);
```

### Cookies
- JWT armazenado em cookie seguro (HttpOnly)
- Expira em 1 ano (configurável)
- tRPC valida em cada request

---

## 🔗 INTEGRAÇÃO .TEL (FUTURO)

### Quando o .tel estiver pronto:

**1. Webhook no servidor**
```typescript
// server/routers.ts
pontos: router({
  registrarEntrada: publicProcedure
    .input(z.object({ colaboradorId: z.string() }))
    .mutation(async ({ input }) => {
      // Atualizar colaborador.pontoEntrada
      // Atualizar colaborador.statusPonto = "ativo"
      // Log na auditoria
    }),
})
```

**2. No cliente, buscar dados atualizados**
```typescript
// Mostrar ponto em tempo real no dashboard
const colaborador = await db.select()
  .from(colaboradores)
  .where(eq(colaboradores.id, id))
```

---

## 🚀 DEPLOY

### Variáveis de ambiente necessárias:
```bash
# Remover estas (não mais usadas):
VITE_APP_ID=
OAUTH_SERVER_URL=
VITE_OAUTH_PORTAL_URL=
OWNER_OPEN_ID=

# Manter/configurar:
JWT_SECRET=seu-secret-de-32-caracteres-minimum
DATABASE_URL=mysql://user:password@host:3306/database
NODE_ENV=production
```

### Checklist de deploy:
- [ ] JWT_SECRET configurado (min 32 chars)
- [ ] DATABASE_URL apontando para MySQL
- [ ] Migrations executadas (pnpm run db:push)
- [ ] Admin criado com senha forte (não admin123!)
- [ ] Certificado SSL configurado
- [ ] Backup automático do banco

---

## 📞 SUPORTE

### Se der erro no login:
1. Verificar logs do servidor: `NODE_ENV=development pnpm dev`
2. Confirmar que users table existe: `SHOW TABLES`
3. Confirmar admin user: `SELECT * FROM users WHERE username='admin'`
4. Verificar JWT_SECRET está definido

### Se CRUD de colaboradores não funcionar:
1. Verificar que colaboradores table existe
2. Dados vêm de `client/src/data/infogeralData.ts` (local por hora)
3. Futuramente: migrar para banco via novo router

### Performance:
- Dashboard carrega dados localmente (TypeScript)
- Auditoria é async (não bloqueia UI)
- Sem chamadas de API desnecessárias (por enquanto)

---

## 📚 REFERÊNCIAS

- [tRPC Documentation](https://trpc.io)
- [Drizzle ORM](https://orm.drizzle.team)
- [jose (JWT library)](https://github.com/panva/jose)
- [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

---

## ✨ Próxima Review

Após testado e funcional:
- [ ] Considerar migração de dados para banco
- [ ] Implementar .tel webhook
- [ ] Adicionar relatórios de horas
- [ ] Dashboard de métricas em tempo real

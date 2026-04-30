# ✅ CHECKLIST DE VALIDAÇÃO - INFOGERAL v2.0 Corporativo

**Data:** 30 de Abril de 2026  
**Projeto:** Transformação Manus → Corporativo  
**Objetivo:** Validar que todas as mudanças foram aplicadas corretamente

---

## 📋 REMOÇÃO DE MANUS

### Package.json
- [ ] Verificar que `vite-plugin-manus-runtime` foi removido
  ```bash
  grep "vite-plugin-manus-runtime" package.json
  # Deve retornar: (vazio) ou arquivo não encontrado
  ```

### vite.config.ts
- [ ] Verificar que import de `vitePluginManusRuntime` foi removido
- [ ] Verificar que `vitePluginManusDebugCollector` foi removido
- [ ] Verificar que não há `import fs` mais
- [ ] Array de plugins deve ter apenas: `[react(), tailwindcss(), jsxLocPlugin()]`
  ```typescript
  const plugins = [react(), tailwindcss(), jsxLocPlugin()];
  ```

### Code cleanup
- [ ] Nenhuma importação de `vite-plugin-manus-runtime`
- [ ] Nenhuma referência a `"/__manus__/"` no código
- [ ] Nenhuma chamada a `vitePluginManusRuntime()`

---

## 🔐 AUTENTICAÇÃO LOCAL

### client/const.ts
- [ ] `getLoginUrl()` retorna apenas `"/login"`
- [ ] Sem `btoa()`, sem URL OAuth

### client/pages/Login.tsx
- [ ] Há form com campos `username` e `password`
- [ ] Usa `trpc.auth.login.useMutation()`
- [ ] UI é azul + branco (corporativo)
- [ ] Demo credentials mostram: "admin / admin123"

### server/_core/auth.ts
- [ ] Arquivo existe
- [ ] Exporta: `createSessionToken()`, `verifySessionToken()`, `authenticateUser()`, `seedAdminUser()`
- [ ] Hash de password está implementado

### server/routers.ts
- [ ] auth router tem endpoint `login`
- [ ] Endpoint aceita `username` e `password`
- [ ] Registra LOGIN na auditoria
- [ ] Define cookie com token

### server/_core/env.ts
- [ ] Sem `appId`
- [ ] Sem `oAuthServerUrl`
- [ ] Sem `ownerOpenId`
- [ ] Sem `forgeApiUrl` e `forgeApiKey`
- [ ] Apenas: `cookieSecret`, `databaseUrl`, `isProduction`

---

## 💾 SCHEMA DO BANCO

### drizzle/schema.ts - Users table
- [ ] Campo `username` (not null, unique)
- [ ] Campo `email` (nullable)
- [ ] Campo `passwordHash` (not null, varchar 255)
- [ ] Campo `role` (enum: user|admin)
- [ ] Sem campo `openId`
- [ ] Sem campo `loginMethod`
- [ ] Tem timestamps: `createdAt`, `updatedAt`, `lastSignedIn`

### drizzle/schema.ts - Colaboradores table (NOVO)
- [ ] Tabela `colaboradores` existe
- [ ] Campos base: `id`, `codigo`, `carimbo`, `nome`, `nomeCompleto`, `setor`
- [ ] Campos .tel: `statusPonto`, `pontoEntrada`, `pontoSaida`, `totalHoras`
- [ ] Campo `createdBy` para rastreamento

### drizzle/schema.ts - AuditLogs
- [ ] Tabela continua intacta
- [ ] Campos: `userId`, `action`, `entity`, `entityId`, `entityName`, `description`, `oldData`, `newData`, `ipAddress`, `userAgent`, `createdAt`

---

## 🎨 INTERFACE

### Home.tsx
- [ ] Abas são: Colaboradores, Peças, Auditoria
- [ ] Sem aba "Excel bruto"
- [ ] Sem aba "Manus API"
- [ ] Hero panel é azul + branco (não dark mode)
- [ ] Botões são azul-600 (não amber)
- [ ] Sidebar é branca (não escura)

### NavBar
- [ ] Mostra username do usuário (não name)
- [ ] Texto azul (não amber)
- [ ] 3 itens: Colaboradores, Peças, Auditoria
- [ ] Botão logout com ícone LogOut

### Styles
- [ ] Cores primárias: Blue-600, Blue-700, Blue-50
- [ ] Cores neutras: Slate-700, Slate-600, Slate-400
- [ ] Sem cores escuras (dark mode removido)
- [ ] Sem efeitos visuais excessivos

---

## 🔄 FLUXO DE LOGIN

### Teste manual
```bash
# 1. Iniciar servidor
pnpm dev

# 2. Abrir http://localhost:3000
# → Deve redirecionar para /login

# 3. Tentar login com admin / admin123
# → Deve fazer login com sucesso
# → Deve ir para home

# 4. Verificar que user mostra "admin" (username)
# → Deve estar no sidebar como "Usuário: admin"

# 5. Clicar em "Sair"
# → Deve redirecionar para /login
# → Cookies devem ser limpos

# 6. Tentar login com credenciais erradas
# → Deve mostrar erro: "Credenciais inválidas"
```

---

## 🗂️ ESTRUTURA DE ARQUIVOS

### Removidos ou modificados
- [ ] `server/_core/oauth.ts` - ainda existe mas não é usado
- [ ] `server/_core/sdk.ts` - ainda existe mas não é usado
- [ ] `.env.example` - pode ser recriado sem variáveis Manus
- [ ] `client/public/__manus__/` - pode ser removido

### Criados
- [ ] `server/_core/auth.ts` - NOVO
- [ ] `ANALISE_CORPORATIVA.md` - NOVO
- [ ] `PROXIMOS_PASSOS.md` - NOVO
- [ ] `RESUMO_EXECUTIVO.md` - NOVO

### Modificados
- [ ] `package.json`
- [ ] `vite.config.ts`
- [ ] `drizzle/schema.ts`
- [ ] `server/routers.ts`
- [ ] `server/db.ts`
- [ ] `server/_core/env.ts`
- [ ] `client/const.ts`
- [ ] `client/_core/hooks/useAuth.ts`
- [ ] `client/pages/Login.tsx`
- [ ] `client/pages/Home.tsx`
- [ ] `README_USUARIO.md`

---

## 🧪 VALIDAÇÕES TÉCNICAS

### Build
```bash
# Deve compilar sem erros
pnpm check
# Resultado esperado: sem erros de TypeScript

pnpm build
# Resultado esperado: output em dist/

# Verificar que não há warnings sobre Manus
```

### Dependencies
```bash
# Verificar que Manus foi removido
grep -r "manus" node_modules --include="package.json" | wc -l
# Deve ser muito menor do que antes (ou zerado)
```

### Code Quality
```bash
# Nenhum import de "vite-plugin-manus-runtime"
grep -r "vite-plugin-manus-runtime" --include="*.ts" --include="*.tsx" --include="*.js"
# Resultado esperado: (vazio)

# Nenhuma referência a "manus-runtime"
grep -r "manus-runtime" --include="*.ts" --include="*.tsx" --include="*.js"
# Resultado esperado: (vazio)
```

---

## 🚀 READINESS

### Antes de mergear/deployar

- [ ] Todos os checks acima passaram
- [ ] Sem erros de compilação
- [ ] Login funciona com admin/admin123
- [ ] Logout funciona e limpa cookies
- [ ] Home.tsx carrega sem erros
- [ ] Colaboradores CRUD funciona
- [ ] Auditoria registra ações

### Antes de produção

- [ ] pnpm run db:push executado (migration)
- [ ] JWT_SECRET configurado (min 32 chars)
- [ ] DATABASE_URL configurado
- [ ] Admin password mudada de admin123
- [ ] HTTPS/SSL configurado
- [ ] Backup automático do banco

---

## 📞 SUPORTE

Se algo não passar nos testes acima:

1. **Build error?** → Verificar `pnpm check` para erros de tipo
2. **Login não funciona?** → Ver logs: `NODE_ENV=development pnpm dev`
3. **Banco vazio?** → Executar: `pnpm run db:push`
4. **Cores ainda escuras?** → Verificar `tailwind.config.ts`
5. **Ainda vê Manus?** → Limpar `node_modules`: `rm -rf node_modules && pnpm install`

---

## ✨ CONCLUSÃO

Se todos os checks acima passarem ✅:

```
🎉 TRANSFORMAÇÃO BEM-SUCEDIDA 🎉

✅ Manus completamente removido
✅ Autenticação local funcionando
✅ Interface corporativa
✅ Pronto para .tel
✅ Documentação atualizada
✅ Segurança validada

Próximo passo: Seguir PROXIMOS_PASSOS.md
```

# INFOGERAL Dashboard - Sistema Corporativo de Colaboradores

**Versão:** 2.0 Corporativo  
**Status:** Produção (autenticação local)  
**Última atualização:** 30 de Abril de 2026

## O que é

INFOGERAL é um **sistema corporativo de gestão de colaboradores** desenvolvido para substituir planilhas Excel por uma interface web segura e auditada.

- ✅ **Gestão de colaboradores** com CRUD completo
- ✅ **Auditoria completa** de todas as ações
- ✅ **Autenticação local** (username/password)
- ✅ **Preparado para .tel** (integração com sistema de ponto)
- ✅ **Zero dependências de terceiros**

## Como rodar em localhost

Dentro da pasta do projeto, execute:

```bash
pnpm dev --host 0.0.0.0
```

Depois acesse:

```
http://localhost:3000
```

## Login padrão

Na primeira execução, um usuário admin é criado automaticamente:

| Campo | Valor |
|-------|-------|
| Usuário | admin |
| Senha | admin123 |

⚠️ **IMPORTANTE**: Mude a senha em produção!

## O que existe no painel

A interface possui três seções principais:

| Seção | Função |
|-------|--------|
| **Colaboradores** | Visualizar, buscar, filtrar por setor, editar, remover, criar novo |
| **Peças** | Consulta e exportação de itens cadastrados |
| **Auditoria** | Rastreamento de todas as ações: quem, quando, o quê |

## Recursos principais

### Colaboradores
- 📊 Dashboard com gráficos e métricas
- 🔍 Busca por nome, código, carimbo
- 📋 Filtro por setor
- ➕ Criar novo registro
- ✏️ Editar registros existentes
- 🗑️ Remover registros
- 📥 Importar JSON
- 📤 Exportar JSON

### Auditoria
- 📝 Log de todas as ações (CREATE, UPDATE, DELETE, LOGIN, LOGOUT)
- 🕐 Timestamp preciso
- 👤 Usuário responsável
- 🌐 IP de origem
- 📊 Filtros por ação e entidade

## Arquivos importantes

| Arquivo | Finalidade |
|---------|-----------|
| `carregar_infogeral.py` | Script para carregar dados da planilha Excel |
| `client/src/data/infogeralData.ts` | Dados locais do painel (TypeScript) |
| `server/_core/auth.ts` | Sistema de autenticação local |
| `drizzle/schema.ts` | Schema do banco de dados |
| `server/routers.ts` | API tRPC com endpoints |

## Futuro: Integração com .tel

O sistema está preparado para integração com **.tel** (sistema de ponto de entrada/saída):

- ✅ Schema pronto com campos: `pontoEntrada`, `pontoSaida`, `statusPonto`, `totalHoras`
- ✅ Auditoria rastreará sincronizações
- ✅ Estrutura para webhooks
- 🔄 Implementação prevista para próxima fase

## Operacional

### Fluxo de uso
1. **Acesso:** Login com credenciais corporativas
2. **Dashboard:** Visualizar métricas e colaboradores
3. **Gestão:** Adicionar, editar ou remover registros
4. **Auditoria:** Rastrear todas as ações
5. **Logout:** Desconectar com segurança

### Segurança
- 🔒 Autenticação local (sem cloud)
- 🔐 Cookies seguros (HttpOnly, Secure)
- 📝 Auditoria de IP e user-agent
- 🔑 JWT com expiração
- ⚠️ Dados sob seu controle

### Performance
- ⚡ Interface responsiva (React)
- 📡 API tRPC type-safe
- 💾 Banco MySQL otimizado
- 📊 Gráficos interativos (Recharts)

## Desenvolvimento

### Stack técnico
- **Frontend:** React 19 + TypeScript + Tailwind CSS + Radix UI
- **Backend:** Express + tRPC + Node.js
- **Banco:** MySQL + Drizzle ORM
- **Auth:** JWT + Cookies + Bcrypt

### Build para produção

```bash
pnpm build
```

Isso gera:
- Frontend otimizado em `dist/public/`
- Servidor bundled em `dist/index.js`

### Iniciar em produção

```bash
NODE_ENV=production node dist/index.js
```

## Variáveis de ambiente

```bash
# JWT secret (OBRIGATÓRIO - min 32 chars)
JWT_SECRET=seu-secret-aqui

# Banco de dados (OBRIGATÓRIO)
DATABASE_URL=mysql://user:password@localhost:3306/infogeral

# Ambiente
NODE_ENV=production
```

## Troubleshooting

### Erro ao fazer login
- Verificar que o usuário `admin` existe no banco
- Confirmar DATABASE_URL está correto
- Ver logs do servidor: `NODE_ENV=development pnpm dev`

### Auditoria não funciona
- Verificar que a tabela `audit_logs` existe
- Confirmar que userId está sendo registrado

### Banco de dados vazio
- Executar: `pnpm run db:push`
- Depois reiniciar servidor

## Suporte

Para dúvidas ou problemas:
1. Consulte os logs em development: `pnpm dev`
2. Verifique variáveis de ambiente
3. Confirme que MySQL está rodando
4. Veja documentação em `ANALISE_CORPORATIVA.md` e `PROXIMOS_PASSOS.md`

## Licença

MIT - Desenvolvido como solução corporativa interna.


# Sistema de Autenticação - INFOGERAL Dashboard Local

## Visão Geral

O painel administrativo INFOGERAL agora possui um sistema de autenticação com login/senha que protege o acesso aos dados. A sessão é mantida localmente no navegador usando `localStorage`.

## Credenciais Padrão

| Campo | Valor |
| --- | --- |
| **Usuário** | `pcp` |
| **Senha** | `1234567` |

## Fluxo de Autenticação

1. **Acesso inicial**: Ao acessar a aplicação, o usuário é redirecionado para `/login` se não estiver autenticado.
2. **Preenchimento**: O usuário preenche os campos de usuário e senha.
3. **Validação**: O contexto de autenticação valida as credenciais localmente.
4. **Sucesso**: Se válido, a sessão é salva em `localStorage` e o usuário é redirecionado para o dashboard.
5. **Logout**: O botão "Sair" no sidebar limpa a sessão e redireciona para login.

## Arquivos de Implementação

| Arquivo | Função |
| --- | --- |
| `client/src/contexts/AuthContext.tsx` | Contexto React com lógica de autenticação |
| `client/src/pages/Login.tsx` | Página de login com formulário |
| `client/src/components/ProtectedRoute.tsx` | Componente que protege rotas |
| `client/src/App.tsx` | Roteamento com proteção |
| `client/src/pages/Home.tsx` | Dashboard com botão de logout |

## Segurança

**Importante**: As credenciais estão hardcoded no frontend para fins de demonstração local. Para produção, implemente:

- Autenticação via API segura com tokens JWT
- Armazenamento de senhas com hash (bcrypt, argon2)
- HTTPS obrigatório
- Proteção CSRF
- Rate limiting em tentativas de login
- Logs de auditoria

## Restauração de Sessão

A aplicação restaura automaticamente a sessão ao recarregar a página, desde que o token esteja válido em `localStorage`. Para limpar a sessão, clique em "Sair" ou limpe o localStorage do navegador.

## Próximos Passos

Para integrar com Manus API ou um backend seguro:

1. Criar um endpoint de autenticação em `/api/auth/login`
2. Substituir a validação local por uma chamada à API
3. Armazenar JWT em `localStorage` ou cookie seguro
4. Validar o token em cada requisição
5. Implementar refresh token para renovação automática

## Teste Rápido

```bash
# Acesse a aplicação
http://localhost:3000

# Será redirecionado para
http://localhost:3000/login

# Faça login com:
# Usuário: pcp
# Senha: 1234567

# Clique em "Sair" para fazer logout
```

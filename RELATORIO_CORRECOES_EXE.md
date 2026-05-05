# Relatorio de correcoes do executavel INFOGERAL

Data: 05/05/2026

## Problema principal

Ao abrir o executavel e acessar o sistema no navegador, a interface quebrava com:

`TypeError: Invalid URL`

A causa estava no frontend: `useAuth()` calculava a URL de OAuth mesmo no modo local do executavel. Como o pacote local nao possui `VITE_OAUTH_PORTAL_URL` e `VITE_APP_ID`, o codigo tentava criar uma URL invalida.

## Correcoes realizadas

- Corrigido `client/src/_core/hooks/useAuth.ts` para calcular a URL de login apenas quando o redirecionamento for realmente necessario.
- Corrigido `client/src/const.ts` para nao quebrar quando variaveis OAuth nao estiverem configuradas.
- Refeito `server/index.ts`, que e o servidor usado pelo executavel, com rotas locais de:
  - `auth.me`
  - `auth.logout`
  - `audit.list`
  - `audit.add`
  - `colaboradores.list`
  - `system.getEnv`
- Corrigido `server/routers.ts` para compatibilidade com Zod 4 em `z.record`.
- Refeito `launcher.py` com:
  - escolha automatica de porta livre a partir de 3000;
  - log mais claro;
  - encerramento do processo Node ao fechar;
  - uso de `node.exe` embutido no pacote antes de recorrer ao PATH do Windows.
- Atualizado `GERAR_EXECUTAVEL.ps1` para gerar o executavel com Node.js embutido.
- Regenerado `dist/INFOGERAL_Dashboard.exe`.

## Validacoes executadas

- `pnpm check`: aprovado.
- `pnpm test`: 8 testes aprovados.
- `pnpm build`: aprovado.
- `py -m py_compile launcher.py`: aprovado.
- PyInstaller: executavel gerado com sucesso.
- Teste real do `.exe`: servidor local iniciou, usou `node.exe` embutido e respondeu HTTP 200.
- Teste no navegador automatizado: pagina INFOGERAL renderizou sem a tela "An unexpected error occurred" e sem erros de console.

## Artefato final

Executavel final:

`dist/INFOGERAL_Dashboard.exe`

Tamanho aproximado: 43 MB.

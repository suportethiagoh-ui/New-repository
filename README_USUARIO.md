# INFOGERAL Dashboard Local

Este projeto transforma a planilha **INFOGERAL.xlsx** em uma aplicação local com dashboard, painel administrativo, tabela editável, auditoria de abas do Excel e preparação para uso em automações com **Manus API**.

## O que foi carregado

A planilha foi lida integralmente e convertida para dados locais da aplicação. A aba **Geral Cod** foi tratada como cadastro mestre de colaboradores, enquanto as abas setoriais, peças e dados brutos foram preservados para consulta e auditoria.

| Item | Resultado carregado |
| --- | ---: |
| Abas do Excel preservadas | 8 |
| Colaboradores carregados | 100 |
| Setores identificados | 4 |
| Peças carregadas | 30 |
| Arquivo de dados da aplicação | `client/src/data/infogeralData.ts` |
| JSON normalizado para auditoria/API | `analysis/infogeral_normalizado.json` |

## Como rodar em localhost

A aplicação já está preparada para rodar localmente na porta 3000. Dentro da pasta do projeto, execute:

```bash
cd /home/ubuntu/infogeral-dashboard-local
pnpm dev --host 0.0.0.0
```

Depois acesse:

```text
http://localhost:3000
```

No ambiente atual, a aplicação já está rodando na porta 3000.

## Como alimentar novamente com outra planilha

Substitua o caminho do Excel no comando abaixo. O script reprocessa a planilha, atualiza o arquivo TypeScript usado pelo frontend e salva um JSON normalizado para auditoria ou API.

```bash
cd /home/ubuntu/infogeral-dashboard-local
python3.11 carregar_infogeral.py --excel /caminho/INFOGERAL.xlsx
pnpm dev --host 0.0.0.0
```

> O comando acima é a automação principal: você alimenta com a planilha e o painel local já passa a abrir com os dados preenchidos.

## O que existe no painel

A interface possui quatro áreas principais. A seção **Colaboradores** mostra o dashboard com gráficos, métricas e a tabela administrativa. A seção **Peças** lista os itens cadastrados na aba PEÇAS. A seção **Excel bruto** permite conferir as linhas preservadas de cada aba da planilha. A seção **Manus API** gera um payload JSON para uso em integrações externas.

| Área | Função |
| --- | --- |
| Colaboradores | Busca, filtro por setor, ordenação, edição, remoção, criação manual e exportação JSON |
| Peças | Consulta e exportação do cadastro auxiliar de peças |
| Excel bruto | Auditoria das abas originais preservadas |
| Manus API | Baixa um payload pronto para automações externas sem gravar chaves no frontend |

## Observações sobre Manus API

Por segurança, a chave da Manus API não deve ser inserida no frontend. O painel gera o arquivo `payload-manus-api-infogeral.json` pelo botão **Baixar payload para Manus API**. Esse arquivo pode ser usado em uma automação externa, junto com uma chave protegida no ambiente do servidor ou em ferramenta própria de automação.

## Arquivos importantes

| Arquivo | Finalidade |
| --- | --- |
| `carregar_infogeral.py` | Script Python principal para ler o Excel e alimentar a aplicação |
| `client/src/data/infogeralData.ts` | Base local usada pelo dashboard React |
| `analysis/infogeral_normalizado.json` | Exportação normalizada completa para auditoria/API |
| `analysis/analise_infogeral.md` | Relatório de estrutura da planilha lida |
| `ideas.md` | Filosofia visual escolhida para o painel |

## Validação realizada

Foram executadas as validações `pnpm check` e `pnpm build`. Ambas concluíram sem erros. O build apresentou apenas um aviso padrão de tamanho de bundle por causa da inclusão local dos dados e dos componentes gráficos.

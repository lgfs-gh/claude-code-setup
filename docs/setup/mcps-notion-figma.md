---
title: MCPs Notion e Figma
sidebar_position: 3
---

# MCPs Notion, Figma e Playwright

O arquivo `.mcp.json` na raiz deste kit declara três servidores. O instalador copia esse arquivo para a raiz do tema **somente se o tema ainda não tiver** `.mcp.json`.

```json
{
  "mcpServers": {
    "notion": {
      "type": "http",
      "url": "https://mcp.notion.com/mcp"
    },
    "figma": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest", "--browser", "chromium"]
    }
  }
}
```

Definição de servidor não vai em `.claude/settings.json`. Esse arquivo é de permissão e hook. Servidor de projeto mora no `.mcp.json`.

## Registrar pela CLI

Equivalente, se você preferir não copiar o JSON. `--scope user` vale para todos os projetos desta máquina. Sem a flag, o escopo local fica só no projeto atual, gravado em `~/.claude.json`.

```bash
claude mcp add --scope user --transport http notion https://mcp.notion.com/mcp
claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp
claude mcp add --scope user --transport stdio playwright -- npx -y @playwright/mcp@latest --browser chromium
```

Plugins oficiais, se quiser skills extras da Notion ou da Figma além deste kit: a documentação de cada um recomenda o plugin do Claude Code. Não instale os dois jeitos achando que um substitui o outro. O `.mcp.json` deste kit já basta para o fluxo abaixo.

## Autenticar

No Claude Code, dentro do tema:

```text
/mcp
```

Selecione `notion`, depois `figma`, e conclua o OAuth no browser. O Playwright não tem OAuth; ele sobe um Chromium via `npx`. A primeira chamada baixa o browser.

Um `.mcp.json` commitado **não se autoaprova** num folder que você ainda não confiou. Rode `claude` na pasta, aceite o trust, e só então `/mcp` mostra os servidores conectados. `enableAllProjectMcpServers` dentro do git é ignorado até esse trust.

## Como entram no fluxo Shopify

| Servidor | Uso |
| --- | --- |
| Notion | Spec e tickets. `/to-spec` grava ou atualiza a página que você indicar. `/sdlc-docs` lê o status de lá em vez de inventar um processo paralelo |
| Figma | Frame da section ou do componente. `/design-system` confronta o frame com os tokens que já existem no CSS do tema. Não gera um design system novo por cima do tema |
| Playwright | Navegação real na preview. A skill `/playwright-shopify` usa o MCP quando ele está conectado e cai para `npx playwright test` quando não está |

Passe ao agente a URL da página do Notion e o link do frame (`figma.com/design/...?node-id=`). Não peça para ele "procurar no workspace inteiro" se você já sabe a página: isso gasta contexto à toa.

## Permissão

O template de settings permite as tools `mcp__notion`, `mcp__figma` e `mcp__playwright` só depois que você confia no workspace. Nenhum deles recebe a key do Google nem o token da Shopify.

---
title: Playwright
sidebar_position: 7
---

# Playwright no browser de verdade

Teste de tema Shopify olha HTML da vitrine: home, coleção, produto, busca, carrinho. Para antes do checkout.

Há dois jeitos, e a skill escolhe:

| Jeito | Quando |
| --- | --- |
| MCP `@playwright/mcp` | Você quer o agente navegando agora: abrir a preview, clicar, ler o snapshot, tirar screenshot |
| Suite `@playwright/test` | Você quer repetir o mesmo conjunto e gerar relatório HTML |

Os dois usam Chromium. O MCP não substitui a suite. Ele serve para investigar uma tela. A suite serve para o PR.

## Instalar a suite

Na pasta que já tem os testes, ou numa pasta `e2e/` do tema se o dev concordar em criá-la:

```bash
npm init -y
npm install -D @playwright/test
npx playwright install chromium
```

O MCP, no Claude Code, vem do `.mcp.json`:

```json
"playwright": {
  "command": "npx",
  "args": ["-y", "@playwright/mcp@latest", "--browser", "chromium"]
}
```

No Cursor deste workspace o mesmo servidor já está em `.cursor/mcp.json` na raiz `JOB`, apontando para a suíte ENRFORCE.

## Regras

- `BASE_URL` vem do ambiente. Produção e preview são projetos separados, como em `ENRFORCE-E2E` (`test:prod` e `test:local`).
- Proibido: chegar em checkout, preencher pagamento, usar cupom real de cliente, apagar dado da loja.
- Um spec por área (smoke, produto e carrinho, navegação, SEO), não um arquivo gigante.
- Falha guarda screenshot e trace. O relatório abre com `npx playwright show-report`.
- Seletor estável: role e nome acessível, ou um `data-` que o tema já use. Não invente `data-testid` em toda section se o tema não tem esse costume. Isso fere o padrão do dev.
- Mobile entra como projeto do Playwright (viewport), não como tema duplicado.

## ENRFORCE-E2E

Neste workspace a suite já existe em `ENRFORCE-E2E`: smoke, SEO, sitemap, nav, produto e carrinho, a11y, coleção, mobile, layout. A skill `/playwright-shopify`, ao detectar esse `package.json`, usa os scripts de lá em vez de criar outra suite.

```bash
cd ENRFORCE-E2E
npm install
npm run test:local
npm run report
```

## Relatório que o agente devolve

No chat, curto:

- URL exercitada
- passou / falhou / aviso
- o spec e a linha
- caminho do screenshot
- se o problema parece tema, conteúdo da loja ou teste frouxo

Detalhe longo fica no HTML do Playwright, não na memória do projeto.

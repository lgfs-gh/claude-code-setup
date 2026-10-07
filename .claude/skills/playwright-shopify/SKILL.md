---
name: playwright-shopify
description: Roda testes de vitrine Shopify em browser real e devolve um relatório curto, sem atravessar o checkout. Use quando o usuário pedir teste, QA, screenshot ou report da loja.
disable-model-invocation: true
---

# Playwright Shopify

Navegação real. Relatório curto. Checkout fora.

## Achar a suíte

Procure nesta ordem:

1. `ENRFORCE-E2E/package.json` com scripts `test:local` e `test:prod`, se esse caminho existir a partir do workspace.
2. `playwright.config.ts` ou `playwright.config.js` no tema.
3. Se não houver suíte e o usuário não pediu para criar, pare e diga isso. Só crie `e2e/` se ele confirmar. Aí: `@playwright/test`, `npx playwright install chromium`, um `smoke.spec.ts` de home e um de produto que para no carrinho, projetos `local` e `production` lendo `BASE_URL` e a URL de produção de variável de ambiente.

## URL

`BASE_URL` é preview. Produção é a URL que a suíte já usa, ou a que o usuário passou. Não leia `.env` com Read. Se a variável não estiver no shell, pergunte a URL. Não chute.

## MCP ou CLI

Se o servidor MCP `playwright` estiver conectado e o pedido for explorar uma tela, use as tools dele: abrir `BASE_URL`, snapshot, clique, screenshot. Pare ao chegar em `/checkout` ou em botão de pagamento. Não preencha cartão.

Se o pedido for a suíte ou o MCP não estiver conectado:

```bash
npm run test:local
```

ou `npm run test:prod` quando o alvo for produção. No fim, aponte `npm run report` ou `npx playwright show-report`.

## Relatório no chat

- URL
- passou, falhou, aviso
- spec e linha, se falhou
- caminho do screenshot
- hipótese: tema, conteúdo da loja, ou teste

Não grave log de run em `.claude/memory/`. Não adicione `data-testid` no tema só para o teste, se `dev-patterns.md` não usar isso.

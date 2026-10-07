---
title: Testes e reports
sidebar_position: 9
---

# `/playwright-shopify`

A skill faz três coisas, nesta ordem:

1. Descobre a suíte. Se existir `ENRFORCE-E2E/package.json` ou um `playwright.config` no tema, usa essa. Não cria uma segunda.
2. Sobe navegação real. Com o MCP `playwright` conectado, abre `BASE_URL`, percorre o fluxo pedido e lê o snapshot. Sem MCP, roda `npx playwright test` no projeto certo (`test:local` ou `test:prod`).
3. Devolve um relatório curto no chat e aponta o HTML (`npm run report` ou `npx playwright show-report`). Screenshot de falha entra no relato. A memória do git não recebe log de run.

Regras de parada: carrinho sim, checkout não. Sem dados de pagamento. Sem seletor novo espalhado pelo tema só para o teste ficar fácil, se isso quebrar o padrão descrito em `dev-patterns.md`.

Detalhe de instalação na página [Playwright](/setup/playwright).

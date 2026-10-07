---
name: qa-screenshots
description: Tira screenshots da vitrine em desktop e mobile via Playwright, com nome de passo estável. Use ao capturar evidência visual de um fluxo, sem concluir checkout.
user-invocable: false
---

# Screenshots

Cada evidência é um PNG, não um relato só de texto.

## Viewports

- `desktop`: 1440×900
- `mobile`: 390×844

Não use full page se a section que importa cabe na dobra. Use full page só quando o pedido for a página inteira.

## Nome

`qa-artifacts/<data>/<viewport>-<nn>-<passo>.png`

Passos da jornada padrão: `01-home`, `02-collection`, `03-product`, `04-add-to-cart`, `05-cart`.

## Como capturar

Prefira `node .claude/skills/qa-e2e/scripts/run.mjs` com `BASE_URL` no ambiente. Ele já tira os cinco passos nos dois viewports e escreve `report.json`.

Se o MCP `playwright` estiver conectado e o pedido for uma tela só, abra a URL, fixe o viewport e salve o screenshot no mesmo padrão de nome. Pare em `/checkout`.

Não leia `.env`. Não commite `qa-artifacts/`.

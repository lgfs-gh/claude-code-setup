---
name: qa-e2e
description: Roda QA ponta a ponta da vitrine Shopify com Playwright, screenshots em desktop e mobile, e para no carrinho. Use quando o usuário pedir /qa-e2e, teste end to end ou relatório visual da jornada.
disable-model-invocation: true
---

# QA ponta a ponta

Jornada real no browser. Screenshot em cada passo. Checkout fora.

## Jornada

Home → coleção → produto → adicionar ao carrinho → carrinho. Nos dois viewports: 1440×900 e 390×844.

Não clique em comprar agora, Shop Pay, dynamic checkout, nem siga `/checkout`. Se a URL cair ali, pare, tire o screenshot e marque falha.

## Como rodar

`BASE_URL` vem do ambiente (preview do `theme dev` ou a URL que o usuário passou). Não leia `.env` com Read. Se a variável não existir, pergunte a URL e exporte só na sessão do comando.

Com Playwright instalado (`npm install -D playwright` e `npx playwright install chromium` na pasta que tem o tema ou a suíte):

```bash
BASE_URL="https://preview" node .claude/skills/qa-e2e/scripts/run.mjs
```

No PowerShell:

```powershell
$env:BASE_URL = "https://preview"
node .claude/skills/qa-e2e/scripts/run.mjs
```

Se existir `ENRFORCE-E2E` e o usuário apontou essa suíte, rode os scripts de lá (`test:local` ou `test:prod`) e ainda assim guarde screenshot da falha. Não crie uma segunda suíte sem pedido.

O script grava `qa-artifacts/<data>/` com PNG, `report.json` e não entra no git.

## Quem faz o quê

1. `qa-lead` define a jornada a partir da spec, se houver `docs/sdlc/specs/`. Sem spec, usa a jornada padrão acima.
2. `qa-runner` executa o script ou o MCP `playwright` e devolve os caminhos dos PNG.
3. `qa-visual` aplica `web-design-guidelines` nos screenshots e no `audit` de cada passo.
4. Se existir critério em `docs/sdlc/features/`, feche com `acceptance-check`.

## Relatório no chat

- URL base
- passou ou falhou, e em qual passo
- caminho de `report.json` e dos PNG
- achados de nome acessível, alt e label que o JSON já contou
- hipótese: tema, conteúdo da loja, ou teste

Não marque release. Não rode `shopify theme publish`.

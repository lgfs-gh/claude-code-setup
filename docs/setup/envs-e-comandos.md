---
title: Envs e comandos do tema
sidebar_position: 4
---

# Envs e comandos do tema

Segredos ficam fora do git. Comandos estáveis ficam num arquivo de exemplo que o agente sabe ler.

## O que é commitado

`shopify.commands.example.json` na raiz do tema, copiado pelo instalador se ainda não existir:

```json
{
  "storeEnv": "SHOPIFY_FLAG_STORE",
  "dev": "shopify theme dev --store \"$SHOPIFY_FLAG_STORE\"",
  "check": "shopify theme check",
  "pull": "shopify theme pull --store \"$SHOPIFY_FLAG_STORE\"",
  "pushUnpublished": "shopify theme push --unpublished --store \"$SHOPIFY_FLAG_STORE\"",
  "share": "shopify theme share --store \"$SHOPIFY_FLAG_STORE\"",
  "list": "shopify theme list --store \"$SHOPIFY_FLAG_STORE\""
}
```

`.env.example`:

```bash
SHOPIFY_FLAG_STORE=sua-loja.myshopify.com
SHOPIFY_CLI_THEME_TOKEN=
BASE_URL=
```

`SHOPIFY_FLAG_STORE` é o domínio `.myshopify.com`, não a URL pública da vitrine. `BASE_URL` é a preview (`https://sua-loja.myshopify.com/?preview_theme_id=...` ou o túnel do `theme dev`) e serve o Playwright. `SHOPIFY_CLI_THEME_TOKEN` é o Theme Access token, quando a loja usa esse fluxo em vez do `shopify auth login`.

## O que não é commitado

`.env` real, já no `.gitignore` do kit e no template do tema. O hook e as deny rules bloqueiam leitura e edição de `.env` pelo agente.

Não grave senha de staff, token de Admin API, nem checkout. Este fluxo é de tema, não de app backend.

## Comandos que o agente pode sugerir

| Ação | Comando |
| --- | --- |
| Login | `shopify auth login` |
| Preview local | `shopify theme dev --store "$SHOPIFY_FLAG_STORE"` |
| Lint do tema | `shopify theme check` |
| Baixar o tema remoto | `shopify theme pull` |
| Enviar sem publicar | `shopify theme push --unpublished` |
| Link de preview | `shopify theme share` |
| Listar temas | `shopify theme list` |

`shopify theme publish` e `shopify theme delete` estão nos guardrails. O dev roda esses dois no terminal, se forem intencionais.

## Onde a skill lê isso

`/shopify-commands` lê, nesta ordem:

1. `shopify.commands.json` se você criou um override local (gitignored)
2. `shopify.commands.example.json`
3. `package.json` scripts, se o tema tiver

A skill preenche o comando com o valor de `SHOPIFY_FLAG_STORE` **no ambiente do shell**, sem imprimir o token. Se a variável não existir, ela pede o domínio e para. Não chuta a loja.

## ENRFORCE, neste workspace

Se o alvo for a suíte e não o tema, os comandos já estão em `ENRFORCE-E2E`:

```bash
npm run dev
npm run test:prod
npm run test:local
npm run report
```

`test:local` exige `BASE_URL` no `.env` da suíte. A produção padrão dessa suíte é `https://enrforce.com`. O kit não altera esses arquivos.

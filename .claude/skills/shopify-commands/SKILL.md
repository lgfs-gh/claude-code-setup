---
name: shopify-commands
description: Resolve os comandos de tema Shopify (dev, check, pull, push unpublished, share, list) a partir dos arquivos de comandos e do ambiente, sem imprimir segredos. Use quando o usuário pedir para subir preview, rodar o tema ou puxar o remoto.
---

# Comandos do tema

## Resolver

Leia, na ordem, o primeiro que existir:

1. `shopify.commands.json`
2. `shopify.commands.example.json`

Comandos esperados: `dev`, `check`, `pull`, `pushUnpublished`, `share`, `list`. O store vem da variável nomeada em `storeEnv` (padrão `SHOPIFY_FLAG_STORE`). Leia o valor no ambiente do shell. Não leia `.env` com a ferramenta de Read. Não imprima `SHOPIFY_CLI_THEME_TOKEN`.

Se a variável não estiver definida, pare e peça o domínio `.myshopify.com`. Não chute a loja. Não use a URL pública da vitrine no lugar do domínio myshopify.

## Executar

Só rode o comando que o usuário pediu.

| Pedido | Chave |
| --- | --- |
| preview, dev, subir local | `dev` |
| lint, theme check | `check` |
| baixar tema | `pull` |
| enviar sem publicar | `pushUnpublished` |
| link de preview | `share` |
| listar temas | `list` |

`pushUnpublished` só com pedido explícito de enviar o tema. Recuse `publish` e `delete` e aponte os guardrails. `pull` sobrescreve arquivo local: confirme se o working tree tiver mudanças não commitadas.

Mostre o comando com a variável ainda expandida só o bastante para o usuário reconhecer a loja (o domínio). Não mostre token.

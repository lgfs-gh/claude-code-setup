---
title: learn-codebase
sidebar_position: 2
---

# `/learn-codebase`

Mapeia o tema e grava `.claude/memory/codebase.md`. Não é um dump de arquivo. É o mapa que cabe numa sessão seguinte.

O agente confirma `layout/theme.liquid` antes de escrever. Conta sections, snippets, templates JSON e assets. Lista as rotas que existem de verdade (index, product, collection, cart, page, blog, search) e os apps citados no Liquid (`shopify://apps`, embeds, pixels). Amostra `settings_schema.json` pelos nomes dos grupos, sem copiar `settings_data.json`.

Não lê `.env`. Se o repositório atual for este kit de documentação, para e pede a pasta do tema.

Rode de novo quando entrar section nova de app ou quando o mapa estiver mentindo. Não rode a cada PR.

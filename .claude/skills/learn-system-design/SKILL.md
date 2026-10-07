---
name: learn-system-design
description: Descreve a arquitetura real do tema Shopify (layout, templates, dados, apps e fronteiras) em .claude/memory/system-design.md. Use ao onboardar ou antes de uma mudança que cruza várias sections.
disable-model-invocation: true
---

# Learn system design

Escreva a fronteira do sistema. Não desenhe um e-commerce genérico.

## Ler

- `layout/theme.liquid` e layouts alternativos
- `templates/*.json` e `templates/customers/` se existir
- sections incluídas por header, footer, index, product e cart
- ocorrências de `metafield`, `metaobject`, `all_products`, `collections`, `cart`, `routes.`
- `.claude/memory/codebase.md` e `dev-patterns.md` se existirem, sem reescrevê-los

## Escrever `.claude/memory/system-design.md`

- fluxo de uma página: layout → template JSON → sections → snippets
- origem dos dados de cada superfície crítica (objeto Liquid, setting, metafield, metaobject, app)
- fronteira explícita: o que este repo não controla (checkout, pagamento, customer accounts novos, apps hospedados fora)
- gargalos: header, home, PDP, cart drawer
- decisões já visíveis no código que não devem ser reabertas (por exemplo um bundler que não existe, ou um cart drawer único)
- vocabulário da loja só com termos que aparecem no tema (nome de product type, tag, menu)

Não crie `docs/adr/` nesta skill. ADR fica para `/grill-with-docs` ou `/domain-modeling` quando uma alternativa for de fato fechada.

Se o usuário passou um link do Notion, anote o link na seção de referências. Não copie a página inteira.

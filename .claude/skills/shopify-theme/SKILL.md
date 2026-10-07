---
name: shopify-theme
description: Edita tema Shopify (Liquid, section, template JSON, schema, locale) seguindo .claude/memory. Use ao alterar sections, snippets, templates ou assets do tema.
paths:
  - "**/*.liquid"
  - "templates/**"
  - "sections/**"
  - "snippets/**"
  - "assets/**"
  - "locales/**"
---

# Tema Shopify

Antes de editar, leia `.claude/memory/dev-patterns.md`. Se o arquivo não existir, pare e peça `/learn-dev-patterns`. Leia também `design-system.md` quando a mudança for visual, e `system-design.md` quando cruzar header, PDP ou cart.

## Ao escrever

- Copie o padrão citado em `dev-patterns.md`: nome, CSS, JS, schema, locale. Cite no seu raciocínio qual regra você seguiu.
- Section ou schema novo: skill `section-contract`. Metafield: `metafield-usage`. Carrinho: `cart-safe`. Copy: `locale-sync`. Asset novo: `perf-liquid`. No fim do diff Liquid: `liquid-audit`.
- Prefira section e snippet existentes. Arquivo novo só se o padrão do tema for esse e a spec pedir superfície nova.
- Template JSON: não reordene sections não relacionadas. Não altere `config/settings_data.json` sem o bloco exato indicado pelo usuário.
- Tradução: se o tema usa `locales/`, a string nova entra lá no mesmo formato de chave. Não deixe texto solto se a amostra não deixa.
- App block e `{% schema %}` com `"@app"` ficam intactos.

## Verificar

Rode `shopify theme check` se a CLI estiver instalada. Erro bloqueia o fim da tarefa. Warning vai para o resumo.

Não rode `shopify theme publish`, `shopify theme delete`, nem push, a menos que o usuário tenha pedido push e a skill `/shopify-commands` esteja conduzindo um push `--unpublished`.

## Fora do tema

Checkout, pagamento, Admin API e app backend não são editados daqui. Se a spec pedir isso, pare e diga que está fora do repositório de tema.

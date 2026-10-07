---
name: section-contract
description: Confere schema, blocks, presets e o registro no template JSON antes de criar ou alterar uma section. Use ao adicionar setting, block ou section nova.
user-invocable: false
---

# Contrato da section

Antes de gravar:

- O nome do arquivo segue o prefixo listado em `.claude/memory/dev-patterns.md`.
- A ordem interna do `{% schema %}` copia a section de referência citada nesse arquivo (name, tag, class, settings, blocks, presets).
- Setting nova tem `id` no mesmo formato das existentes. Não reuse um `id` que já existe na section.
- Todo `id` usado no Liquid existe no schema. Todo `id` do schema usado em preset existe nos settings.
- Block novo tem `type` único na section. O preset só referencia types declarados.
- Template JSON: a section entra no grupo em que as irmãs entram. Não reordene sections alheias. Não desabilite section que o pedido não citou.
- `"@app"` e app blocks permanecem.

Se a section nova não tiver section de referência no `dev-patterns.md`, pare e peça `/learn-dev-patterns`. Não invente um schema "limpo" de documentação da Shopify.

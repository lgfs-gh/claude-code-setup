---
name: liquid-audit
description: Revisa Liquid recém-editado por tag obsoleta, assign morto, schema JSON inválido e padrão do tema. Use depois de editar section, snippet ou layout, antes de dar a tarefa por pronta.
user-invocable: false
---

# Auditoria de Liquid

Leia só os arquivos do diff, mais `.claude/memory/dev-patterns.md`.

Marque bloqueio ou ressalva:

- `{% include %}` em vez de `{% render %}` se o tema já usa `render`
- `{% stylesheet %}` ou `{% style %}` destoando de onde o tema põe CSS
- assign ou capture que ninguém usa
- `section.id` ausente num seletor que o padrão do tema exige
- `{% schema %}` que não é JSON válido, ou preset que não bate com settings obrigatórios
- filtro obsoleto (`img_url` se o tema já usa `image_url`)
- texto visível fora de `locales/` se o padrão do tema traduz
- hífen de whitespace (`{%-`) diferente da amostra citada em `dev-patterns.md`

Não reescreva o arquivo nesta skill. Devolva caminho, linha aproximada e a regra. Erro de `shopify theme check`, se você o rodou, entra como bloqueio.

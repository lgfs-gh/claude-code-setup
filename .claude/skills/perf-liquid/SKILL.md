---
name: perf-liquid
description: Evita asset bloqueante, imagem sem tamanho e section que renderiza a vitrine inteira de novo. Use ao adicionar imagem, script ou CSS no tema.
user-invocable: false
---

# Performance de tema

Olhe só o que o diff adiciona.

- Imagem nova usa o filtro que o tema já usa (`image_url` / `image_tag`), com width explícito. Não sirva o original.
- Script novo não entra em `theme.liquid` se a section pode carregar o asset dela, e só se `dev-patterns.md` permitir script por section.
- CSS novo não vira um arquivo global paralelo se a section de referência usa `{% stylesheet %}`.
- Não adicione `{% render %}` da home inteira dentro de outra section.
- App embed e `content_for_header` não são lugar de experimento.

Se não houver imagem, script ou CSS novo, diga que não se aplica. Não refatore assets antigos nesta passada.

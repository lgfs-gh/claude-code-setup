---
name: preview-checklist
description: Monta o que olhar na preview da vitrine para uma spec, em desktop e mobile, sem atravessar o checkout. Use antes de rodar Playwright ou uma passada manual no browser.
user-invocable: false
---

# Checklist de preview

Leia a spec em `docs/sdlc/specs/` ou os critérios em `docs/sdlc/features/`. Produza uma lista curta, nesta ordem:

1. URL: template afetado na preview (`BASE_URL` ou o túnel do `theme dev`). Sem URL, diga que falta e pare.
2. Estado: produto com variante, coleção com item, carrinho com item, ou vazio, conforme a spec.
3. Desktop e, se a spec for visual, mobile.
4. O que deve aparecer e o que não deve (a section vizinha que não entra no diff).
5. Onde parar: drawer ou `/cart`. Nunca `/checkout`.

Não marque item como feito sem ter olhado. Quem olha é o `test-navigator` ou o usuário. Esta skill só escreve a lista. Se o usuário pedir para executar, aí sim navegue ou chame `/playwright-shopify`.

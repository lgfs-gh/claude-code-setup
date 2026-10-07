---
name: code-review
description: Revisa o diff do tema em dois eixos separados, padrão do codebase e fidelidade à spec. Use quando o usuário pedir review ou antes de abrir PR.
---

# Code review

Revise o diff contra a base, não o tema inteiro.

Dois passes, sem misturar o achado de um no outro:

1. **Padrão.** Compare com `.claude/memory/dev-patterns.md` e `design-system.md`. Use `theme-diff` para o mapa e `liquid-audit` nos Liquid do diff. Procure arquivo novo que o tema não nomeia assim, CSS paralelo, framework, `settings_data.json` alterado sem pedido, string sem locale se o tema traduz.
2. **Spec.** Use `acceptance-check` contra `docs/sdlc/specs/` ou `docs/sdlc/features/`. O diff faz isso e não faz checkout, publish, nem refactor vizinho.

Pode delegar os dois passes a `shopify-reviewer` em chamadas separadas. Você entrega um só relatório: bloqueia, ou segue com ressalvas. Bloqueio volta para implementação. Gosto pessoal não vira commit extra.

Não rode a suíte inteira aqui. Aponte `/playwright-shopify` se a mudança aparece na vitrine e ainda não houve QA.

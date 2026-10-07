---
name: tdd
description: Desenvolve um comportamento observável do tema num ciclo red-green-refactor, só no seam já combinado. Use para lógica ou HTML verificável, não para trocar texto de locale.
---

# TDD no tema

Confirme o seam com o que está na spec ou pergunte uma vez: URL e seletor estável que já existe, ou um filtro/snippet cujo output dá para afirmar. Sem seam combinado, pare. Não crie teste de função interna de um script que o tema não isola.

1. Escreva o teste que falha, na suíte que `/playwright-shopify` já usa, ou um assert mínimo se o seam for um filtro Liquid isolado que o tema já testa assim.
2. Rode e mostre a falha.
3. Implemente o mínimo, obedecendo `.claude/memory/dev-patterns.md`.
4. Rode de novo até passar.
5. Refatore só dentro do arquivo da mudança, sem "limpar" a section vizinha.

Não use esta skill para copy, setting booleano ou ordem de bloco no JSON. Isso é revisão visual.

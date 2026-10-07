---
title: task-po
sidebar_position: 8
---

# `/task-po`

Brief de product owner, antes da spec técnica. Não implementa.

Grava `docs/sdlc/features/<slug>.md` na seção **Product owner**:

- contexto: quem usa e em qual template
- diagnóstico: o que falta, com arquivo ou URL. Sem prova, fica como hipótese
- o que fazer, em passos observáveis na vitrine
- fora de escopo, inclusive checkout e publish
- critérios de aceite no formato dado / quando / então
- como validar: URL, viewport, `theme check`, Playwright
- riscos e perguntas que ainda bloqueiam

Se a decisão não cabe numa frase, a skill manda voltar para `/grill-with-docs`. Com Notion autenticado e um link na conversa, o mesmo brief curto vai para a página. Sem link, o Notion não é vasculhado.

O passo seguinte é [`/to-specs`](/skills/to-specs) quando há mais de um corte.

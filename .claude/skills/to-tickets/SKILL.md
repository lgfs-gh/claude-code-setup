---
name: to-tickets
description: Quebra uma spec de tema em tickets pequenos com dependência e seam de teste. Use quando a spec tem mais de um corte independente.
disable-model-invocation: true
---

# Tickets

Parta da spec já escrita. Cada ticket:

- um resultado só
- arquivos prováveis
- depende de qual outro ticket, ou de nenhum
- seam: HTML da preview, locale, ou `theme check`. Sem seam, marque "revisão visual" e não invente teste unitário
- modelo sugerido: Haiku se for mecânico, Sonnet se for section ou JS

Grave a lista na mesma feature em `docs/sdlc/features/<slug>.md`. Não abra issues no GitHub a menos que o usuário peça. Não implemente.

---
name: acceptance-check
description: Confere o diff contra os critérios de aceite do brief ou da spec e marca cada um como passa, falha ou não testado. Use antes de review final ou de abrir PR.
user-invocable: false
---

# Critérios de aceite

Fonte, nesta ordem: a spec citada no pedido, senão `## Critérios de aceite` em `docs/sdlc/features/<slug>.md`. Sem critério escrito, pare e peça `/task-po`. Não invente critério para fazer a lista ficar verde.

Para cada item:

- passa: o diff ou o teste mostra o resultado
- falha: o diff contradiz ou o teste quebrou
- não testado: falta preview ou o seam não rodou

Não aprove a tarefa com item "não testado" em critério visual se havia URL. Não transforme ressalva de gosto em critério. Checkout e publish não são critério de aceite deste kit.

Devolva a lista e um veredito: segue, ou volta para implementação. Não edite o tema.

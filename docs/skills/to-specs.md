---
title: to-specs
sidebar_position: 9
---

# `/to-specs`

Corta o brief em specs pequenas. Uma spec, um resultado, um arquivo principal.

Cada spec vai para `docs/sdlc/specs/<slug>-<nn>-<nome>.md` e o feature file ganha a lista em `## Specs`. O brief do `/task-po` permanece.

Cada arquivo traz resultado, o pedaço de contexto que importa, arquivos prováveis, os critérios de aceite que esta spec cobre, como validar e o que fica de fora. Spec que mexe no mesmo arquivo de outra declara dependência.

`/to-spec` (singular) continua para quando a conversa já é um corte só. `/to-tickets` vem depois, em cima de uma spec, não no lugar desta quebra.

---
name: wayfinder
description: Quebra um esforço grande de tema em etapas que cabem em sessões, sem implementar. Use quando a mudança não cabe numa spec só.
disable-model-invocation: true
---

# Wayfinder

Não edite Liquid. Entregue um mapa:

- etapas em ordem, cada uma com um resultado verificável na preview ou no `theme check`
- dependências (o que bloqueia o quê)
- o que fica fora (checkout, publish, apps que o tema não controla)
- qual skill vem em cada etapa, em geral `/grill-with-docs` ou `/to-spec` para a primeira

Grave o mapa em `docs/sdlc/features/<slug>.md` só se o usuário pedir para persistir. Senão, deixe no chat.

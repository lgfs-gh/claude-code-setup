---
name: grill-with-docs
description: Entrevista o usuário sobre uma mudança no tema até a decisão caber numa frase, e alinha o vocabulário com a memória do projeto. Use antes de spec ou código quando o pedido ainda tem buraco.
disable-model-invocation: true
---

# Grill

Não escreva código nesta skill. Não abra PR.

1. Leia `.claude/memory/system-design.md`, `dev-patterns.md` e `docs/sdlc/README.md` se existirem.
2. Faça uma rodada curta de perguntas sobre o que está em aberto: qual template, qual section, o que não pode mudar, como saber que ficou certo na preview. Uma rodada, depois espere. Não despeje vinte perguntas.
3. Quando a decisão couber numa frase, repita essa frase e pare.
4. Se um termo da loja ficou definido (o que "kit" ou "look" significa neste tema), atualize a seção de vocabulário em `system-design.md` ou peça `/domain-modeling` se o glossário inteiro estiver frouxo.
5. Sugira `/to-spec` como próximo comando. Se a mudança for grande demais para uma sessão, sugira `/wayfinder` em vez de spec.

Não invente resposta para o que só o dev sabe (regra de negócio, estoque, app contratado).

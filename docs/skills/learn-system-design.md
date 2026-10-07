---
title: learn-system-design
sidebar_position: 4
---

# `/learn-system-design`

Desenha a fronteira do tema, não um diagrama genérico de e-commerce.

Grava `.claude/memory/system-design.md` com:

- o caminho de um request: `layout/theme.liquid` → template JSON → sections → snippets
- de onde vem o dado: objeto Liquid, metafield, metaobject, setting, app
- o que é tema e o que é checkout, customer account ou app (e portanto fora do diff)
- sections que são gargalo (home, PDP, header, cart drawer)
- decisões já tomadas que não devem ser reabertas sem motivo

`/grill-with-docs` e `/domain-modeling` atualizam o vocabulário (o que a loja chama de "kit", "assinatura", "look") nesse arquivo ou num `CONTEXT.md` curto, se o dev quiser o glossário separado. ADR em `docs/adr/` só quando uma decisão fecha uma alternativa de verdade, por exemplo "não vamos a um bundler".

---
name: to-spec
description: Transforma a conversa já decidida numa spec curta do tema e, se houver Notion, guarda o link. Use depois do grill, não no lugar dele.
disable-model-invocation: true
---

# Spec

Não entreviste de novo. Sintetize o que já foi dito.

A spec cabe em uma página:

- frase da decisão
- templates e sections tocadas
- o que não muda
- seam de verificação: o que se observa na preview ou num filtro Liquid, sem teste em função interna
- fora de escopo, inclusive checkout

Escreva em `docs/sdlc/features/<slug>.md` na seção Spec. Se o usuário deu uma página do Notion e o MCP estiver conectado, atualize essa página com o mesmo conteúdo curto e guarde só o link no Markdown. Sem página indicada, não procure no Notion.

Não implemente em seguida, a menos que o usuário peça `/implement` na mesma mensagem.

---
name: sdlc-docs
description: Cria ou atualiza a documentação do fluxo SDLC dentro do tema, em docs/sdlc, com link para Notion quando existir. Use quando o usuário pedir docs do fluxo, spec local ou status da feature.
disable-model-invocation: true
---

# SDLC no projeto

Mantenha um fluxo só. Não invente outra pasta de processo.

## Layout

```text
docs/sdlc/README.md
docs/sdlc/features/<slug>.md
docs/adr/<numero>-<titulo>.md   # somente se uma alternativa foi fechada
```

Crie `docs/sdlc/README.md` se não existir, com os estágios: descoberta, spec, design, implementação, review, QA, release. Cada estágio diz quem faz (dev ou agent) e qual é a prova (link, caminho, comando).

## Feature

Para a mudança atual, crie ou atualize `docs/sdlc/features/<slug>.md`:

- status do estágio
- link da página no Notion, se o usuário passou ou se o MCP `notion` estiver autenticado e a página for a que ele indicou. Não vasculhe o workspace inteiro
- link do frame Figma, se houver
- arquivos do tema que a mudança toca
- como testar (comando de `shopify.commands.example.json` e o que olhar na preview)
- QA: passou, falhou, ou ainda sem URL

Não copie o texto inteiro do Notion. O git guarda decisão e link.

## Release

Release neste arquivo significa PR aberto ou `shopify theme push --unpublished` com URL de `theme share`, e só se o usuário já tiver pedido esse push. Não marque publicado na loja. Não rode `shopify theme publish`.

Não grave segredo, token ou conteúdo bruto de `settings_data.json`.

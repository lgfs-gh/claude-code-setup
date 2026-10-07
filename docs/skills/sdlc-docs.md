---
title: Documentação SDLC
sidebar_position: 6
---

# `/sdlc-docs`

Mantém o fluxo de entrega **dentro do repositório do tema**, em `docs/sdlc/`. Não cria um processo novo a cada sessão.

```text
docs/sdlc/
├── README.md          # o fluxo, estável
├── features/<slug>.md # uma mudança
└── adr/               # só decisão que fechou alternativa
```

Estágios de uma feature: descoberta, spec, design, implementação, review, QA, release. Cada estágio tem dono (dev ou agent) e uma prova: link do Notion, link do Figma, caminho do diff, resultado do Playwright, URL de preview.

Se o MCP da Notion estiver autenticado, a skill lê a página da spec em vez de copiar o texto inteiro para o git. O Markdown local guarda o link, o status e as decisões que o código precisa conhecer offline.

A skill não marca release como feita. Release, aqui, é `theme push --unpublished` mais a URL de share, ou o merge do PR. Publicar o tema na loja fica com o dev.

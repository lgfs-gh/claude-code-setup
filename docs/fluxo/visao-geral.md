---
title: Visão geral
sidebar_position: 1
---

# Visão geral

O agente não substitui o dev do tema. Ele escreve no mesmo formato que o tema já usa, dentro de um fluxo curto, e para nas bordas perigosas: publicar tema, apagar tema, force-push, checkout e segredos.

```text
contexto  →  decisão  →  spec  →  código no padrão do tema  →  QA no browser  →  PR
   │            │          │              │                         │
   memória    grill     Notion         learn-dev-patterns        Playwright
```

## Memória em dois lugares

| Lugar | Para quê | Vai para o git |
| --- | --- | --- |
| claude-mem (Gemini) | Observações entre sessões, busca semântica | Não. Fica em `~/.claude-mem` |
| `.claude/memory/*.md` | Fatos estáveis do tema: mapa, padrões, design, comandos | Sim, desde que não tenha segredo |

O Markdown é o que o próximo agente lê mesmo se o worker do claude-mem estiver parado. O claude-mem evita reexplicar a sessão de ontem.

## Quem gasta token

| Papel | Modelo | Faz |
| --- | --- | --- |
| Sessão principal / orquestrador | Sonnet | Decide, quebra o trabalho, revisa o diff |
| Exploração, theme check, locales, busca | Haiku | Lê e devolve um resumo curto |
| Section nova, JS de comportamento, schema | Sonnet (worker) | Edita arquivos citados pelo orquestrador |

O orquestrador não cola o conteúdo dos arquivos no prompt do worker. Passa caminho relativo e o critério de pronto.

## Cadeia do dia a dia

Inspirada no fluxo de engenharia do Matt Pocock, adaptada a tema Shopify:

```text
/grill-with-docs → /task-po → /to-specs → /to-tickets → /implement → /code-review → /playwright-shopify → /github-pr
```

`/task-po` é o brief de produto: contexto, diagnóstico, o que fazer, critérios de aceite e como validar. `/to-specs` corta esse brief em specs pequenas. `/to-spec` continua valendo quando já é um corte só.

Antes da primeira tarefa num tema novo:

```text
/learn-codebase → /learn-dev-patterns → /learn-system-design → /design-system
```

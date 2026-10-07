---
title: Skills do tema Shopify
sidebar_position: 8
---

# Skills e agents do codebase Shopify

| Peça | Função |
| --- | --- |
| `/shopify-theme` | Guia de edição: template JSON, section, snippet, schema, locale. Lê a memória antes de escrever |
| `/shopify-commands` | Resolve dev, check, pull, push unpublished, share, list |
| `/guardrails` | Recusa publish, checkout, segredo e refactor lateral |
| `theme-implementer` | Sonnet. Escreve Liquid no padrão de `dev-patterns.md` |
| `theme-worker` | Haiku. Tarefa mecânica com critério de pronto já escrito |
| `shopify-reviewer` | Sonnet, só leitura. Os dois eixos do code review |
| `explorer` | Haiku, só leitura. Busca para não entupir o orquestrador |

O install no tema é um comando, documentado em [Auto-install](/claude/auto-install). Depois do symlink, estes nomes existem como `/shopify-theme` na sessão aberta **na pasta do tema**.

Arquivos que o agente trata como contrato do tema, quando existem:

- `layout/theme.liquid`
- `config/settings_schema.json`
- `templates/*.json`
- `locales/*.json`
- `.claude/memory/*.md`
- `shopify.commands.example.json`

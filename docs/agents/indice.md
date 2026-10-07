---
title: Agents
sidebar_position: 1
---

# Agents

Arquivos em `.claude/agents/`. O Claude Code lê o `name` e a `description` do frontmatter. A description fica no contexto, então ela é uma frase. O procedimento mora no corpo, que só carrega quando o agent é chamado.

| Agent | Modelo | Ferramentas | Uso |
| --- | --- | --- | --- |
| `orchestrator` | Sonnet | todas, para poder delegar | Quebra o trabalho e cobra o critério de pronto. Não implementa section grande na própria janela |
| `explorer` | Haiku | leitura | Acha arquivo e devolve caminho mais um parágrafo |
| `theme-worker` | Haiku | edição | Tarefa mecânica já especificada |
| `theme-implementer` | Sonnet | edição | Section e JS. Chama `section-contract`, `metafield-usage`, `cart-safe`, `locale-sync`, `perf-liquid`, `liquid-audit` |
| `shopify-reviewer` | Sonnet | leitura | `theme-diff`, `liquid-audit`, `acceptance-check` |
| `test-navigator` | Sonnet | leitura e shell | `preview-checklist` e Playwright, sem checkout |
| `qa-lead` | Sonnet | leitura e shell | Conduz `/qa-e2e` e cobra o relatório |
| `qa-runner` | Sonnet | leitura e shell | Roda a jornada e grava os PNG |
| `qa-visual` | Sonnet | leitura | `web-design-guidelines` em cima dos screenshots |
| `docs-writer` | Haiku | edição | `docs/sdlc/` no formato de `/task-po` e `/to-specs` |
| `design-extractor` | Sonnet | edição da memória | Tokens do CSS. Com frame, `figma-parity` |
| `pr-author` | Haiku | leitura e shell | PR com `theme-diff` e `acceptance-check` |

Não há um agent chamado `Explore` de propósito. Esse nome substituiria o subagent embutido do Claude Code. O nosso `explorer` fixa Haiku no frontmatter para a busca não herdar um modelo mais caro.

No swarm, o orquestrador Sonnet chama `explorer` e `theme-worker` no Haiku e `theme-implementer` no Sonnet. Três workers no máximo, arquivos disjuntos.

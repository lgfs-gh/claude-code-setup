---
title: Skills dos agents
sidebar_position: 10
---

# Skills que os agents chamam

Estas skills têm `user-invocable: false`. Não aparecem como comando para digitar. A descrição fica no contexto e o agent carrega o corpo quando o trabalho pede. Você pode ler o `SKILL.md` em `.claude/skills/<nome>/`.

| Skill | Quem chama | Quando |
| --- | --- | --- |
| `section-contract` | `theme-implementer` | Setting, block ou section nova |
| `metafield-usage` | `theme-implementer` | Dado fora do objeto Liquid padrão |
| `cart-safe` | `theme-implementer`, `test-navigator` | Cart, drawer, adicionar ao carrinho |
| `locale-sync` | `theme-implementer`, `theme-worker` | Texto visível |
| `perf-liquid` | `theme-implementer` | Imagem, script ou CSS novo |
| `liquid-audit` | `theme-implementer`, `shopify-reviewer` | Diff Liquid, antes de dar por pronto |
| `theme-diff` | `shopify-reviewer`, `pr-author` | Mapa do diff sem colar arquivo |
| `acceptance-check` | `shopify-reviewer`, `test-navigator`, `pr-author` | Critério escrito contra o diff |
| `preview-checklist` | `test-navigator` | O que olhar na preview |
| `qa-screenshots` | `qa-runner` | PNG desktop e mobile da jornada |
| `figma-parity` | `design-extractor` | Frame contra `design-system.md` |

Nenhuma delas publica tema, lê `.env` ou inventa metafield, token ou critério que não esteja escrito.

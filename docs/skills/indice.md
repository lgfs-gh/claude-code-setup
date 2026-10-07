---
title: Índice das skills
sidebar_position: 1
---

# Skills

Cada item é uma pasta em `.claude/skills/<nome>/SKILL.md`. O comando é `/<nome>`. O instalador cria o symlink no tema.

Skills com `disable-model-invocation: true` só rodam quando você digita o comando. As outras o Claude também pode puxar quando a descrição encaixa. As descrições são curtas de propósito: elas ficam no contexto o tempo todo.

## Aprender o tema

| Comando | Grava |
| --- | --- |
| [`/learn-codebase`](/skills/learn-codebase) | `.claude/memory/codebase.md` |
| [`/learn-dev-patterns`](/skills/learn-dev-patterns) | `.claude/memory/dev-patterns.md` |
| [`/learn-system-design`](/skills/learn-system-design) | `.claude/memory/system-design.md` |
| [`/design-system`](/skills/design-system) | `.claude/memory/design-system.md` |

## Trabalhar

| Comando | Papel |
| --- | --- |
| [`/agent-swarm`](/skills/agent-swarm) | Sonnet orquestra, Haiku/Sonnet executam, tmux no WSL |
| [`/sdlc-docs`](/skills/sdlc-docs) | Documentação do fluxo dentro do projeto |
| [`/shopify-theme`](/skills/shopify-codebase) | Como editar o tema sem sair do padrão |
| [`/shopify-commands`](/setup/envs-e-comandos) | Dev, check, pull, push unpublished, share |
| [`/guardrails`](/setup/guardrails) | O que recusar |
| [`/playwright-shopify`](/skills/playwright-reports) | Browser real e relatório |
| [`/qa-e2e`](/skills/qa-e2e) | Jornada ponta a ponta com screenshots |
| [`/web-design-guidelines`](/skills/web-design-guidelines) | Revisão visual da interface |
| [`/github-pr`](/setup/github-e-prs) | Branch e PR |

## Produto e specs

| Comando | Papel |
| --- | --- |
| [`/task-po`](/skills/task-po) | Brief de product owner |
| [`/to-specs`](/skills/to-specs) | Várias specs a partir do brief |

## Para os agents

Skills com `user-invocable: false`. Você não precisa digitá-las. O implementer, o reviewer e o QA chamam quando o trabalho pede. A lista está em [Skills dos agents](/skills/skills-de-agent).

## Engenharia

A página [Engenharia](/skills/engenharia) descreve a cadeia inspirada em [mattpocock/skills](https://github.com/mattpocock/skills): `/ask-skill`, `/grill-with-docs`, `/domain-modeling`, `/wayfinder`, `/to-spec`, `/to-tickets`, `/tdd`, `/implement`, `/code-review`.

O plugin oficial (`claude plugins install mattpocock-skills`) é outro pacote, com namespace próprio. Use o plugin **ou** estas skills de projeto. As duas juntas duplicam o fluxo. Estas aqui conhecem Liquid, preview e o arquivo `dev-patterns.md`.

---
title: agent-swarm
sidebar_position: 5
---

# `/agent-swarm`

Sonnet segura o plano. Quem executa é um worker Haiku, quando a checagem é mecânica, ou Sonnet, quando a section exige juízo. O orquestrador não lê o arquivo inteiro para repassar: manda o caminho, o pedido e como saber que terminou (`shopify theme check`, um spec, um diff pequeno).

## tmux, no WSL

No Windows nativo não há tmux. Abra a sessão dentro do WSL, na pasta do tema.

```bash
tmux new-session -d -s shopify-swarm -n work
tmux split-window -h -t shopify-swarm
tmux split-window -v -t shopify-swarm:0.0
tmux send-keys -t shopify-swarm:0.0 'claude --model sonnet' C-m
tmux send-keys -t shopify-swarm:0.1 'claude --model haiku' C-m
tmux send-keys -t shopify-swarm:0.2 'claude --model sonnet' C-m
tmux attach -t shopify-swarm
```

O painel 0 é o orquestrador. Os outros recebem um prompt curto via `tmux send-keys`. No máximo três workers. Quando o worker entra no modelo errado, o orquestrador manda `/haiku` ou `/sonnet` naquele painel.

Haiku: busca, `theme check`, locale, renomear classe já especificada, listar specs. Sonnet worker: section nova, JavaScript de comportamento, schema com preset.

## Sem tmux

Os agents deste kit fazem o mesmo recorte dentro de uma sessão:

- `orchestrator` em Sonnet
- `explorer` e `theme-worker` em Haiku
- `theme-implementer` em Sonnet

Subagent já tem contexto próprio. Use tmux quando você quiser entrar no meio da sessão e assumir o teclado. Use subagent quando quiser menos máquina.

## O que não paralelizar

Dois workers no mesmo arquivo. Publish. Qualquer coisa de checkout. Um worker Haiku decidindo arquitetura de section.

---
name: agent-swarm
description: Orquestra trabalho no tema com Sonnet no comando e workers Haiku ou Sonnet, via tmux no WSL ou via subagents. Use quando o usuário pedir swarm, paralelizar tasks ou economizar token.
disable-model-invocation: true
---

# Agent swarm

Você é o orquestrador e permanece em Sonnet. Workers executam. Você não cola conteúdo de arquivo no prompt deles.

## Modelo de cada tarefa

| Tarefa | Modelo | Agent |
| --- | --- | --- |
| Achar arquivo, resumir, listar ocorrências | Haiku | `explorer` |
| Locale, rename já especificado, `shopify theme check` | Haiku | `theme-worker` |
| Section, schema, JS de comportamento | Sonnet | `theme-implementer` |
| Review | Sonnet | `shopify-reviewer` |
| Browser e relatório | Sonnet | `test-navigator` |

No máximo três workers, em arquivos diferentes. Dois workers no mesmo arquivo: não.

## Prompt do worker

Cada pedido leva só:

- caminho relativo dos arquivos
- o resultado esperado em uma frase
- a regra de `.claude/memory/dev-patterns.md` que importa, em uma linha, não o arquivo inteiro
- o comando de verificação (`shopify theme check`, um spec)

O worker devolve: o que mudou, o caminho, e a saída curta da verificação. Você lê o diff. Você não relê a section inteira se o diff for pequeno.

## tmux no WSL

Use só se o usuário pediu tmux ou se `tmux` responde no shell. No Windows nativo, não tente instalar tmux; use os subagents.

```bash
tmux new-session -d -s shopify-swarm -n work
tmux split-window -h -t shopify-swarm
tmux split-window -v -t shopify-swarm:0.0
tmux send-keys -t shopify-swarm:0.1 'claude --model haiku' C-m
tmux send-keys -t shopify-swarm:0.2 'claude --model sonnet' C-m
```

Mande o prompt com `tmux send-keys` e termine com Enter (`C-m`). Para trocar o modelo no meio: `/haiku` ou `/sonnet` naquele painel. Encerre com `tmux kill-session -t shopify-swarm` quando o usuário disser que acabou. Não deixe sessão órfã.

## Proibido nos workers

`shopify theme publish`, `shopify theme delete`, `git push --force`, `git reset --hard`, checkout, leitura de `.env`. Se um painel pedir isso, não reescreva o comando para contornar o hook.

---
name: task-po
description: Quebra um pedido como product owner, com contexto, diagnóstico, o que fazer, critérios de aceite e como validar. Use quando o usuário pedir /task-po ou uma leitura de produto antes de spec técnica.
disable-model-invocation: true
---

# Task de product owner

Você escreve o brief. Não escreve Liquid e não abre PR.

## Entrada

Use a conversa, o link do Notion se o usuário passou, e `.claude/memory/system-design.md` se existir. Não invente regra de negócio que ninguém disse. O que estiver em aberto vai para "Perguntas", não para um critério falso.

Se o pedido ainda não cabe numa frase, pare e peça `/grill-with-docs`. Não entreviste de novo aqui.

## Saída

Crie ou atualize `docs/sdlc/features/<slug>.md`. O slug é curto, em kebab-case, a partir do pedido. Não apague uma spec técnica que já esteja no arquivo: coloque o brief na seção `## Product owner` e preserve o resto.

```markdown
# <título>

## Product owner

### Contexto
Quem usa, em qual template (home, PDP, coleção, carrinho, página), e o que já existe no tema.

### Diagnóstico
O que está errado ou faltando, com o arquivo ou a URL que sustenta isso. Sem arquivo, marque como hipótese.

### O que fazer
Passos de produto, em ordem. Cada passo é observável na vitrine.

### Fora de escopo
Checkout, pagamento, publish, e o que o usuário excluiu.

### Critérios de aceite
- [ ] Dado <situação>, quando <ação>, então <resultado visível>

### Como validar
URL ou template, viewport (desktop e mobile se a mudança for visual), comando (`shopify theme check`, Playwright) e o que não conta como prova.

### Riscos
Locale, app embed, performance, `settings_data.json`.

### Perguntas em aberto
Nenhuma, ou a lista que bloqueia implementação.
```

Se houver página do Notion indicada e o MCP `notion` estiver conectado, grave o mesmo brief curto lá e deixe o link no Markdown. Sem página indicada, não vasculhe o workspace.

Feche dizendo para rodar `/to-specs` se houver mais de um corte, ou `/to-spec` se for um corte só. Não implemente.

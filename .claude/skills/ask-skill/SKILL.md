---
name: ask-skill
description: Indica qual skill deste kit usar para a situação atual no tema Shopify e para. Use quando o usuário perguntar por onde começar ou qual comando rodar.
disable-model-invocation: true
---

# Qual skill

Responda com uma skill e o motivo, em poucas linhas. Não execute a skill no lugar do usuário, a menos que ele já tenha pedido para executá-la.

| Situação | Skill |
| --- | --- |
| Tema ainda sem mapa | `/learn-codebase` e em seguida `/learn-dev-patterns` |
| Vai editar e o código não pode destoar | `/learn-dev-patterns` se o arquivo não existir; senão obedeça o arquivo |
| Arquitetura, fronteira, metafield | `/learn-system-design` |
| Visual, token, Figma contra o CSS | `/design-system` |
| Várias tarefas em paralelo, token | `/agent-swarm` |
| Documentar o fluxo da mudança | `/sdlc-docs` |
| A decisão ainda tem buraco | `/grill-with-docs` |
| Já decidiram, falta o brief de produto | `/task-po` |
| O brief tem vários cortes | `/to-specs` |
| Já decidiram, um corte só | `/to-spec` |
| Uma spec grande | `/to-tickets` |
| Conferir critérios antes do PR | `acceptance-check` |
| Grande demais para uma sessão | `/wayfinder` |
| Nome das coisas da loja | `/domain-modeling` |
| Implementar spec ou ticket | `/implement` |
| Comportamento observável, sem spec formal | `/tdd` |
| Diff pronto | `/code-review` |
| Preview, check, pull, push | `/shopify-commands` |
| Teste no browser, uma suíte | `/playwright-shopify` |
| Jornada ponta a ponta com screenshot | `/qa-e2e` |
| Revisão visual da interface | `/web-design-guidelines` |
| Abrir PR | `/github-pr` |
| Publish, checkout, segredo | `/guardrails` e recuse |

Se faltarem Notion ou Figma para o caso, diga para autenticar em `/mcp` antes de seguir.

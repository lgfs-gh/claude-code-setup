---
name: to-specs
description: Quebra uma tarefa já decidida em várias specs pequenas de tema, cada uma com um resultado e um jeito de validar. Use quando o usuário pedir /to-specs ou quando o brief do /task-po tiver mais de um corte.
disable-model-invocation: true
---

# Várias specs

Não implemente. Não abra ticket ainda. Isso é o corte técnico em cima do brief.

## Entrada

Leia `docs/sdlc/features/<slug>.md`, em especial a seção `## Product owner`. Se ela não existir e a conversa já tiver decisão, escreva a partir da conversa e avise que `/task-po` não rodou. Se a decisão ainda tiver buraco, pare e peça `/grill-with-docs`.

Uma spec, um resultado. Se só existir um corte, escreva uma spec e sugira `/to-spec` da próxima vez. Não junte "header e PDP" na mesma spec.

## Cada arquivo

`docs/sdlc/specs/<slug>-<nn>-<nome>.md`, com `nn` em 01, 02, 03.

```markdown
# <nn>. <nome>

- Feature: docs/sdlc/features/<slug>.md
- Depende de: nenhuma, ou o arquivo da spec anterior

## Resultado
Uma frase. O que a vitrine passa a fazer.

## Contexto
O pedaço do brief que esta spec cobre. Não copie o brief inteiro.

## Arquivos prováveis
Caminhos relativos. Se não souber, escreva "a confirmar" e o template.

## Critérios de aceite
Só os critérios do brief que esta spec cumpre.

## Como validar
Preview, viewport, `shopify theme check`, spec Playwright ou revisão visual. Um seam só.

## Fora desta spec
O que fica para as outras specs, mais checkout e publish.
```

No feature file, acrescente `## Specs` com a lista de links, sem apagar o brief.

Ordem: o que desbloqueia o resto vem primeiro. No máximo uma spec que mexe no mesmo arquivo de cada vez; se duas precisarem do mesmo arquivo, a segunda declara dependência.

Feche com a ordem sugerida e o próximo comando: `/to-tickets` numa spec, ou `/implement` se o usuário for construir a primeira agora.

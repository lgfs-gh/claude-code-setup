---
title: Engenharia no espírito do Matt Pocock
sidebar_position: 10
---

# Skills de engenharia

O repositório [mattpocock/skills](https://github.com/mattpocock/skills) é a referência de disciplina: entrevistar antes de codar, spec, tickets, TDD num seam combinado, review em dois eixos. O plugin Claude Code é:

```bash
claude plugins install mattpocock-skills
```

Dentro da sessão: `/plugin install mattpocock-skills` e, uma vez por repo, `/setup-matt-pocock-skills`.

Este kit **não copia** o texto daquelas skills. São arquivos nossos, com os mesmos hábitos, apontados para tema Shopify. Instalar o plugin e estas skills de projeto ao mesmo tempo duplica `/tdd`, `/implement` e `/code-review` em dois fluxos. Escolha um. Para tema, fique com as deste repositório.

| Skill | Quando você chama | O que faz aqui |
| --- | --- | --- |
| `/ask-skill` | Não sabe qual comando usar | Aponta a próxima skill e para |
| `/grill-with-docs` | A mudança ainda tem buraco | Pergunta até a decisão caber numa frase. Atualiza vocabulário |
| `/domain-modeling` | O nome das coisas está frouxo | Alinha "kit", "bundle", "look" com o que o Liquid já chama |
| `/wayfinder` | Não cabe numa sessão | Mapa de etapas, sem implementar |
| `/task-po` | A decisão já cabe numa frase | Brief de produto: contexto, diagnóstico, o que fazer, aceite, validação |
| `/to-specs` | O brief tem vários cortes | Uma spec por resultado, em `docs/sdlc/specs/` |
| `/to-spec` | A conversa já decidiu e é um corte só | Spec curta e, se houver Notion, o link |
| `/to-tickets` | Uma spec tem mais de um corte de trabalho | Tickets com dependência, cada um com seam de teste |
| `/tdd` | Dá para observar o comportamento por fora | Um corte por vez. No tema, o seam costuma ser o HTML da preview ou um filtro Liquid isolado, combinado antes |
| `/implement` | Tem spec ou ticket | Segue `dev-patterns.md`, chama `/tdd` onde houve seam, termina em `/code-review` |
| `/code-review` | Tem diff | Padrão do tema e fidelidade à spec, em separado |

`/tdd` não se aplica a "trocar um texto de locale" nem a "ligar um setting no schema". Aí o seam é revisão visual, não um teste unitário inventado.

A cadeia feliz:

```text
/grill-with-docs → /task-po → /to-specs → /to-tickets → /implement → /code-review → /playwright-shopify → /github-pr
```

---
title: GitHub e pull requests
sidebar_position: 6
---

# GitHub e pull requests

O agente abre PR. Quem aprova e faz merge é o dev.

## Branch

A partir da default do repositório (`main` ou o que `gh repo view` disser):

```bash
git checkout -b feat/nome-curto
```

Prefixos: `feat/` para section ou comportamento, `fix/` para correção, `chore/` para memória, docs do SDLC ou config do kit. Sem force-push. Se a branch divergiu, o dev resolve.

## Antes de `gh pr create`

1. `shopify theme check` sem erro.
2. `/code-review` no diff contra a base.
3. Se a mudança aparece na vitrine, `/playwright-shopify` na preview ou o apontamento explícito de que não houve URL.
4. `git status` sem `.env`.

## Corpo do PR

O template instalado em `.github/pull_request_template.md` pede:

- o que mudou na vitrine
- link da spec no Notion, se houver
- link do frame no Figma, se a mudança for visual
- risco (Liquid, tradução, app embed, performance)
- como testar, com a URL de preview
- resultado do `theme check` e do Playwright

A skill `/github-pr` preenche isso com `gh pr create`. Ela não adiciona reviewer roboticamente e não habilita auto-merge.

## Review

`/code-review` olha dois eixos, em paralelo, para um não contaminar o outro:

1. **Padrão do tema.** O diff obedece `.claude/memory/dev-patterns.md` e o design system. Um humano reconheceria o arquivo como continuação do tema.
2. **Spec.** O diff faz o que a spec ou o ticket diz, e não faz o checkout, o publish, nem um refactor vizinho.

Achado que quebra a vitrine volta para `/implement`. Achado de gosto fica como comentário, não como commit extra.

## O que não entra no PR

- `.claude/memory/` com segredo ou dump de `settings_data.json`
- `node_modules`, `playwright-report`, `.env`
- Atualização em massa de todas as sections "já que estamos aqui"

---
name: github-pr
description: Abre pull request do tema Shopify com template, theme check e sem force-push. Use quando o usuário pedir para abrir PR ou preparar o review no GitHub.
disable-model-invocation: true
---

# Pull request

## Antes

1. Confirme que a branch não é `main` nem `master`. Se for, crie `feat/`, `fix/` ou `chore/` a partir da default e mova os commits só se o usuário concordar. Sem `--force`.
2. `git status` não pode listar `.env` nem token. Se listar, tire do stage e pare.
3. Rode `shopify theme check` quando a CLI existir. Erro: pare. Warning: entra no corpo do PR.
4. Se houve mudança visual e existe URL de preview, diga se `/playwright-shopify` já rodou. Não invente resultado.

## Abrir

Use o template `.github/pull_request_template.md` se existir. Preencha:

- o que mudou na vitrine
- link do Notion e do Figma, se a conversa tiver
- risco
- como testar
- theme check e Playwright

```bash
gh pr create --title "..." --body-file pr-body.md
```

Apague o arquivo temporário do body se você o criou fora do git. Não habilite auto-merge. Não adicione reviewer sem o usuário pedir. Não faça push de `main`.

Se `gh` não estiver autenticado, mostre o título e o corpo para o usuário colar, e pare.

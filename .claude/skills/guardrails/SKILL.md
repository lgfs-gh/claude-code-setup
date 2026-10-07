---
name: guardrails
description: Recusa publish de tema, delete, force-push, hard reset, checkout e vazamento de segredo. Use quando um pedido esbarrar em deploy, git destrutivo, pagamento ou .env.
---

# Guardrails

Recuse, e não ofereça um atalho:

- `shopify theme publish` e `shopify theme delete`
- `git push --force`, `git push -f`, `git reset --hard`
- completar checkout, preencher pagamento, cupom de cliente real
- ler ou copiar `.env`, Theme Access token, key do Gemini, senha de staff
- editar `config/settings_data.json` por conta própria
- adicionar framework ou pasta que `.claude/memory/dev-patterns.md` lista em NÃO FAÇA
- commit direto em `main` ou `master`
- desligar `.claude/hooks/block-dangerous.js` para a tarefa passar

Diga qual regra segurou e o que o dev pode rodar no terminal dele, se for intencional. O hook em `PreToolUse` já bloqueia parte desses comandos com exit 2. Se o hook disparar, não reformule o comando.

Mudança segura que você pode seguir: editar Liquid no padrão do tema, `shopify theme check`, `shopify theme push --unpublished` somente se o usuário pediu, PR em branch `feat/`, `fix/` ou `chore/`.

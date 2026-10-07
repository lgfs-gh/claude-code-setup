---
title: Guardrails
sidebar_position: 5
---

# Guardrails

Guardrail aqui é regra que o agente não consegue contornar "porque o código parecia pronto". Há três camadas: o hook, as deny rules e o texto que o implementer lê.

## Hook

`.claude/hooks/block-dangerous.js` escuta `PreToolUse` em comandos Bash. Sai com código 2, o que bloqueia a ferramenta, se o comando casa com:

- `shopify theme publish`
- `shopify theme delete`
- `git push --force` ou `git push -f`
- `git reset --hard`

O template em `.claude/settings.json` registra o hook. Publicar tema e reescrever histórico ficam fora do agente mesmo que a skill esqueça de avisar.

## Deny rules

O mesmo `settings.json` nega:

- leitura e edição de `.env` e `.env.*`
- `shopify theme publish` e `shopify theme delete`
- force-push e hard reset

Deny não é um manual. Se o comando precisar existir de verdade, o dev roda no terminal dele, fora da sessão.

## Regras de tema

O agente, ao editar o tema:

- Não completa checkout, pagamento, nem preenche cartão. Teste para no carrinho.
- Não edita `config/settings_data.json` para "arrumar" conteúdo da loja, a menos que o dev aponte o bloco exato.
- Não adiciona framework (React, Tailwind, Vite) num tema que não usa isso.
- Não cria pasta paralela de componentes se o tema usa `sections/` e `snippets/`.
- Não troca o padrão de CSS/JS descrito em `.claude/memory/dev-patterns.md`.
- Não commita token, key do Gemini, Theme Access, nem comentário com senha de preview.
- Roda `shopify theme check` antes de propor PR, e trata erro como bloqueio. Warning entra no corpo do PR.

## GitHub

- Branch nova: `feat/`, `fix/` ou `chore/`. Nunca commit direto em `main` ou `master`.
- PR com o template em `.github/pull_request_template.md`.
- Um tema não publicado (`--unpublished`) pode receber push quando o dev pediu para subir a preview. Publicar na loja ao vivo não.

## Quando o guardrail disparar

Diga ao dev o comando bloqueado e por quê. Não reescreva o comando com outro binário para furar o hook. Não peça para desligar o hook como primeiro passo.

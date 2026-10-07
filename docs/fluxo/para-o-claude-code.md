---
title: Para o Claude Code
sidebar_position: 3
---

# Para o Claude Code

Se você é o Claude Code lendo este repositório, o procedimento executável está em [Auto-install](/claude/auto-install). Resumo do contrato:

1. Os `SKILL.md` e os agents canônicos **já estão** em `.claude/skills` e `.claude/agents`. Não os reescreva para "criar o kit".
2. Instale no tema com `scripts/install.ps1` ou `scripts/install.sh`. Isso cria os symlinks.
3. Pare e peça ao dev para autenticar Notion, Figma e o trust do workspace.
4. Não rode `shopify theme publish`, `shopify theme delete`, `git push --force` nem `git reset --hard`.
5. Não leia `.env` para copiar segredo para outro arquivo.
6. Não comece a editar Liquid até `/learn-dev-patterns` ter gravado `.claude/memory/dev-patterns.md` no tema, salvo se o dev pedir um ajuste pontual e esse arquivo já existir.
7. Esta pasta é o kit de documentação. Só trate o diretório atual como tema se `layout/theme.liquid` existir aqui.

Quando o trabalho for dentro do tema já instalado, a cadeia é a da [visão geral](/fluxo/visao-geral). Passe caminhos de arquivo aos workers. Não passe o corpo dos arquivos.

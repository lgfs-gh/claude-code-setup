# Tema Shopify · Claude Code

Este tema usa o kit de skills em symlink. O mapa e o padrão de código ficam em `.claude/memory/`. Leia `dev-patterns.md` antes de editar Liquid.

## Comandos

Prefira `/shopify-commands`. Atalhos versionados estão em `shopify.commands.example.json`. Segredos ficam no `.env`, que você não lê.

## Fluxo

`/grill-with-docs` → `/task-po` → `/to-specs` → `/to-tickets` → `/implement` → `/code-review` → `/playwright-shopify` → `/github-pr`

Num tema ainda sem memória: `/learn-codebase`, `/learn-dev-patterns`, `/learn-system-design`, `/design-system`.

## Guardrails

Não publique o tema, não apague tema, não faça force-push, não atravesse o checkout e não grave segredo. O hook em `.claude/hooks/block-dangerous.js` bloqueia publish, delete, force-push e hard reset.

<!-- shopify-claude-kit -->
Kit: skills e agents symlinkados a partir do repositório claude-code-setup. Não reescreva os SKILL.md canônicos no kit. Se uma skill não resolver, o symlink quebrou: rode de novo o instalador.
<!-- /shopify-claude-kit -->

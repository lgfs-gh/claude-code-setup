# Kit Claude Code · Shopify

Este diretório é o kit de documentação e de skills. Não é um tema.

## Se você é o Claude Code

Execute o contrato em `docs/claude/auto-install.md`. Resumo:

1. Não reescreva `.claude/skills` nem `.claude/agents`. Eles já são a fonte canônica.
2. Instale no tema com `node scripts/install.mjs <pasta-do-tema>` (ou `scripts/install.ps1` / `scripts/install.sh`). O alvo precisa ter `layout/theme.liquid` e `config/settings_schema.json`.
3. Pare para o dev autenticar `/mcp` (Notion, Figma) e a key do Gemini do claude-mem.
4. Não rode `shopify theme publish`, `shopify theme delete`, `git push --force` nem `git reset --hard`.
5. Não leia `.env`. Não instale na pasta `ENRFORCE-E2E` nem na raiz `JOB` se elas não forem o tema.
6. Só rode `/learn-codebase`, `/learn-dev-patterns`, `/learn-system-design` e `/design-system` depois que o dev confirmar o alvo, ou se o pedido já nomeou o tema e pediu para aprender.
7. QA de jornada é `/qa-e2e`: o script `.claude/skills/qa-e2e/scripts/run.mjs` tira screenshots desktop e mobile e para no carrinho. A revisão visual é `/web-design-guidelines`, com os agents `qa-lead`, `qa-runner` e `qa-visual`. Não commite `qa-artifacts/`.

A documentação humana está em `docs/`. O site é `npm start` nesta pasta. Você lê o Markdown direto, sem subir o Docusaurus.

## Skills

`kit/manifest.json` lista os nomes. Cada uma mora em `.claude/skills/<nome>/SKILL.md`.

# Claude Code · Shopify

Kit de documentação e de skills para temas Shopify. O dev lê o site. O Claude Code lê este arquivo e `CLAUDE.md`, e instala as skills no tema sem reescrevê-las.

Repositório: https://github.com/lgfs-gh/claude-code-setup

## Rodar o Docusaurus

Requer Node.js 20 ou mais novo.

```powershell
npm install
npm start
```

Abre em http://localhost:3000. Build estático:

```powershell
npm run build
npm run serve
```

O Claude Code não precisa do site no ar. A fonte é o Markdown em `docs/`.

## Instruções para o Claude Code

1. Este repositório é o kit, não um tema. Não edite Liquid aqui.
2. Não reescreva `.claude/skills` nem `.claude/agents`. Eles já são a fonte canônica. A lista está em `kit/manifest.json`.
3. Para instalar num tema que tenha `layout/theme.liquid` e `config/settings_schema.json`:

```powershell
.\scripts\install.ps1 -Target "C:\caminho\do\tema"
```

```bash
./scripts/install.sh /caminho/do/tema
```

4. Pare para o dev aceitar o trust do workspace e autenticar `/mcp` (Notion, Figma, Playwright).
5. Não leia `.env`. Não rode `shopify theme publish`, `shopify theme delete`, `git push --force` nem `git reset --hard`.
6. Não entre em `/checkout` nem preencha pagamento. O QA para no carrinho.
7. Num tema ainda sem memória, só depois do dev confirmar a pasta: `/learn-codebase`, `/learn-dev-patterns`, `/learn-system-design`, `/design-system`.
8. Fluxo de uma mudança: `/grill-with-docs` → `/task-po` → `/to-specs` → `/implement` → `/qa-e2e` → `/github-pr`.
9. QA visual: `/qa-e2e` grava screenshots em `qa-artifacts/` e `/web-design-guidelines` revisa esses PNG. Os agents são `qa-lead`, `qa-runner` e `qa-visual`.

O contrato completo está em `docs/claude/auto-install.md` e em `CLAUDE.md`.

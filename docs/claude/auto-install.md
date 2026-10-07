---
title: Auto-install
sidebar_position: 1
---

# Auto-install

Contrato para o Claude Code executar. O dev pode rodar os mesmos comandos.

## Identificar o diretório

- Este repositório contém `kit/manifest.json` e `docusaurus.config.ts`. Ele é o **kit**.
- Um tema contém `layout/theme.liquid` e `config/settings_schema.json`.
- Se os dois sinais faltarem, pare e pergunte o caminho do tema. Não instale na pasta `JOB` inteira e não instale em `ENRFORCE-E2E`.

## Executar

A partir da raiz do kit.

Windows:

```powershell
.\scripts\install.ps1 -Target "C:\caminho\do\tema"
```

WSL, macOS ou Linux:

```bash
./scripts/install.sh /caminho/do/tema
```

O script é idempotente. Symlink de skill e de agent é recriado se o alvo mudou. Arquivo de memória, `CLAUDE.md`, `.mcp.json`, `.env` e `settings.json` existentes no tema **não são sobrescritos**.

## O que o script coloca no tema

- `.claude/skills/<nome>` → junction no Windows, symlink relativo no Linux e no macOS
- `.claude/agents/<arquivo>.md` → symlink, ou cópia atualizada a cada execução se o Windows recusar symlink de arquivo
- `.claude/hooks/block-dangerous.js` → cópia
- `.claude/settings.json` → cópia só se não existir
- `.claude/memory/*.md` → stub só se não existir
- `.mcp.json` → cópia só se não existir
- `.env.example`, `shopify.commands.example.json`, `.github/pull_request_template.md` → só se não existirem
- `CLAUDE.md` → o template do tema, só se o tema ainda não tiver `CLAUDE.md`. Se já tiver, o script acrescenta o bloco entre `<!-- shopify-claude-kit -->` e `<!-- /shopify-claude-kit -->` quando esse bloco não está lá

## Parar para o humano

Depois do script, peça ao dev, e não tente no lugar dele:

1. Abrir `claude` na pasta do tema e aceitar o trust.
2. `/mcp` e autorizar Notion e Figma.
3. Criar a key do Gemini e rodar `npx claude-mem install`, se a memória ainda não estiver configurada.
4. Preencher `.env` a partir de `.env.example` (`SHOPIFY_FLAG_STORE`, `BASE_URL`).

Não abra o navegador de OAuth por conta própria se a ferramenta recusar. Não escreva a key em arquivo do git.

## Verificar

No tema:

```powershell
Test-Path .claude\skills\learn-codebase\SKILL.md
Test-Path .claude\agents\orchestrator.md
Test-Path .claude\hooks\block-dangerous.js
```

Na sessão do Claude Code, `/learn-codebase` deve resolver. Se a pasta `.claude/skills` nasceu durante a sessão, reinicie o `claude`.

## O que não fazer nesta etapa

- Não reescrever os `SKILL.md` canônicos.
- Não rodar `shopify theme push`, `publish` ou `delete`.
- Não rodar as skills de aprendizado até o dev confirmar que a pasta alvo é o tema certo. Se ele já confirmou no pedido ("instala no tema X e aprende o codebase"), aí sim rode `/learn-codebase`, `/learn-dev-patterns`, `/learn-system-design` e `/design-system`, nessa ordem.

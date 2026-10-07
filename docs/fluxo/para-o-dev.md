---
title: Para o desenvolvedor
sidebar_position: 2
---

# Para o desenvolvedor

Leia esta página uma vez. O restante é referência.

## 1. Pré-requisitos

- Node.js 20 ou mais novo
- [Claude Code](https://code.claude.com/docs/en/overview) instalado (`claude --version`)
- Shopify CLI (`shopify version`)
- GitHub CLI (`gh auth status`) para abrir PR
- No Windows, o swarm com tmux roda dentro do WSL2. Sem WSL, o Claude usa subagents com `model: haiku` ou `model: sonnet`, que já estão neste kit

## 2. Memória gratuita

Siga [claude-mem com a key do Google](/setup/claude-mem). A key fica em `~/.claude-mem/settings.json`, nunca no tema.

## 3. Instalar o kit no tema

No PowerShell, a partir desta pasta:

```powershell
.\scripts\install.ps1 -Target "C:\caminho\do\tema"
```

No WSL ou macOS:

```bash
./scripts/install.sh /caminho/do/tema
```

O tema precisa ter `layout/theme.liquid` e `config/settings_schema.json`. O script cria um junction por skill, copia o hook de guardrail e não sobrescreve `CLAUDE.md`, `.mcp.json` ou a memória se já existirem. No Windows, os agents viram cópia quando o symlink de arquivo é recusado; rodar o instalador de novo atualiza essa cópia. O junction da skill acompanha o kit sem copiar.

## 4. Autenticar o que só você pode autenticar

Abra o Claude Code **na pasta do tema** e rode `/mcp`.

Autorize, nesta ordem:

1. `notion`
2. `figma`
3. `playwright` (stdio, sem OAuth; só precisa aparecer conectado)

Aceite o trust do workspace quando o Claude perguntar. Sem isso, o `.mcp.json` do projeto fica pendente.

## 5. Primeira sessão no tema

```text
/learn-codebase
/learn-dev-patterns
/learn-system-design
/design-system
```

Leia `.claude/memory/dev-patterns.md` antes de deixar o agente editar. Se o padrão descrito não for o seu, corrija o arquivo. O implementer obedece esse arquivo, não um estilo genérico de Liquid.

## 6. Uma mudança

1. `/grill-with-docs` até a decisão caber numa frase
2. `/task-po` para o brief: contexto, diagnóstico, critérios de aceite, como validar
3. `/to-specs` se houver mais de um corte, ou `/to-spec` se for um só
4. `/to-tickets` e `/implement`
5. `/qa-e2e` contra a preview (screenshots desktop e mobile), sem passar pelo checkout
6. `/github-pr`

Você continua podendo editar o tema na mão. O objetivo de `/learn-dev-patterns` é o diff parecer continuação do que você já faria.

## 7. Esta documentação

```powershell
npm install
npm start
```

Abre em `http://localhost:3000`. O Claude Code não precisa do site no ar: ele lê os Markdown em `docs/` e o contrato em `CLAUDE.md`.

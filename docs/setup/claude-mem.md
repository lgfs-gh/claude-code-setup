---
title: claude-mem com Google API
sidebar_position: 1
---

# claude-mem com a key gratuita do Google

O [claude-mem](https://docs.claude-mem.ai/installation) comprime observações das sessões do Claude Code. Com o provider Gemini, essa compressão usa a cota gratuita do Google AI Studio em vez de gastar o plano da Anthropic.

Isso não troca o modelo que escreve o tema. O Claude Code continua no Sonnet ou no Haiku. Só a memória muda de provider.

## Key

1. Abra [Google AI Studio → API keys](https://aistudio.google.com/apikey).
2. Crie uma key no projeto do Google Cloud que você usa para experimento.
3. Sem billing, o Flash fica numa cota baixa (em torno de 10 requisições por minuto no Flash e 15 no Flash-Lite, conforme a doc do claude-mem). Dá para começar assim.
4. Se ligar o billing no Google Cloud, os limites sobem e a cota gratuita continua valendo até o teto do tier. A doc do provider recomenda isso: [`CLAUDE_MEM_GEMINI_BILLING_ENABLED`](https://docs.claude-mem.ai/usage/gemini-provider).

Não cole a key neste repositório, no tema, no Notion ou no Figma.

## Instalar

`npm install -g claude-mem` **não** registra o plugin. Use um destes:

```bash
npx claude-mem install
```

Quando o instalador perguntar o provider, escolha Gemini e cole a key.

Ou, dentro do Claude Code:

```text
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
```

O instalador pede Node 20+, e instala Bun e uv se faltarem. Reinicie a sessão do Claude Code depois.

## Arquivo de configuração

`~/.claude-mem/settings.json` (no Windows: `C:\Users\<voce>\.claude-mem\settings.json`):

```json
{
  "CLAUDE_MEM_PROVIDER": "gemini",
  "CLAUDE_MEM_GEMINI_API_KEY": "COLE_AQUI",
  "CLAUDE_MEM_GEMINI_MODEL": "gemini-flash-latest",
  "CLAUDE_MEM_GEMINI_BILLING_ENABLED": "false"
}
```

Alternativa, sem gravar a key no JSON: variável de ambiente `GEMINI_API_KEY`.

Pela UI do worker: abra a URL que o claude-mem imprime ao subir, ícone de engrenagem, provider Gemini, cole a key.

## O que gravar na memória do projeto

O claude-mem guarda observações sozinho. As skills deste kit **também** escrevem Markdown estável, porque isso entra no git e não depende do worker:

| Skill | Arquivo |
| --- | --- |
| `/learn-codebase` | `.claude/memory/codebase.md` |
| `/learn-dev-patterns` | `.claude/memory/dev-patterns.md` |
| `/learn-system-design` | `.claude/memory/system-design.md` |
| `/design-system` | `.claude/memory/design-system.md` |

Não mande o claude-mem memorizar `.env`, Theme Access token, senha de loja ou `settings_data.json` com dados de cliente.

## Conferir

Numa sessão nova do Claude Code, o contexto deve citar observações anteriores. Se aparecer "Gemini API key not configured", a key não está no `settings.json` nem em `GEMINI_API_KEY`.

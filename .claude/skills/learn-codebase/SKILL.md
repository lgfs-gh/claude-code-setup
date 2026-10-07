---
name: learn-codebase
description: Mapeia um tema Shopify e grava .claude/memory/codebase.md. Use quando o usuário pedir para aprender o codebase, onboardar no tema, ou antes da primeira mudança grande.
disable-model-invocation: true
---

# Learn codebase

Não invente pastas. Leia o tema e escreva só o que os arquivos sustentam.

## Confirmar o alvo

1. Exija `layout/theme.liquid` e `config/settings_schema.json` no diretório de trabalho ou no caminho que o usuário passou.
2. Se o diretório for o kit `claude-code-setup` (existe `docusaurus.config.ts` e não existe `layout/theme.liquid`), pare e peça a pasta do tema.
3. Não leia `.env`, `.env.*`, tokens, nem o `config/settings_data.json` inteiro. Se precisar saber quais settings existem, use `settings_schema.json`.

## Mapear

- Conte arquivos em `layout/`, `sections/`, `snippets/`, `blocks/`, `templates/`, `assets/`, `locales/`, `config/`.
- Liste templates JSON e as sections que cada um inclui, em especial index, product, collection, cart, page, blog, article, search.
- Procure apps: `shopify://apps`, `{% render 'app-` , `content_for_header`, pixels, metafields e metaobjects citados no Liquid.
- Aponte o CSS e o JS de entrada (link ou script em `theme.liquid` e assets importados pelas sections principais).
- Leia `shopify.commands.example.json`, `README.md` e `package.json` só para achar comandos. Não execute push nem publish.

## Escrever

Sobrescreva `.claude/memory/codebase.md` com:

- um parágrafo do que a loja parece ser, baseado em copy e templates, sem marketing inventado
- tabela de pastas com contagem
- templates e sections críticas (header, footer, home, PDP, cart)
- integrações encontradas, com o arquivo onde aparecem
- riscos: checkout, pagamento, scripts de terceiros, `settings_data.json`
- cinco arquivos que um humano deve abrir primeiro

Não reescreva `dev-patterns.md`, `system-design.md` nem `design-system.md`. No fim, diga se esses três existem. Se faltarem, peça `/learn-dev-patterns`, `/learn-system-design` e `/design-system`.

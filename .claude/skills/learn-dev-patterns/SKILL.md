---
name: learn-dev-patterns
description: Descobre como este tema nomeia arquivos, escreve Liquid, CSS e JS, e grava regras para o código novo não se distinguir do que o dev já faz. Use ao onboardar ou quando o padrão do tema mudou.
disable-model-invocation: true
---

# Learn dev patterns

O dev precisa conseguir seguir editando na mão. Código novo copia o tema, não um guia genérico de Shopify.

## De onde tirar a amostra

1. Se `git` existir, liste os arquivos Liquid, CSS e JS tocados nos últimos 20 commits. Prefira os commits do `user.email` local quando houver essa config. Isso é o "jeito atual".
2. Se o git não ajudar, amostre no máximo 8 sections, 4 snippets e 4 assets, escolhendo os que os templates principais incluem.
3. Separe legado: arquivo que o git recente não toca e que destoa (outro prefixo, outro estilo de schema). Marque como legado. Não faça a média com o padrão atual.

Leia o bastante para ver o padrão. Não cole sections inteiras na memória.

## O que registrar

Para cada item, uma regra `FAÇA` ou `NÃO FAÇA` e um caminho real de arquivo:

- nome de arquivo e prefixo (`section-`, `component-`, kebab-case, pasta `blocks/`)
- indentação e aspas no JS
- Liquid com `{%-` ou sem hífen; espaço dentro de `{{ }}`
- onde o CSS mora: asset global, `{% stylesheet %}`, `{% style %}`, arquivo por section
- onde o JS mora, e se a section usa `{{ section.id }}` no seletor
- ordem interna do `{% schema %}` (name, tag, class, settings, blocks, presets)
- forma do id de setting e da chave em `locales/`
- como uma section nova é registrada no template JSON (group, order, disabled)

## Escrever

Sobrescreva `.claude/memory/dev-patterns.md`:

```markdown
# Padrões deste tema

Atualizado em: <data>
Amostra: <arquivos>
Legado, não copiar: <arquivos ou "nenhum">

## FAÇA
- ... (`sections/exemplo.liquid`)

## NÃO FAÇA
- Não introduza Tailwind, CSS module, React ou pasta `src/` se a amostra não usa.
- Não crie `data-testid` em massa se a amostra não usa.
- ...
```

Se uma regra não tiver arquivo de apoio, não escreva a regra. Feche dizendo ao usuário que ele pode corrigir o Markdown, e que o `theme-implementer` obedece esse arquivo na próxima edição.

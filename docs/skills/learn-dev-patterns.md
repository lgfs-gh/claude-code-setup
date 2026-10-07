---
title: learn-dev-patterns
sidebar_position: 3
---

# `/learn-dev-patterns`

Esta skill existe para o dev continuar editando o tema na mão sem sentir que outro autor entrou na pasta.

Ela não descreve "boas práticas de Liquid". Ela descreve **como este tema já está escrito**, com arquivo e trecho de exemplo para cada regra.

## O que observa

- Nome de arquivo em `sections/`, `snippets/`, `assets/`, `blocks/`
- Prefixo de classe e de setting id
- Aspas, indentação e o jeito de abrir tag Liquid (`{%-` ou `{{` com espaço)
- Onde mora o CSS: asset global, `{% stylesheet %}` na section, ou arquivo por section
- Onde mora o JS: `assets/theme.js`, script por section, ou nenhum
- Forma do `{% schema %}`: ordem de name, settings, blocks, presets
- Chave de tradução em `locales/`
- O que o git recente do autor atual faz diferente do legado antigo

Se o tema for inconsistente, a skill marca o padrão **dominante nos commits recentes** como o que se deve copiar, e o resto como legado. Não faz a média dos dois.

## Saída

`.claude/memory/dev-patterns.md` com regras `FAÇA` e `NÃO FAÇA`, cada uma citando um arquivo que existe. O agent `theme-implementer` lê esse arquivo antes de editar. Se ele não existir, o implementer chama esta skill em vez de inventar estilo.

Quando você discordar de uma regra, edite o Markdown. A próxima sessão obedece a sua correção.

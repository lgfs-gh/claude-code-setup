---
name: design-system
description: Extrai cores, tipo, espaçamento e componentes já presentes no tema Shopify para .claude/memory/design-system.md. Use antes de mudança visual ou quando o usuário pedir o design system da codebase.
disable-model-invocation: true
---

# Design system a partir da codebase

O sistema é o que o CSS e o `settings_schema.json` já definem. Não proponha uma biblioteca nova.

## Fontes

1. Variáveis CSS e classes repetidas em `assets/*.css` e em `{% stylesheet %}` / `{% style %}` das sections de header, botão e produto.
2. Color schemes, fontes e botões em `config/settings_schema.json`.
3. Se o usuário passou um link do Figma e o MCP `figma` estiver disponível, leia o frame indicado e anote divergências. Sem link, não varra a conta do Figma.
4. O código do tema ganha quando discorda do frame. A divergência fica escrita para o dev decidir. Não altere CSS nesta skill.

## Escrever `.claude/memory/design-system.md`

- cor: nome da variável ou do scheme, e um arquivo onde aparece
- tipo: família, pesos usados, classes de heading
- espaço e container: classe ou variável, não um valor inventado
- botão, link, input e card: a classe existente que se deve reutilizar
- section de referência para cada padrão
- "não criar" : token ou classe que seria nova e desnecessária

`FAÇA` reutilizar o nome citado. `NÃO FAÇA` adicionar `--color-*` ou utilitário paralelo se o equivalente já está na lista.

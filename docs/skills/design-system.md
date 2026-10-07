---
title: Design system a partir do código
sidebar_position: 7
---

# `/design-system`

Extrai o sistema que o tema **já tem**. Não importa uma biblioteca nova.

Fontes, nesta ordem:

1. variáveis CSS em `assets/` e `{% style %}` / `{% stylesheet %}`
2. color schemes e fonts em `config/settings_schema.json`
3. classes de botão, heading, container e grid repetidas nas sections
4. frame do Figma, se o dev passou o link, só para marcar o que diverge do código

Saída: `.claude/memory/design-system.md` com cor, tipo, espaço, botão, e a section que serve de referência para cada um. A regra para o implementer é reutilizar a classe ou a variável citada. Criar `--color-new-brand` só quando o arquivo disser que o token não existe.

Se o Figma e o CSS discordarem, o código da loja publicada ganha, e a diferença fica anotada para o dev decidir. O agente não "corrige" o tema para parecer o frame sem pedido explícito.

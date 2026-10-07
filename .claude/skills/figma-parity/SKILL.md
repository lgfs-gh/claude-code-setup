---
name: figma-parity
description: Compara um frame do Figma com os tokens já gravados em design-system.md e lista só o que diverge. Use quando houver link de frame e a mudança for visual.
user-invocable: false
---

# Paridade com o Figma

Sem link de frame, pare. Não varra a conta.

Se o MCP `figma` estiver conectado, leia só o node do link. Compare com `.claude/memory/design-system.md`:

- token que já existe e cobre o frame (reutilizar, citar a classe)
- diferença real (cor, tipo, espaço) que o código não tem
- o que o frame pede e o tema não deve criar, se `design-system.md` já diz "não criar"

O CSS do tema ganha. Não edite `assets/` nesta skill. Não gere componente novo. A diferença fica em poucas linhas para o dev decidir. Se `design-system.md` ainda for o stub, peça `/design-system` antes.

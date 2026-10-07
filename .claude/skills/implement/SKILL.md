---
name: implement
description: Implementa uma spec ou ticket do tema Shopify no padrão de dev-patterns, com TDD só onde houve seam, e fecha com code review. Use quando o usuário pedir para construir o que já está especificado.
disable-model-invocation: true
---

# Implementar

1. Leia a spec em `docs/sdlc/specs/` ou o ticket. Se não existir, pare e peça `/task-po` e `/to-specs` (vários cortes) ou `/to-spec` (um corte).
2. Leia `.claude/memory/dev-patterns.md` e, se a mudança for visual, `design-system.md`. Sem `dev-patterns.md`, rode o procedimento de `/learn-dev-patterns` antes de editar.
3. Para cada ticket pronto (sem dependência aberta): se houver seam de teste, siga `/tdd`. Se o seam for revisão visual, edite e descreva o que olhar na preview.
4. Delegue busca a `explorer` (Haiku) e edição mecânica a `theme-worker` (Haiku). Edição de section ou JS fica em `theme-implementer` (Sonnet) ou na própria sessão se for um arquivo só. Não passe o corpo dos arquivos entre agents; passe o caminho.
5. `shopify theme check`. Erro não termina a tarefa.
6. Peça ou execute `/code-review` no diff. Não commite em `main`. Não faça push unpublished sem pedido explícito. Não publique o tema.

O diff deve poder ser continuado pelo dev na mão: mesmos prefixos, mesmo schema, mesmo CSS.

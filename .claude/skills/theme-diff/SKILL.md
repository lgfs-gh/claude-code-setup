---
name: theme-diff
description: Resume o diff do tema em caminhos, risco e o que a vitrine muda, sem colar arquivo inteiro. Use ao preparar review ou o corpo do PR.
user-invocable: false
---

# Resumo do diff

Leia `git diff` contra a base (ou o diff que o pedido indicar). Não leia `.env`.

Entregue:

- arquivos, agrupados em section, snippet, template JSON, asset, locale, config
- uma frase do que muda na vitrine
- se `settings_data.json`, `layout/theme.liquid` ou um app block entrou no diff
- risco: locale incompleto, preset quebrado, CSS novo fora do design system

Não cole hunk grande. Não reescreva código. O `shopify-reviewer` e o `pr-author` usam este resumo. Quem for julgar padrão ainda abre o arquivo citado, não o tema inteiro.

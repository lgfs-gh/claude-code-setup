---
name: web-design-guidelines
description: Revisa a vitrine contra guidelines de interface (foco, contraste, alvo de toque, formulário, movimento, tipo e imagem) usando screenshots e o audit do Playwright. Use em QA visual ou quando o usuário pedir web-design-guidelines.
---

# Web design guidelines

Revise a interface que já está na tela. Não proponha um design system novo e não edite o tema nesta skill. O CSS do tema, em `.claude/memory/design-system.md`, ganha de um frame solto.

Fonte da evidência, nesta ordem: PNG em `qa-artifacts/`, o campo `audit` de `report.json`, snapshot do MCP `playwright` se a jornada ainda estiver aberta. Sem screenshot, não marque visual como passa.

## O que checar

Marque passa, falha ou não dá para ver.

- **Foco.** Dá para perceber o elemento ativo. Ação importante não existe só no hover.
- **Nome.** Botão e link têm nome visível ou `aria-label`. Imagem de conteúdo tem `alt`. Ícone decorativo não anuncia lixo.
- **Alvo.** Controle de toque no mobile não fica menor que o padding dos botões que o tema já usa. Não invente medida se o screenshot não mostra o controle.
- **Formulário.** Campo visível tem label. Erro de busca ou de variante fica junto do campo, não só na cor.
- **Contraste.** Texto em cima de foto ou de botão continua legível no PNG. Se a foto da loja é o problema, diga "conteúdo", não "tema".
- **Tipo.** Título não estoura o container. Não há texto cortado no mobile sem reticências intencionais do tema.
- **Imagem.** Produto e banner reservam espaço. Buraco ou pulo de layout no screenshot é falha.
- **Movimento.** Nada essencial depende de animação. Se o tema não mostra `prefers-reduced-motion` e a spec não pediu, registre como ressalva, não como bloqueio.
- **Estado.** Coleção vazia, busca sem resultado e carrinho vazio não deixam a página em branco sem mensagem, se essa tela entrou na jornada.
- **Carrinho.** A jornada mostra o item adicionado e para antes do checkout.

## Saída

Lista curta: regra, passa ou falha, viewport, arquivo PNG. Bloqueio volta para implementação. Gosto que não quebra leitura ou clique fica como ressalva.

Não aprove contraste "no olho" sem o PNG. Não peça `data-testid` novo se `dev-patterns.md` não usa isso.

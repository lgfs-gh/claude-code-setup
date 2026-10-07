---
name: cart-safe
description: Limita mudança de carrinho ao drawer, à página de cart e ao Ajax do tema, sem chegar no checkout. Use ao editar cart, mini-cart ou botão de adicionar.
user-invocable: false
---

# Carrinho

Pode editar: section de cart, cart drawer, `routes.cart_add_url`, `routes.cart_change_url`, `routes.cart_url`, quantidade, remover item, mensagem de estoque que o tema já mostra.

Não pode: link ou form para checkout com campos de pagamento, Shop Pay, frete calculado como se fosse o checkout, cupom de cliente real, `checkout` liquid object para concluir pedido.

O botão de ir ao checkout que o tema já tem permanece. Não duplique esse botão com outro destino. Teste e descrição param na página `/cart` ou no drawer aberto.

Se a spec pedir pagamento, recuse e aponte a skill `guardrails`.

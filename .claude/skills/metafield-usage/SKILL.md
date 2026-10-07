---
name: metafield-usage
description: Usa só metafield e metaobject que o tema já referencia, com o mesmo namespace. Use ao ler dado de produto, coleção ou página fora do objeto Liquid padrão.
user-invocable: false
---

# Metafield e metaobject

Procure no tema o namespace antes de escrever `product.metafields.*` ou `metaobjects.*`.

- Se a chave já aparece, use o mesmo namespace, a mesma chave e o mesmo modo de acesso (`.value`, filtro, loop).
- Se não aparece, não invente namespace. Pare e pergunte o nome exato, ou marque a spec como bloqueada.
- Não peça Admin API e não crie definição de metafield. Este repo é tema.
- Não copie valor de loja de `settings_data.json` para "exemplificar".

No resumo, cite o arquivo onde a chave já existia.

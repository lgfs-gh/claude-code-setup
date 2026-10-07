---
name: locale-sync
description: Espelha string nova de tema no formato de chave que locales/ já usa. Use ao adicionar ou mudar texto visível na vitrine.
user-invocable: false
---

# Locale

1. Abra um arquivo em `locales/` que a section vizinha já usa. Copie o formato da chave (aninhamento, prefixo `sections.` ou `general.`).
2. Se o tema não traduz a string nesse tipo de arquivo, não crie chave. Siga `dev-patterns.md`.
3. A mesma chave entra nos locales que o tema mantém alinhados (por exemplo `pt-BR` e `en.default`). Não invente idioma que a pasta não tem.
4. Não traduza na hora um idioma que você não viu no arquivo. Copie a chave e, se faltar o texto, deixe o valor em branco só se o JSON do tema já faz isso. Senão, use o texto do idioma fonte e marque "tradução pendente" no resumo.
5. Não edite `config/settings_data.json` para guardar copy.

Devolva as chaves criadas e os arquivos tocados.

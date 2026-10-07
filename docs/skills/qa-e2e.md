---
title: QA ponta a ponta
sidebar_position: 11
---

# `/qa-e2e`

Jornada da vitrine no Chromium, com screenshot em cada passo, em 1440×900 e 390×844.

```text
home → coleção → produto → adicionar ao carrinho → carrinho
```

O script está em `.claude/skills/qa-e2e/scripts/run.mjs`. Ele exige `BASE_URL` no ambiente e o pacote `playwright`. A evidência vai para `qa-artifacts/<data>/`, que não entra no git.

Três agents dividem o trabalho:

| Agent | Faz |
| --- | --- |
| `qa-lead` | Escolhe a jornada a partir da spec, ou usa a padrão |
| `qa-runner` | Roda o script e devolve os PNG |
| `qa-visual` | Aplica [`/web-design-guidelines`](/skills/web-design-guidelines) nos screenshots |

`/playwright-shopify` continua para a suíte que já existe, como `ENRFORCE-E2E`. `/qa-e2e` é a jornada com evidência visual. Os dois param antes do checkout.

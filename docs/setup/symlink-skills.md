---
title: Symlink de skills
sidebar_position: 2
---

# Symlink de skills

Uma skill é uma pasta com `SKILL.md`. O nome da pasta vira o comando: `.claude/skills/learn-codebase/SKILL.md` responde a `/learn-codebase`.

Há três lugares, em ordem de prioridade: enterprise, pessoal (`~/.claude/skills`) e projeto (`.claude/skills` do tema). Pessoal ganha de projeto quando o nome é o mesmo. Por isso este kit instala **no projeto**, com symlink para a pasta canônica. Assim o tema não fica com uma cópia velha, e uma skill pessoal sua não é sobrescrita.

## O que o instalador faz

Para cada pasta listada em `kit/manifest.json`:

```text
<tema>/.claude/skills/learn-codebase  →  <kit>/.claude/skills/learn-codebase
<tema>/.claude/agents/orchestrator.md →  <kit>/.claude/agents/orchestrator.md
```

O `.claude` do tema é uma pasta real. O symlink é **cada skill**, não a pasta `.claude` inteira. Symlink da pasta `.claude` ou de `~/.claude/skills` inteira já quebrou descoberta e autocomplete em versões recentes do Claude Code. A documentação oficial aceita symlink de uma pasta de skill individual, e o mesmo alvo é carregado uma vez só.

## Windows

O instalador cria um **junction** por skill. Junction aponta para a pasta canônica e não pede Modo de Desenvolvedor. Um `git pull` neste kit passa a valer no tema na hora.

```powershell
New-Item -ItemType Junction -Path .\.claude\skills\learn-codebase -Target C:\Trabalho\JOB\claude-code-setup\.claude\skills\learn-codebase
```

Os agents são arquivos `.md`. Symlink de arquivo no Windows pede privilégio; se for recusado, o instalador copia o arquivo e, na execução seguinte, atualiza essa cópia. Se o junction de uma skill for recusado, a pasta é copiada e ganha `.installed-by-copy`. Aí o tema só vê mudança do kit quando você roda o instalador de novo.

## WSL, macOS, Linux

```bash
ln -s /caminho/do/kit/.claude/skills/learn-codebase .claude/skills/learn-codebase
```

Prefira caminho relativo para o symlink sobreviver se o disco for montado em outro prefixo. O `install.sh` faz isso.

## Conferir dentro do Claude Code

```text
/learn-codebase
```

Se a skill não aparecer no autocomplete, a pasta `.claude/skills` foi criada com a sessão já aberta. Reinicie o `claude`. Edição de um `SKILL.md` que já existia é detectada na sessão; pasta nova no topo, não.

## O que não linkar

- `~/.claude/skills` como um único symlink de dotfiles. Há regressão de descoberta nesse formato.
- Um plugin (`.claude-plugin/plugin.json`) dentro da skill, a menos que você queira o diálogo de trust de plugin. Estas skills são projeto, não plugin.
- Segredos. O alvo do symlink é este repositório, que não deve ter `.env`.

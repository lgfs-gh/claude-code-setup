import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  kit: [
    'intro',
    {
      type: 'category',
      label: 'Fluxo',
      items: ['fluxo/visao-geral', 'fluxo/para-o-dev', 'fluxo/para-o-claude-code'],
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        'setup/claude-mem',
        'setup/symlink-skills',
        'setup/mcps-notion-figma',
        'setup/envs-e-comandos',
        'setup/guardrails',
        'setup/github-e-prs',
        'setup/playwright',
      ],
    },
    {
      type: 'category',
      label: 'Skills',
      items: [
        'skills/indice',
        'skills/learn-codebase',
        'skills/learn-dev-patterns',
        'skills/learn-system-design',
        'skills/task-po',
        'skills/to-specs',
        'skills/skills-de-agent',
        'skills/agent-swarm',
        'skills/sdlc-docs',
        'skills/design-system',
        'skills/shopify-codebase',
        'skills/playwright-reports',
        'skills/qa-e2e',
        'skills/web-design-guidelines',
        'skills/engenharia',
      ],
    },
    {
      type: 'category',
      label: 'Agents',
      items: ['agents/indice'],
    },
    {
      type: 'category',
      label: 'Claude Code',
      items: ['claude/auto-install'],
    },
  ],
};

export default sidebars;

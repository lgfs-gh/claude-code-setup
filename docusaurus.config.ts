import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Claude Code · Shopify',
  tagline: 'Setup, skills e agents para temas Shopify',
  favicon: 'img/favicon.svg',
  url: 'http://localhost:3000',
  baseUrl: '/',
  organizationName: 'shopify-theme',
  projectName: 'claude-code-setup',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap',
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Claude Code · Shopify',
      items: [
        { to: '/fluxo/visao-geral', label: 'Fluxo', position: 'left' },
        { to: '/setup/claude-mem', label: 'Setup', position: 'left' },
        { to: '/skills/indice', label: 'Skills', position: 'left' },
        { to: '/agents/indice', label: 'Agents', position: 'left' },
        { to: '/claude/auto-install', label: 'Auto-install', position: 'right' },
      ],
    },
    footer: {
      links: [
        {
          title: 'Leitura',
          items: [
            { label: 'Para o dev', to: '/fluxo/para-o-dev' },
            { label: 'Para o Claude Code', to: '/fluxo/para-o-claude-code' },
          ],
        },
        {
          title: 'Kit',
          items: [
            { label: 'Contrato de instalação', to: '/claude/auto-install' },
            { label: 'Guardrails', to: '/setup/guardrails' },
          ],
        },
      ],
      copyright: 'Kit local. Skills inspiradas na prática de engenharia de mattpocock/skills, escritas para tema Shopify. Não são cópia desse repositório.',
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

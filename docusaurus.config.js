// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'macos_ui',
  tagline: 'Flutter widgets and themes implementing the current macOS design language.',
  url: 'https://macos_ui.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GroovinChip', // Usually your GitHub org/user name.
  projectName: 'macos_ui', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-163907010-2',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
  {
    navbar: {
      logo: {
        alt: 'macos_ui logo',
        src: 'img/macos_ui_logo.png',
        target: '_self',
      },
      title: 'macos_ui',
      items: [
        {
          type: 'doc',
          docId: '/category/getting-started',
          position: 'right',
          label: 'Getting Started',
        },
        {
          href: 'https://github.com/GroovinChip/macos_ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides & Codelabs',
          items: [
            {
              label: 'Quick Start',
              to: '/docs/getting_started/quick_start',
            },
            {
              label: 'Write Your First App',
              to: '/docs/getting_started/first_app',
            },
          ],
        },
        {
          title: 'Info',
          items: [
            {
              label: 'Bugs & Issues',
              href: 'https://github.com/GroovinChip/macos_ui/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/GroovinChip/macos_ui/discussions',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/GroovinChip/macos_ui',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/GroovinChip',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Reuben Turner (GroovinChip).`,
    },
    colorMode: {
      defaultMode: "dark",
    },
    prism: {
      additionalLanguages: ["dart", "yaml"],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;

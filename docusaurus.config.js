/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Title',
  tagline: 'Tagline',
  url: 'https://example.com',
  baseUrl: '/', // When the unique domain is disabled, replace it with your project’s name.
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
        onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.ico',
  organizationName: 'org',
  projectName: 'wiki',
  themeConfig: {
    navbar: {
      title: 'Theme title',
      logo: {
        alt: 'Alt',
        src: 'img/logo.svg',
      },
      items: [
      ],
    },
    footer: {
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
};

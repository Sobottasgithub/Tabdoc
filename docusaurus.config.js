/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tabdoc',
  tagline: 'Tablo documentation',

  // GitHub Pages: https://sobottasgithub.github.io/Tabdoc/
  url: 'https://sobottasgithub.github.io',
  baseUrl: '/Tabdoc/',
  organizationName: 'Sobottasgithub',
  projectName: 'Tabdoc',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  favicon: 'img/favicon.svg',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themeConfig: {
    navbar: {
      title: 'Tablo',
      logo: {
        alt: 'Tabdoc logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'dropdown',
          label: 'Projects',
          position: 'left',
          items: [
            { label: 'Tablo', href: 'https://github.com/Sobottasgithub/Tablo' },
            { label: 'TDFS', href: 'https://github.com/Sobottasgithub/TDFS' },
            { label: 'TTP2', href: 'https://github.com/Sobottasgithub/TTP2' },
            { label: 'TQL', href: 'https://github.com/Sobottasgithub/TQL' },
            { label: 'TUD', href: 'https://github.com/Sobottasgithub/TUD' },
            { label: 'Tablog', href: 'https://github.com/Sobottasgithub/Tablog' },
            { label: 'Tabdoc', href: 'https://github.com/Sobottasgithub/Tabdoc' },
          ],
        },
        {
          href: 'https://github.com/Sobottasgithub/Tabdoc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tablo',
          items: [
            { label: 'Tablo', href: 'https://github.com/Sobottasgithub/Tablo' },
            { label: 'TDFS', href: 'https://github.com/Sobottasgithub/TDFS' },
          ],
        },
        {
          title: 'Infrastructure',
          items: [
            { label: 'TTP2', href: 'https://github.com/Sobottasgithub/TTP2' },
            { label: 'TQL', href: 'https://github.com/Sobottasgithub/TQL' },
            { label: 'TUD', href: 'https://github.com/Sobottasgithub/TUD' },
            { label: 'Tablog', href: 'https://github.com/Sobottasgithub/Tablog' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Tabdoc on GitHub', href: 'https://github.com/Sobottasgithub/Tabdoc' },
            { label: 'All projects', href: 'https://github.com/Sobottasgithub' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} the Tablo contributors.`,
    },
    prism: {
      additionalLanguages: ['bash', 'cpp', 'cmake', 'nix', 'json', 'yaml'],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/Sobottasgithub/Tabdoc/tree/master/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

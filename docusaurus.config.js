/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tablo docs',
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
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  favicon: 'img/logo.svg',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Patches selection.transition() back in for mermaid — see the module header.
  clientModules: ['./src/clientModules/d3Transition.js'],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      // Offline search. The index is built at compile time, no external service.
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
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
      copyright: `Copyright © ${new Date().getFullYear()} Patrick Schulze`,
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
          routeBasePath: '/docs',
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

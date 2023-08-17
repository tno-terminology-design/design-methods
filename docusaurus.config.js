const path = require('path');
const terminology_design = require('./footer-links/terminology-design.json');
const manuals = require('./footer-links/manuals.json');
const specifications = require('./footer-links/specifications.json');
const repositories = require('./footer-links/repositories.json');
const copyright = require('./footer-links/copyright.json');

module.exports = {
  title: 'Terminology Design Methods',
  tagline: 'How to design and maintain purposeful terminologies',
  url: 'https://tno-terminology-design.github.io',
  baseUrl: '/design-methods/',
  favicon: 'images/logos/logo-tno-terminology-design.ico',
  organizationName: 'tno-terminology-design',
  projectName: 'design-methods',
  onBrokenLinks: 'log',
  scripts: [
    { src: '/js/fix-location.js',
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true, 
        hideable: true,
      },
    },
    navbar: {
      title: 'Home',
      logo: { src: 'images/logos/tev2-new-babylon-medium.png', },
      items: [
        { to: 'overview', label: 'Terminology Design', position: 'left'},
        { href: 'https://github.com/tno-terminology-design/design-methods', label: 'Github',     position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: terminology_design.title, items: terminology_design.items },
        { title: manuals.title, items: manuals.items },
        { title: specifications.title, items: specifications.items, },
        { title: repositories.title, items: repositories.items },
      ],
      copyright: copyright.text.replace("[20XX-20YY]",`2022-${new Date().getFullYear()}`)
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/tno-terminology-design/blob/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};

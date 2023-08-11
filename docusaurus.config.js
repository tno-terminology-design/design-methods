const path = require('path');
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
        {
          title: 'Terminology Design',
          items: [
            { label: 'Introduction',  to: '/docs/overview' },
            { label: 'Methods',       to: '/docs/methods' },
            { label: 'Github', href: 'https://github.com/tno-terminology-design/tree/master/docs/terms' },
          ],
        },
        {
          title: 'Toolbox Repositories',
          items: [
            { label: 'MRGT',  href: 'https://github.com/trustoverip/ctwg-toolkit-mrg' },
            { label: 'TRRT',  href: 'https://github.com/tno-terminology-design/trrt' },
          ],
        },
      ],
      copyright: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
                    <span property="dct:title">The TNO Terminology Design texts in this website</span> are licensed under
                    <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">
                    CC BY-SA 4.0
                      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">
                      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">
                      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1">
                    </a>.&nbsp&nbsp(Copyright © 2022-${new Date().getFullYear()} by <span property="cc:attributionName">TNO</span>).</p>`
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
  // plugins: [
    // [
      // '@docusaurus-terminology/parser',
      // { termsDir: './docs/terms',
      //   glossaryFilepath: './docs/glossary.md',
      //   noParseFiles: ['./docs/tev1/terminology-engine-v1.mdx'],
      //   glossaryPatternSeparator: '^',
      //   glossaryTermPatterns: ['term', 'concept']
      // }
    // ]
  // ]
};

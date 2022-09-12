const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'eXo developers documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'eXo website',
        link: 'https://www.exoplatform.com'
      }
    ],
    sidebar: {
      '/guide': [
        '', // this is your docs/README.md
    
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '/guide/getting-started/Introduction',
            '/guide/getting-started/start-community',
          ]
        },
        '/guide/userAndAdminGuide',
        {
          title: 'Developer Guide',
          collapsable: false,
          path: '/guide/developer-guide/',
          children: [
            '/guide/developer-guide/getting-started',
            {
              title: 'Simple Integration',
              collapsable: true,
              path: '/guide/developer-guide/simple-integration/',
              children: [
                '/guide/developer-guide/simple-integration/activity-type',
                '/guide/developer-guide/simple-integration/notification',
              ]
            },
            {
              title: 'Intermediate Integration',
              collapsable: true,
              path: '/guide/developer-guide/intermediate-integration/',
              children: [
                '/guide/developer-guide/intermediate-integration/front-end-application',
                '/guide/developer-guide/intermediate-integration/rest-service',
              ]
            },
            {
              title: 'Advanced Integration',
              collapsable: true,
              path: '/guide/developer-guide/advanced-integration/',
              children: [
                '/guide/developer-guide/advanced-integration/extension-points',
                '/guide/developer-guide/advanced-integration/rest-api',
              ]
            },
            {
              title: 'Miscellaneous',
              collapsable: true,
              path: '/guide/developer-guide/miscellaneous/',
              children: [
                '/guide/developer-guide/miscellaneous/feature-flags',
                '/guide/developer-guide/miscellaneous/properties-reference',
              ]
            },
          ]
        }
      ],
    
      '/': [ // Your fallback (this is your landing page)
        '' // this is your README.md (main)
      ]       
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

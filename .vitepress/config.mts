import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`
    ]
  ],
  title: "Datumendo Docs",
  description: "Guides & info",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Automatic NFT links migration', link: '/links-migration' },
          { text: 'NFT Contract migration', link: '/contract-migration' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/datumendo/docs' }
    ]
  }
})

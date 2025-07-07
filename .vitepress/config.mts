import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Holynet VPN",
  srcDir: './pages',
  description: "Modern, fast solution for virtual private network",
  lastUpdated: true,
  sitemap: {
    hostname: 'https://vpn.holynet.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  // -------------------------------------------------------------------------------------------------------------------
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/svg', href: '/logo.png' }
    ],
    ['meta', { name: 'theme-color', content: '#7A050B' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Holynet VPN' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vpn.holynet.dev/og.jpg'
      }
    ],
    ['meta', { property: 'og:url', content: 'https://vpn.holynet.dev/' }],
  ],
  // -------------------------------------------------------------------------------------------------------------------
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    title: 'Holynet VPN',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    logo: { src: 'assets/logo.svg', alt: 'Holynet VPN Logo', width: 24, height: 24 },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'What is Holynet VPN?', link: '/what-is' },
          { text: 'Getting Started', link: '/markdown-examples' },
        ]
      },
      {
        text: 'Protocol',
        items: [
          { text: 'Schema', link: '/schema' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/holynet-zone/vpn' }
    ]
  }
})

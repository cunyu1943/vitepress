import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 语言
  // lang: 'zh-Hans',
  // 网站标题
  title: "JavaPark",
  // 网站描述
  description: "A VitePress Site",
  // 仓库名
  base: "/weekly/",
  // 源目录
  srcDir: "src",
  // head
  head: [
    ['link', { rel: 'icon', href: 'logo.png' }]
  ],
  // 公式
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    logo: 'logo.png',

    // 大纲标题级别
    outline: {
      level: [2, 3]
    },

    // 本地搜索
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          }
        }
      }
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/cunyu1943/weekly/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 上次更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 村雨遥'
    },

    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '指南', link: '/guide/' }
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/1' },
            { text: 'Two', link: '/guide/2' }
          ]
        }
      ],
    },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cunyu1943' }
    ]
  }
})

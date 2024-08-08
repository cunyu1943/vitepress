import { defineConfig } from 'vitepress'
import { head } from './config/head'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java 教程",
  description: "村雨遥的 Java 教程",

  // 仓库名
  // base: "/weekly/",
  // 源目录
  srcDir: "src",
  // head
  head,
  // 公式
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },



  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'logo.png',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,


    // 大纲标题级别
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cunyu1943' }
    ],

    // 页脚
    footer: {
      message: 'Released under the Apache License.',
      copyright: 'Copyright © 村雨遥'
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

    search: {
      provider: 'local'
    }
  },
})

import { defineConfig, type DefaultTheme } from 'vitepress'
import { sidebarAviation, sidebar3dPrint, sidebarjs } from './theme/data/sidebar.ts'
import { nav } from './theme/data/nav.ts'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TinkerDocs.",
  srcDir: './docs',
  assetsDir: 'assets',
  description: "TinkerDocs is a collection of notes and resources for the curious tinkerer.",
  themeConfig: {
    siteTitle: 'TinkerDocs',
    logo: '/img/theme/docs-logo.svg',
    nav: nav(),
    editLink: {
      pattern: 'https://pr.new/tinkernerd/docs/edit/main/docs/:path',
      text: 'Edit this page',
    },
    sidebar: {
      '/aviation/': { base: '/aviation/', items: sidebarAviation() },
      '/3d-printing/': { base: '/3d-printing/', items: sidebar3dPrint() },
      '/js/': { base: '/js/', items: sidebarjs() }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tinkernerd' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present TinkerNerd.'
    }
  }
})


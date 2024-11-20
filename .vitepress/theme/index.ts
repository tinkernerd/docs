// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.scss';
import './scripts/edit-link.ts';
//import Banner from './components/Banner.vue'
import MaintenanceBanner from './components/MaintenanceBanner.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    // @ts-ignore
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(MaintenanceBanner),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
  }
} satisfies Theme

import dotenv from 'dotenv';
import mdFootnote from 'markdown-it-footnote';
import { defineConfig, type HeadConfig } from 'vitepress';

/* Nav and Sidebar */
import {sidebarAviation, sidebarWindows, sidebarDocumentation, sidebarSecurity, sidebarRecipes, sidebarPhotography, sidebarNetworking, sidebarLinux, sidebar3dPrint, sidebarJS, sidebarArduino, sidebarDocker, sidebarBible, sidebarPY, sidebarGithub } from './theme/data/sidebar.ts'

dotenv.config();
const BASE_PATH = '/';
const BASE_WITH_ORIGIN = `https://nicholasstull.com${BASE_PATH}`;
// https://vitepress.dev/reference/site-config

export default defineConfig({
  srcDir: './docs',
  outDir: `./build${BASE_PATH}`,
  assetsDir: 'assets',
  base: BASE_PATH,

  // Generate files as `/path/to/page.html` and URLs as `/path/to/page`
  cleanUrls: true,

  // Prevent builds when content has dead links
  ignoreDeadLinks: false,

  // Metadata
  lang: 'en-US',
  title: "TinkerDocs.",
  description: "TinkerDocs is a collection of notes and resources for the curious tinkerer.",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${BASE_PATH}img/theme/favicon.png` }],
  ],
  
  // Sitemap
  lastUpdated: true,
  sitemap: {
    hostname: BASE_WITH_ORIGIN,
  },
  /**
   * Generate social media metadata tags at build time.
   * Note: this does not run when using the development server,
   * so it must be tested by doing a full build with `npm run build`.
   */
  transformHead({ pageData, page }) {
    // Get the raw title and description from frontmatter,
    // rather than the title which has the site suffix
    const { title, description, og_image } = pageData.frontmatter;
    const og_type = page === 'index.md' ? 'website' : 'article';

    // New meta tags to add to the <head>
    const tags: HeadConfig[] = [];

    // Add OpenGraph tags
    if (og_type) {
      tags.push(['meta', { property: 'og:type', content: og_type }]);
    }

    if (title) {
      tags.push(['meta', { property: 'og:title', content: title }]);
    }

    if (og_image) {
      const url = `${BASE_WITH_ORIGIN}img/og/${og_image}`;
      tags.push(['meta', { property: 'og:image', content: url }]);
    }
    return tags;
  },


  // Theme
  themeConfig: {
    siteTitle: 'TinkerDocs',
    logo: '/img/theme/docs-logo.svg',
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://pr.new/tinkernerd/docs/edit/main/docs/:path',
      text: 'Edit this page',
    },
    nav: [
        { text: 'About', link: '/about' },
        { text: 'Aviation', link: '/aviation/' },
        { text: 'Bible', link: '/bible/' },
        { text: 'Recipes', link: '/recipes/' },
        { text: 'Info Tech',
          items: [
              {
                  text: 'Hardware',
                  items: [
                      { text: '3D Printing', link: '/3d-printing/' },
                      { text: 'Arduino', link: '/arduino/' }
                  ]
              },
              {
                  text: 'Software & Operating Systems',
                  items: [
                      { text: 'Docker', link: '/docker/' },
                      { text: 'Linux', link: '/linux/' },
                      { text: 'Windows', link: '/windows/' }
                  ]
              },
              {
                  text: 'Networking & Security',
                  items: [
                      { text: 'Networking', link: '/networking/' },
                      { text: 'Security', link: '/security/' }
                  ]
              },
              {
                  text: 'Programming & Tools',
                  items: [
                      { text: 'GitHub', link: '/github/' },
                      { text: 'JavaScript', link: '/js/' },
                      { text: 'PowerShell', link: '/ps/' },
                      { text: 'Python', link: '/py/' },
                      { text: 'Documentation', link: '/documentation/' }
                  ]
              }
          ]
      },
      { text: 'Photography', link: '/photography/' }

    ],
    sidebar: {
      '/arduino/': { base: '/arduino/', items: sidebarArduino() },
      '/aviation/': { base: '/aviation/', items: sidebarAviation() },
      '/bible/': { base: '/bible/', items: sidebarBible() },
      '/3d-printing/': { base: '/3d-printing/', items: sidebar3dPrint() },
      '/docker/': { base: '/docker/', items: sidebarDocker() },
      '/documentation/': { base: '/docs/', items: sidebarDocumentation() },
      '/js/': { base: '/js/', items: sidebarJS() },
      '/linux/': { base: '/linux/', items: sidebarLinux() },
      '/py/': { base: '/py/', items: sidebarPY() },
      '/networking/': { base: '/networking/', items: sidebarNetworking() },
      '/photography/': { base: '/photography/', items: sidebarPhotography() },
      '/security/': { base: '/security/', items: sidebarSecurity() },
      '/windows/': { base: '/windows/', items: sidebarWindows() },
      '/recipes/': { base: '/recipes/', items: sidebarRecipes() },
      '/github/': { base: '/github/', items: sidebarGithub() },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tinkernerd' }
    ],
  },
  postRender(context) {
    context.teleports;
  },

  markdown: {
    config: (md) => {
      md.use(mdFootnote);
    },
  },
  
});


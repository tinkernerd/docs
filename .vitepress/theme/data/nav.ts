import { defineConfig, type DefaultTheme } from 'vitepress'
export { nav } 

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'About', link: '/about' },
        { text: 'Aviation', link: '/aviation/' },
        { text: 'Bible', link: '/bible/' },
        { text: 'Info Tech', link: '/info-tech/' },
        { text: 'Recipies', link: '/recipies/' },
    ]
}
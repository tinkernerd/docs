import { defineConfig, type DefaultTheme } from 'vitepress'
export { sidebarAviation, sidebar3dPrint, sidebarjs, sidebarinfotech };


/// Sidebar items for the Aviation section.
function sidebarAviation(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Aviation Notes',
            base: '/aviation/',
            collapsed: false,
            items: [
                { text: 'Airplane Dynamics', link: 'airplane-intro' },
                { text: 'Michigan Airport Example', link: 'michigan-airport' },
                { text: 'Phonetic Alphabet', link: 'phonetic-alphabet'},
                { text: 'Sectional Charts', link: 'sectional-charts' },
            ]
        },
        {
            text: 'Weather',
            base: '/aviation/',
            items: [
                { text: 'Overview', link: 'weather' },
                { text: 'Live Metar', link: 'live-metar' },
                { text: 'Air Facts', link: 'air-facts' },
                { text: 'When Should I Fly?', link: 'when-should-i-fly' }
            ]
        },
        {
            text: 'Resources',
            base: '/aviation/',
            collapsed: false,
            items: [
                { text: 'Airventure Resources', link: 'airventure-resources' },
                { text: 'AOPA Resources', link: 'aopa-resources' },
            ]
        },
    ]
}

/// Sidebar items for the 3d Printing under Info Tech section.

function sidebar3dPrint(): DefaultTheme.SidebarItem[] {
    return [
       {
            text: 'Articles',
            collapsed: false,
            base: '/3d-printing/',
            items: [
                { text: 'Overview', link: 'overview' },
                { text: 'Bed Leveling', link: 'bed-leveling' },
                { text: 'Price Calculator', link: 'price-calc' },
                { text: 'Printing Your Minis', link: 'minis'},
                { text: 'Benchy with the Ender 3', link: 'benchy-ender-3' },
                { text: 'Changing a 3D Printer Nozzle', link: 'ender3-change-nozzle' },
            ]
        },
        
    ]
}

function sidebarinfotech(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Articles',
            collapsed: false,
            base: '/3d-printing/',
            items: [
                { text: 'Bed Leveling', link: 'bed-leveling' },
                { text: 'Price Calculator', link: 'price-calc' },
                { text: 'Printing Your Minis', link: 'minis' },
                { text: 'Benchy with the Ender 3', link: 'benchy-ender-3' },
                { text: 'Changing a 3D Printer Nozzle', link: 'ender3-change-nozzle' },
            ]
        },
        {
            text: 'Advanced',
            items: [
                { text: 'Render Function Helpers', link: '/api/render-function' },
                { text: 'Compiler Transforms', link: '/api/compiler' },
                { text: 'Server-Side Rendering', link: '/api/ssr' },
                { text: 'Custom Renderer', link: '/api/custom-renderer' }
            ]
        }
    ]
}
function sidebarjs(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Javascript Notes',
            collapsed: false,
            base: '/js/',
            items: [
                { text: 'Overview', link: 'index' },
                { text: "API's", link: 'api' },
                { text: 'DOM Manipulation', link: 'dom-manipulation' },
                { text: 'Functions', link: 'functions' },
                { text: 'General Notes', link: 'notes' }
            ]
        },
        {
            text: 'Javascript Projects',
            collapsed: false,
            base: '/js/',
            items: [
                { text: 'Bill Total', link: 'bill-total' },
                { text: 'Document Write Example', link: 'doc-write' },
                { text: 'Random Quote', link: 'random-quotes' },
                { text: 'Book Review', link: 'book-review' },
                { text: 'Shapes Selection Tool', link: 'shapes' },
                { text: 'Space Station Tracker', link: 'space-station' },
                { text: 'Temperature Converter', link: 'temp-converter' },
                { text: 'Dynamic Table', link: 'dynamic-table' },
                { text: 'Quarter Counter', link: 'quarter-counter' },
                { text: 'Quarter Year Table', link: 'quarter-year-table' }
            ]
        }
    ]
}

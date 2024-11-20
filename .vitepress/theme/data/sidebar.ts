import { defineConfig, type DefaultTheme } from 'vitepress'
export { sidebarAviation, sidebarWindows, sidebarDocumentation, sidebarSecurity, sidebarRecipes, sidebarPhotography, sidebarNetworking, sidebarLinux, sidebar3dPrint, sidebarJS, sidebarArduino, sidebarDocker, sidebarBible, sidebarPY, sidebarGithub };



/// Sidebar items for the 3D Printing section under Info Tech.
function sidebar3dPrint(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Notes',
            collapsed: false,
            base: '/3d-printing/',
            items: [
                { text: 'STL Sources', link: 'stl-sources' },
                { text: 'Resources', link: 'resources' },
                { text: 'Printer Fixes', link: 'fixes' },
                { text: 'Filament Types (Coming Soon)', link: 'filament-types' },
                { text: 'Printer Settings & Calibration (Coming Soon)', link: 'printer-settings' },
                { text: 'Advanced Techniques (Coming Soon)', link: 'advanced-techniques' }
            ]
        },
        {
            text: 'Articles',
            collapsed: false,
            base: '/3d-printing/',
            items: [
                { text: 'Bed Leveling', link: 'bed-leveling' },
                { text: 'Benchy with the Ender 3', link: 'benchy-ender-3' },
                { text: 'Changing a 3D Printer Nozzle', link: 'ender3-change-nozzle' },
                { text: 'Price Calculator', link: 'price-calc' },
                { text: 'Printing Your Minis', link: 'minis' }
            ]
        }
    ]
}

/// Sidebar items for the Arduino section.
function sidebarArduino(): DefaultTheme.SidebarItem[] {
    return [
         {
            text: 'Notes',
            collapsed: false,
            base: '/arduino/',
            items: [
                { text: 'Overview', link: '/' }
            ]
        },
    ];
}

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
                { text: 'Phonetic Alphabet', link: 'phonetic-alphabet' },
                { text: 'Sectional Charts', link: 'sectional-charts' },
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
        {
            text: 'Weather',
            base: '/aviation/',
            items: [
                { text: 'Air Facts', link: 'air-facts' },
                { text: 'Live Metar', link: 'live-metar' },
                { text: 'Overview', link: 'weather' },
                { text: 'When Should I Fly?', link: 'when-should-i-fly' }
            ]
        },
    ]
}

/// Sidebar items for the Bible section.
function sidebarBible(): DefaultTheme.SidebarItem[] {
    return [];
}

/// Sidebar items for the Docker section.
function sidebarDocker(): DefaultTheme.SidebarItem[] {
    return [];
}

/// Sidebar items for the Documentation section.
function sidebarDocumentation(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Documentation',
            collapsed: false,
            base: '/documentation/',
            items: [
                { text: "How to Take Notes", link: 'how-to-take-notes' },
                { text: "What is Documentation?", link: 'what-is-it' },
                { text: "Documentation Tools", link: 'tools' },
                { text: "Why Documentation Matters", link: 'why-it-matters' },
                { text: "How to Organize Documentation", link: 'how-to-organize' },
                { text: "Documentation Best Practices", link: 'best-practices' },
                { text: "Common Pitfalls in Documentation", link: 'common-pitfalls' },
            ]
        },
        {
            text: 'Markdown',
            collapsed: false,
            base: '/documentation/',
            items: [
                { text: "Markdown", link: 'md' },
                { text: "Markdown Resources", link: 'md-resources' },
                { text: "Markdown Sites", link: 'md-sites' },
                { text: "Markdown Basics", link: 'md-basics' },
                { text: "Advanced Markdown Techniques", link: 'md-advanced' },
                { text: "Markdown for Obsidian", link: 'md-obsidian' },
                { text: "Markdown Plugins", link: 'md-plugins' },
                { text: "Markdown for Blogging", link: 'md-blogging' },
            ]
        },
    ];
}

/// Sidebar items for the Github section.
function sidebarGithub(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'GitHub',
            collapsed: false,
            base: '/github/',
            items: [
                { text: 'GitHub Pages', link: 'github-pages' },
                { text: 'Install GitHub Desktop', link: 'github-install' },
                { text: 'Pip From Repo', link: 'pip-from-repo' },
                { text: 'Resources', link: 'github-resources' },
                { text: 'Signing Repos', link: 'signing-repos' }
            ]
        },
        {
            text: 'Git',
            collapsed: false,
            base: '/github/',
            items: [
                { text: 'Git', link: 'git' },
                { text: 'Install Git', link: 'git-install' },
                { text: 'Getting Started', link: 'git-started' },
                { text: 'Resources', link: 'git-resources' },
                { text: 'Git Commands', link: 'git-commands' },
                { text: 'Branches', link: 'git-branches' },

            ]
        }
    ]
}

/// Sidebar items for the JavaScript section.
function sidebarJS(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Javascript Notes',
            collapsed: false,
            base: '/js/',
            items: [
                { text: "API's", link: 'api' },
                { text: 'DOM Manipulation', link: 'dom-manipulation' },
                { text: 'Functions', link: 'functions' },
                { text: 'General Notes', link: 'notes' },
                { text: 'Overview', link: 'index' }
            ]
        },
        {
            text: 'Javascript Projects',
            collapsed: false,
            base: '/js/',
            items: [
                { text: 'Bill Total', link: 'bill-total' },
                { text: 'Book Review', link: 'book-review' },
                { text: 'Document Write Example', link: 'doc-write' },
                { text: 'Dynamic Table', link: 'dynamic-table' },
                { text: 'Quarter Counter', link: 'quarter-counter' },
                { text: 'Quarter Year Table', link: 'quarter-year-table' },
                { text: 'Random Quote', link: 'random-quotes' },
                { text: 'Shapes Selection Tool', link: 'shapes' },
                { text: 'Space Station Tracker', link: 'space-station' },
                { text: 'Temperature Converter', link: 'temp-converter' }
            ]
        }
    ]
}

/// Sidebar items for the Linux section.
function sidebarLinux(): DefaultTheme.SidebarItem[] {
    return [];
}

/// Sidebar items for the Networking section.
function sidebarNetworking(): DefaultTheme.SidebarItem[] {
    return [];
}

/// Sidebar items for the Photography section.
function sidebarPhotography(): DefaultTheme.SidebarItem[] {
    return [];
}

/// Sidebar items for the Python section.
function sidebarPY(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Python Notes',
            base: '/py/',
            collapsed: false,
            items: [
                { text: 'Loops', link: 'loops' },
                { text: 'Functions', link: 'functions' },
                { text: 'Operators', link: 'operators' },
                { text: 'Data Types', link: 'data-types' },
                { text: 'Input and Output', link: 'input-output' },
                { text: 'Control Flow', link: 'control-flow' },
                { text: 'Modules and Imports', link: 'modules-and-imports' },
                { text: 'Pseudocode', link: 'pseudocode' },
                { text: 'Mermaid Diagrams', link: 'mermaid-diagrams' },
                { text: 'Interactive Shell', link: 'interactive-shell' },
            ]



        },
        {
            text: 'Python Projects',
            base: '/py/',
            collapsed: false,
            items: [
                { text: 'Py Age', link: 'pyage' },
                { text: 'Py Math', link: 'pymath' },
                { text: 'Py Net', link: 'pynet' },
                { text: 'Py Search', link: 'pysearch' }
            ]
        }
    ]
}

/// Sidebar items for the Recipes section.
function sidebarRecipes(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Alcohol Drinks',
            base: '/recipes/',
            collapsed: false,
            items: [
                { text: 'Long Island Iced Tea', link: 'long-island' },
                { text: "Hard Apple Cider", link: 'hard-cider' },
            ]
        },
        {
            text: 'Non-Alcohol Drinks',
            base: '/recipes/',
            collapsed: false,
            items: [
                { text: 'Homemade Lemonade', link: 'homemade-lemonade' },
            ]
        },
        {
            text: 'Food',
            base: '/recipes/',
            collapsed: false,
            items: [
                { text: 'Copycat Chick-fil-A Spicy Southwest Salad', link: 'spicy-southwest-salad' },
                { text: "Spicy-Sweet Buffalo Popcorn, keto", link: 'buffalo-popcorn' },
   
            ]
        }
    ];
}

/// Sidebar items for the Security section.
function sidebarSecurity(): DefaultTheme.SidebarItem[] {
    return [];
}

/// Sidebar items for the Windows section.
function sidebarWindows(): DefaultTheme.SidebarItem[] {
    return [];
}

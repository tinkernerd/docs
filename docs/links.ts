import type { CardLink, FooterSection } from '@theme/data/types';
// --------------------------------
// Contact
export const contactCardLink: CardLink[] = [
  {
    icon: 'fa-envelopes-bulk',
    title: 'Email Me',
    description:
      'Send me an email at Nicholasp.stull@gmail.com, and I’ll get back to you as soon as possible.',
    url: 'mailto:Nicholasp.stull@gmail.com',
  },
  {
    icon: 'fa-github-alt',
    title: 'GitHub',
    description:
      'Explore my projects, see what I’m working on, or contribute to any ongoing work on my GitHub profile.',
    url: 'https://github.com/tinkernerd',
  },
  {
    icon: 'fa-hashtag',
    title: 'Instagram',
    description:
      'Stay updated with my latest posts and announcements by following me on Instagram.',
    url: 'https://instagram.com/therealnicholasstull',
  },
];


// --------------------------------
// Home

export const homeTopLinks: CardLink[] = [
    {
        icon: 'fa-file-import',
        title: 'Get Started',
        description:
            'Explore the full potential of StackBlitz: from writing code or spinning quick demos to making your docs delightful.',
        url: '/guides/user-guide/what-is-stackblitz',
    },
    {
        icon: 'fa-browser',
        title: 'Codeflow',
        description:
            'One click opens a full in-browser IDE for your repos, issues, and PRs. No more cloning, installing, stashing!',
        url: '/codeflow/what-is-codeflow',
    },
    {
        icon: 'fa-brackets-curly',
        title: 'API Reference',
        description:
            'Embed GitHub repos, create new projects, build educational experiences, all programmatically with our SDK.',
        url: '/platform/api/javascript-sdk',
    },
    {
        icon: 'fa-life-ring',
        title: 'Integrating StackBlitz',
        description:
            'Follow guides on building interactive playgrounds, improving bug repros, and using StackBlitz for tech education.',
        url: '/guides/integration/open-from-github',
    },
    {
        icon: 'fa-users',
        title: 'Teams',
        description:
            'With StackBlitz Teams you create a secure, private workspace for you and your teammates.',
        url: '/teams/what-is-stackblitz-teams',
    },
    {
        icon: 'fa-server',
        title: 'Enterprise Server',
        description:
            'Run StackBlitz behind your firewall, on new or existing Kubernetes clusters, with options for air gapping and SSO.',
        url: '/enterprise/overview',
    },
];

export const homeExternalLinks: CardLink[] = [
    {
        title: 'More About Me',
        description:
            'Want to know more about me? Check out the about me page. You can also find my contact information there.',
        url: '/about',
        large: true,
        bgImg: 'bolt',
    },
    {
        title: 'Contact Nick!',
        description:
            'Join our supportive community on Discord, ask questions, and share your StackBlitz projects.',
        url: '/contact/',
        large: true,
        bgImg: 'squares',
    },
];
export const AboutLink: CardLink[] = [
    {
        title: 'Contact Nick!',
        description:
            'Visit my contact page to connect with me directly and start a conversation.',
        url: '/contact/',
        large: true,
        bgImg: 'squares',
    },
    {
        title: 'Check Out My Projects',
        description:
            'Discover my latest creations and contributions on GitHub, showcasing innovative solutions and tools.',
        url: 'https://www.github.com/tinkernerd',
        large: true,
        bgImg: 'bolt',
    }
];

// --------------------------------
// Footer

export const footerSections: FooterSection[] = [
    {
        title: 'Workspaces',
        items: [
            { text: 'Popular', link: 'https://stackblitz.com/?starters=popular' },
            { text: 'Frontend', link: 'https://stackblitz.com/?starters=frontend' },
            { text: 'Backend', link: 'https://stackblitz.com/?starters=backend' },
            { text: 'Fullstack', link: 'https://stackblitz.com/?starters=fullstack' },
            { text: 'Vite', link: 'https://stackblitz.com/?starters=vite' },
            { text: 'Docs, Blogs & Slides', link: 'https://stackblitz.com/?starters=docs' },
            { text: 'Vanilla', link: 'https://stackblitz.com/?starters=vanilla' },
        ],
    },
    {
        title: 'Start a new Project',
        items: [
            { text: 'From a Workspace', link: 'https://stackblitz.com/?starters=popular' },
            {
                text: 'From a GitHub Repository',
                link: '/guides/user-guide/importing-projects#import-from-github',
            },
            {
                text: 'From your computer',
                link: '/guides/user-guide/importing-projects#upload-from-your-computer',
            },
        ],
    },
    {
        title: 'Product',
        items: [
            { text: 'Docs', link: 'https://developer.stackblitz.com/' },
            { text: 'Enterprise', link: 'https://stackblitz.com/enterprise' },
            { text: 'Pricing', link: 'https://stackblitz.com/membership' },
            { text: 'Case Studies', link: 'https://stackblitz.com/case-studies' },
        ],
    },
    {
        title: 'Company',
        items: [
            { text: 'Blog', link: 'https://blog.stackblitz.com/' },
            { text: 'Careers', link: 'https://stackblitz.com/careers' },
            { text: 'Community', link: 'https://discord.gg/stackblitz' },
            { text: 'Enterprise Sales', link: 'https://stackblitz.com/enterprise-contact' },
            { text: 'Privacy', link: 'https://stackblitz.com/privacy-policy' },
            { text: 'Terms of Service', link: 'https://stackblitz.com/terms-of-service' },
        ],
    },
    {
        title: 'Connect',
        items: [
            { text: 'GitHub', link: 'https://github.com/stackblitz/core' },
            { text: 'Twitter', link: 'https://twitter.com/stackblitz' },
            { text: 'Discord', link: 'https://discord.gg/stackblitz' },
        ],
    },
];
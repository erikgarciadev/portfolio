import { SECTIONS } from './constants'

export const socialMedia: {
    href: string
    src: string
    alt: string
}[] = [
    {
        href: 'https://www.linkedin.com/in/erik-garcia-tacas/',
        src: '/icons/socialMedia/linkedin.svg',
        alt: 'Linkedin Logo',
    },
    {
        href: 'https://twitter.com/erikgarciadev',
        src: '/icons/socialMedia/twitter.svg',
        alt: 'Twitter Logo',
    },
    {
        href: 'https://github.com/erikgarciadev',
        src: '/icons/socialMedia/github.svg',
        alt: 'Github Logo',
    },
]

export const skills = [
    {
        title: 'Html',
        src: '/icons/tools/html.svg',
    },
    {
        title: 'Css',
        src: '/icons/tools/css.svg',
    },
    {
        title: 'Javascript',
        src: '/icons/tools/js.svg',
    },
    {
        title: 'Typescript',
        src: '/icons/tools/ts.svg',
    },
    {
        title: 'React',
        src: '/icons/tools/react.svg',
    },
    {
        title: 'NextJs',
        src: '/icons/tools/nextjs.svg',
    },
    {
        title: 'Git',
        src: '/icons/tools/git.svg',
    },
    {
        title: 'Tailwind',
        src: '/icons/tools/tailwind.svg',
    },
    {
        title: 'NodeJs',
        src: '/icons/tools/nodejs.svg',
    },
    {
        title: 'Firebase',
        src: '/icons/tools/firebase.svg',
    },
    {
        title: 'Sql server',
        src: '/icons/tools/sqlserver.svg',
    },
]

export const projects: {
    src: string
    title: string
    keys: string[]
    urls?: { href: string; src: string; alt: string }[]
}[] = [
    {
        src: '/images/landing-page.webp',
        title: 'Landing Page',
        keys: ['Html', 'Css', 'Js'],
        urls: [
            {
                src: '/icons/socialMedia/github.svg',
                href: 'https://github.com/erikgarciadev/Road2dev-reto1',
                alt: 'Github Icon',
            },
            {
                src: '/icons/socialMedia/internet.svg',
                href: 'https://erikgarciadev.github.io/Road2dev-reto1/',
                alt: 'Internet Icon',
            },
        ],
    },
    {
        src: '/images/crud-pokemon.webp',
        title: 'Crud Pokemon',
        keys: ['React', 'Css', 'Api', 'Vite'],
        urls: [
            {
                src: '/icons/socialMedia/github.svg',
                href: 'https://github.com/erikgarciadev/frontend-bp ',
                alt: 'Github Icon',
            },
            {
                src: '/icons/socialMedia/internet.svg',
                href: 'https://erikgarciadev.github.io/frontend-bp/',
                alt: 'Internet Icon',
            },
        ],
    },
    // {
    //     src: '/images/portafolio.jpg',
    //     title: 'Portafolio',
    //     keys: ['NextJs', 'Styled-components'],
    //     urls: [
    //         {
    //             src: '/icons/socialMedia/github.svg',
    //             href: 'https://github.com/erikgarciadev/portfolio',
    //             alt: 'Github Icon',
    //         },
    //          {
    //               src: '/icons/socialMedia/internet.svg',
    //              href: 'https://erikgarciadev.netlify.app/',
    //              alt: 'Internet Icon',
    //          },
    //     ],
    // },
    {
        src: '/images/resource-manager.webp',
        title: 'Resource Manager',
        keys: ['Angular', 'Ionic', 'Firebase', 'Tailwind'],
        urls: [
            {
                src: '/icons/socialMedia/internet.svg',
                href: 'https://resourcesurl.firebaseapp.com/',
                alt: 'Internet Icon',
            },
        ],
    },
    {
        src: '/images/procustodia.webp',
        title: 'Landing Page Procustodia',
        keys: ['NextJs', 'Google Maps'],
        urls: [
            {
                src: '/icons/socialMedia/internet.svg',
                href: 'https://www.procustodia.com/',
                alt: 'Internet Icon',
            },
        ],
    },
]

export const sections = [
    {
        href: `#${SECTIONS.home}`,
        name: 'home',
    },
    {
        href: `#${SECTIONS.about}`,
        name: 'about',
    },
    {
        href: `#${SECTIONS.projects}`,
        name: 'projects',
    },
    {
        href: `#${SECTIONS.contact}`,
        name: 'contact',
    },
]

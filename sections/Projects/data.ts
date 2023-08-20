export const projects: {
    src: string
    title: string
    keys: string[]
    urls?: { href: string; src: string; alt: string }[]
}[] = [
    {
        src: '/images/landing-page.jpg',
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
        src: '/images/crud-pokemon.jpg',
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
        src: '/images/resource-manager.jpg',
        title: 'Resource Manager',
        keys: ['React', 'Firebase', 'react-router'],
        urls: [
            {
                src: '/icons/socialMedia/internet.svg',
                href: 'https://resourcesurl.firebaseapp.com/',
                alt: 'Internet Icon',
            },
        ],
    },
]


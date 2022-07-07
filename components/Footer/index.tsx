import { NextPage } from 'next'
import Image from 'next/image'
import { FooterStyled } from './style'

const socialMedia: {
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

const Footer: NextPage = () => {
    return (
        <FooterStyled>
            {socialMedia.map((data, i) => (
                <a href={data.href} target="_blank" rel="noopener noreferrer">
                    <span>
                        <Image src={data.src} alt={data.alt} width={36} height={36} />
                    </span>
                </a>
            ))}
        </FooterStyled>
    )
}

export default Footer

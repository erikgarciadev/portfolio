import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Header, Logo, IconMenu, Nav } from './style'
import useTranslation from 'next-translate/useTranslation'
import { sections } from '../../utils/data'

const Navbar: NextPage = () => {
    const [activeNavbar, setActiveNavbar] = useState<boolean>(false)
    const iconRef = useRef<any>(null)
    const { t } = useTranslation('utils')

    useEffect(() => {
        const onScroll = (e: Event) => {
            if (activeNavbar) {
                setActiveNavbar(false)
                iconRef?.current?.classList.remove('fa-times')
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [activeNavbar])

    return (
        <Header>
            <div
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}
                className="container"
            >
                <Link href="/">
                    <Logo>
                        <Image height="40" width="40" src="/logo.svg" alt="logo" />
                    </Logo>
                </Link>

                <IconMenu
                    ref={iconRef}
                    onClick={() => setActiveNavbar(!activeNavbar)}
                    className={`fas ${activeNavbar ? 'fa-times' : 'fa-bars'}`}
                >
                    <Image
                        width={25}
                        height={21}
                        src={activeNavbar ? '/icons/close.svg' : '/icons/bars.svg'}
                        alt={activeNavbar ? 'Close Icon' : 'Bars Icon'}
                    />
                </IconMenu>
                <Nav active={activeNavbar}>
                    {sections.map((section) => (
                        <a key={section.href} href={section.href}>
                            {t(`sections.${section.name}`)}
                        </a>
                    ))}
                </Nav>
            </div>
        </Header>
    )
}

export default Navbar

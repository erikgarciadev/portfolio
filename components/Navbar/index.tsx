import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Header, Logo, IconMenu, Nav } from './style'

const Navbar: NextPage = () => {
    const [activeNavbar, setActiveNavbar] = useState<boolean>(false)
    const iconRef = useRef<any>(null)

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
                    <a href="#home">Inicio</a>
                    <a href="#about">Sobre mí</a>
                    <a href="#projects">Proyectos</a>
                    {/* <a href="#contact">Contacto</a> */}
                </Nav>
            </div>
        </Header>
    )
}

export default Navbar

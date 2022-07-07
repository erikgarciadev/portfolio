import type { NextPage } from 'next'
import Image from 'next/image'
import { HomeStyled } from './style'

const Home: NextPage = () => {
    return (
        <HomeStyled id="home" className="container">
            <div style={{ width: '50%', textAlign: 'center' }}>
                <p style={{ fontSize: '26px', color: 'black' }}>Hola 👋, soy</p>
                <p style={{ fontSize: '36px', color: 'var(--primary)' }}>Erik Garcia</p>
                <p style={{ fontSize: '18px', color: 'gray' }}>Desarrollador Frontend</p>
            </div>
            <div style={{ width: '50%', textAlign: 'center' }}>
                <Image height="400" width="400" src="/image.jpg" alt="" />
            </div>
        </HomeStyled>
    )
}

export default Home

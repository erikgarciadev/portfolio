import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './style.module.css'

const Home: NextPage = () => {
    return (
        <section id="home" className={`${styles.home} container`}>
            <div>
                <p style={{ fontSize: '26px', color: 'black' }}>Hola 👋, soy</p>
                <p style={{ fontSize: '36px', color: 'var(--primary)' }}>Erik Garcia</p>
                <p style={{ fontSize: '18px', color: '#4f4f4f' }}>Desarrollador Frontend</p>
                <a href="/documents/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <button
                        style={{
                            padding: '0.5em',
                            minWidth: '120px',
                            fontSize: '18px',
                            fontWeight: 500,
                            borderRadius: '20px',
                            background: 'var(--primary)',
                            color: 'white',
                            border: '1px solid white',
                            cursor: 'pointer',
                        }}
                    >
                        CV
                    </button>
                </a>
            </div>
            <div>
                <Image priority height="400" width="300" src="/image.webp" alt="" />
            </div>
        </section>
    )
}

export default Home

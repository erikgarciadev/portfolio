import { NextPage } from 'next'
import Image from 'next/image'
import styles from './style.module.css'
import { socialMedia } from '../../utils/data'

const Footer: NextPage = () => {
    return (
        <footer className={styles.footer}>
            {socialMedia.map((data, i) => (
                <a className={styles.box} key={i} href={data.href} target="_blank" rel="noopener noreferrer">
                    <span>
                        <Image src={data.src} alt={data.alt} width={36} height={36} />
                    </span>
                </a>
            ))}
        </footer>
    )
}

export default Footer

import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './style.module.css'
import { SECTIONS, URL_CV } from '../../utils/constants'
import useTranslation from 'next-translate/useTranslation'
import PageOptions from '../../components/PageOptions'

const Home: NextPage = () => {
    const { t, lang } = useTranslation('home')

    const url_cv = URL_CV[lang as 'es' | 'en']
    return (
        <section id={SECTIONS.home} className={`${styles.home} container`}>
            <PageOptions />
            <div>
                <p style={{ fontSize: '26px', color: 'black' }}>{t('presentation')}</p>
                <p style={{ fontSize: '36px', color: 'var(--primary)' }}>Erik Garcia</p>
                <p style={{ fontSize: '18px', color: '#4f4f4f' }}>{t('frontend_developer')}</p>
                <a href={url_cv} target="_blank" rel="noopener noreferrer">
                    <button className={styles.button}>CV</button>
                </a>
            </div>
            <div>
                <Image priority height="400" width="300" src="/image.webp" alt="" />
            </div>
        </section>
    )
}

export default Home

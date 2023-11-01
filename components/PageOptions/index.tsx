import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import styles from './styles.module.css'

export default function PageOptions() {
    const { lang, t } = useTranslation('utils')

    const urlImage = `/icons/pageOptions/${lang}.svg`

    const newLanguage = lang === 'es' ? 'en' : 'es'

    const handleChangeLanguage = async () => {
        await setLanguage(newLanguage)
    }
    return (
        <section className={`${styles['container_page-options']} container`}>
            <span onClick={handleChangeLanguage}>
                <Image
                    aria-label={t(`pageOptions.switch_${newLanguage}`)}
                    title={t(`pageOptions.switch_${newLanguage}`)}
                    width={30}
                    layout="fill"
                    height={30}
                    src={urlImage}
                />
            </span>
        </section>
    )
}


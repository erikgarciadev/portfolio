import type { NextPage } from 'next'
import Image from 'next/image'
import { skills } from '../../utils/data'
import useTranslation from 'next-translate/useTranslation'
import { SECTIONS } from '../../utils/constants'
import styles from './style.module.css'

const About: NextPage = () => {
    const { t } = useTranslation('about')
    return (
        <section id={SECTIONS.about} className={`${styles.about} container`}>
            <div>
                <h2>{t('about')}</h2>
                <div>
                    <p>{t('about_first')}</p>
                    <p>{t('about_second')}</p>
                    <p>{t('about_third')}</p>
                </div>
            </div>
            <div>
                <h2>{t('skills')}</h2>
                <div>
                    {skills.map((skill, i) => (
                        <Image
                            key={i}
                            aria-label={skill.title}
                            title={skill.title}
                            height={50}
                            width={50}
                            src={skill.src}
                            alt={skill.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About

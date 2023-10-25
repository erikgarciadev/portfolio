import type { NextPage } from 'next'
import CardProject from './CardProject'
import { projects } from '../../utils/data'
import { SECTIONS } from '../../utils/constants'
import styles from './style.module.css'
import useTranslation from 'next-translate/useTranslation'

const Projects: NextPage = () => {
    const { t } = useTranslation('utils')
    return (
        <section
            className="container"
            id={SECTIONS.projects}
            style={{
                padding: '2em',
                paddingTop: '80px',
            }}
        >
            <h2 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>{t('sections.projects')}</h2>
            <div className={styles.container_projects}>
                {projects.map((project, i) => (
                    <CardProject
                        key={i}
                        src={project.src}
                        title={project.title}
                        keys={project.keys}
                        urls={project.urls}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects

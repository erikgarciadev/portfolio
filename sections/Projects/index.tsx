import type { NextPage } from 'next'
import CardProject from './CardProject'
import { projects } from './data'
import { ContainerProjects } from './style'

const Projects: NextPage = () => {
    return (
        <section
            className="container"
            id="projects"
            style={{
                padding: '2em',
                paddingTop: '80px',
            }}
        >
            <h2 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Proyectos</h2>
            <ContainerProjects>
                {projects.map((project, i) => (
                    <CardProject
                        key={i}
                        src={project.src}
                        title={project.title}
                        keys={project.keys}
                        urls={project.urls}
                    />
                ))}
            </ContainerProjects>
        </section>
    )
}

export default Projects

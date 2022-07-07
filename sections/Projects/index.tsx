import type { NextPage } from 'next'
import CardProject from './CardProject'
import { ContainerProjects } from './style'

const projects: {
    src: string
    title: string
    keys: string[]
}[] = [
    {
        src: '/images/landing-page.jpg',
        title: 'Landing Page',
        keys: ['Html', 'Css', 'Js'],
    },
    {
        src: '/images/crud-pokemon.jpg',
        title: 'Crud Pokemon',
        keys: ['React', 'Css', 'Api'],
    },
    {
        src: '/images/portafolio.jpg',
        title: 'Portafolio',
        keys: ['NextJs', 'Styled-components'],
    },
    {
        src: '/images/resource-manager.jpg',
        title: 'Resource Manager',
        keys: ['React', 'Firebase', 'react-router'],
    },
]

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
                    <CardProject key={i} src={project.src} title={project.title} keys={project.keys} />
                ))}
            </ContainerProjects>
        </section>
    )
}

export default Projects

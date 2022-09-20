import type { NextPage } from 'next'
import Image from 'next/image'
import { AboutStyled } from './style'

const skills = [
    {
        title: 'Html',
        src: '/icons/tools/html.svg',
    },
    {
        title: 'Css',
        src: '/icons/tools/css.svg',
    },
    {
        title: 'Javascript',
        src: '/icons/tools/js.svg',
    },
    {
        title: 'Typescript',
        src: '/icons/tools/ts.svg',
    },
    {
        title: 'React',
        src: '/icons/tools/react.svg',
    },
    {
        title: 'NextJs',
        src: '/icons/tools/nextjs.svg',
    },
    {
        title: 'Git',
        src: '/icons/tools/git.svg',
    },
    {
        title: 'Tailwind',
        src: '/icons/tools/tailwind.svg',
    },
    {
        title: 'NodeJs',
        src: '/icons/tools/nodejs.svg',
    },
    {
        title: 'Firebase',
        src: '/icons/tools/firebase.svg',
    },
    {
        title: 'Sql server',
        src: '/icons/tools/sqlserver.svg',
    },
]

const About: NextPage = () => {
    return (
        <AboutStyled id="about" className="container">
            <div>
                <h2>Sobre mi</h2>
                <div>
                    <p>
                        Busco desarrollarme dentro de una empresa que me permita adquirir conocimientos y experiencias,
                        al mismo tiempo que me dé la oportunidad de aportar mis habilidades, entusiasmo y energía para
                        realizarme personal.
                    </p>
                    <br />
                    <p>
                        Actualmente me dedico exclusivamente al desarrollo frontend, poder pero estoy dispuesto a poder
                        aprender y desempe ñarme como full stack
                    </p>
                    <br />
                    <p>
                        Me gustaría poder enseñar a otros miembros del equipo, para poder mejorar mis habilidades de
                        liderazgo.
                    </p>
                </div>
            </div>
            <div>
                <h2>Habilidades</h2>
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
        </AboutStyled>
    )
}

export default About

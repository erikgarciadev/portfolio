import type { NextPage } from 'next'
import Image from 'next/image'
import { AboutStyled } from './style'

const About: NextPage = () => {
    return (
        <AboutStyled id="about" className="container">
            <div>
                <h2 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Sobre mi</h2>
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
                <h2 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Habilidades</h2>
                <div>
                    <Image height={50} width={50} src="/icons/tools/html.svg" alt="" />
                    <Image height={50} width={50} src="/icons/tools/css.svg" alt="" />
                    <Image height={50} width={50} src="/icons/tools/js.svg" alt="" />
                    <Image height={50} width={50} src="/icons/tools/ts.svg" alt="" />
                    <Image height={50} width={50} src="/icons/tools/react.svg" alt="" />
                    <Image height={50} width={50} src="/icons/tools/nextjs.svg" alt="" />
                    <Image height={50} width={50} src="/icons/tools/git.svg" alt="" />
                    <Image height={50} width={50} src="/icons/tools/tailwind.svg" alt="" />
                    <Image height={50} width={50} src="/icons/tools/nodejs.svg" alt="" />
                    <Image height={50} width={50} src="/icons/tools/firebase.svg" alt="" />
                    <Image height={50} width={50} src="/icons/tools/sqlserver.svg" alt="" />
                </div>
            </div>
        </AboutStyled>
    )
}

export default About

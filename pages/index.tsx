import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Projects from '../sections/Projects'
import Home from '../sections/Home'
import Contact from '../sections/Contact'
import About from '../sections/About'

const Index: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Erik Garcia</title>
            </Head>

            <main>
                <Navbar />
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Index


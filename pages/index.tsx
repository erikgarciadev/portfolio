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
                <meta name="description" content="Portafolio" />
                <link rel="icon" href="/favicon.ico" />
                {/* font awesome cdn link  */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>

            <main>
                <Navbar />
                <Home />
                <About />
                <Projects />
                {/* <Contact /> */}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Index


import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Home from "../sections/Home"


const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Erik Garcia</title>
        <meta name="description" content="Portafolio" />
        <link rel="icon" href="/favicon.ico" />
         {/* font awesome cdn link  */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      </Head>

      <main>
        <Home></Home>
      </main>
    {/* <Footer></Footer> */}
    </div>
  )
}

export default Index

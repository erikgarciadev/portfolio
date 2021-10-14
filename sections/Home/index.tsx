import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', height:'100vh'}}>
        <Image height='400' width='500' src='/spinning-cogs.svg' alt='' />
        <h2 style={{textAlign:'center', paddingTop:'20px'}}> Portafolio en Construcción</h2>
    </div>
  )
}

export default Home
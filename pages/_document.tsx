import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <meta name="description" content="Portafolio" />
                <meta name="keywords" content="portfolio, personal website, frontend developer" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://erikgarciadev.netlify.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Erik Garcia | Frontend Developer" />
                <meta property="og:description" content="Portfolio" />
                <meta
                    property="og:image"
                    content="https://media.licdn.com/dms/image/D4D16AQFC6nngGKdO_g/profile-displaybackgroundimage-shrink_350_1400/0/1694099636898?e=1717632000&v=beta&t=LphuEoG5q6IrrcBlJN17ls4ygjJGLTDdpnwXfvgtSsc"
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="erikgarciadev.netlify.app" />
                <meta property="twitter:url" content="https://erikgarciadev.netlify.app/" />
                <meta name="twitter:title" content="Erik Garcia | Frontend Developer" />
                <meta name="twitter:description" content="Portfolio" />
                <meta
                    name="twitter:image"
                    content="https://media.licdn.com/dms/image/D4D16AQFC6nngGKdO_g/profile-displaybackgroundimage-shrink_350_1400/0/1694099636898?e=1717632000&v=beta&t=LphuEoG5q6IrrcBlJN17ls4ygjJGLTDdpnwXfvgtSsc"
                />

                {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}

                <link rel="icon" href="/favicon.ico" />
                {/* font awesome cdn link  */}
                {/* <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                /> */}
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.googleapis.com/" crossOrigin="anonymous" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

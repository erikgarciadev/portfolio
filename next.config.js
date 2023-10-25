/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
    reactStrictMode: true,
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es',
    },
    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
    //         config.resolve.fallback = {
    //             fs: false,
    //             crypto: false,
    //             process: false,
    //         }
    //     }

    //     return config
    // },
})

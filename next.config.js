/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
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
}


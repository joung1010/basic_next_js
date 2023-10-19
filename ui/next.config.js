const {sources} = require("next/dist/compiled/webpack/webpack");
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',

            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/products/deleted_forever',
                destination:'/products',
                permanent:true,
            },
            {
                source: '/products/deleted_tmp',
                destination:'/products',
                permanent:false,
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/mason',
                destination: '/about/me/mason',
            },
            {
                source: '/items/:slug',
                destination: '/products/:slug',
            },
        ]
    },

}

module.exports = nextConfig

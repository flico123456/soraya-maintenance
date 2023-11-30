/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
      return [
        {
          source: '/fr',
          destination: '/',
          permanent: true,
        },
      ]
    },
    nextConfig
  }

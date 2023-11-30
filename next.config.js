/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
      return [
        {
          source: '/fr/maillot-de-bain-femme/maillots-de-bain-1-piece.html',
          destination: '/',
          permanent: true,
        },
      ]
    },
    nextConfig
  }

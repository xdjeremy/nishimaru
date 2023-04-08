/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8090',
        pathname: '/api/files/**/*'
      },
      {
        protocol: 'https',
        hostname: 'nishimaru.pockethost.io',
        port: '',
        pathname: '/api/files/**/*'
      }
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'www.jelajahgarut.com'
        },
        {
            protocol: 'https',
            hostname: 'garutkulit.id'
        },
        {
            protocol: 'https',
            hostname: 'glamlab.co.id'
        },
    ]
  }}

module.exports = nextConfig

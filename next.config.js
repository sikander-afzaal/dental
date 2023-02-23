/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', '127.0.0.1', 'turismodentaleal.com'],
  },
  i18n: {
    locales: ['en-US', 'it', 'sq'],
    defaultLocale: 'en-US'
  }
}

module.exports = nextConfig

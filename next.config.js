/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    ssr: true,
    minify: true,
  },
}

module.exports = nextConfig

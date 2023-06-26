/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// opt-in for: Server Actions
module.exports = {
  experimental: {
    serverActions: true,
  },
}

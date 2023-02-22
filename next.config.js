/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  reactStrictMode: true,
  env: {
    HOST_URL: process.env.HOST_URL,
  },
};

module.exports = nextConfig;

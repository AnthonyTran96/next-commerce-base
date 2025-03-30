/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' && {
      exclude: ['error'],
    }
  },
};

module.exports = nextConfig;

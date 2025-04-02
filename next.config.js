/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'feelex.vn'
      }
    ]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' && {
      exclude: ['error'],
    }
  },
  webpack: (config) => {
    // config.externals.push({
    //   bufferutil: 'bufferutil',
    //   'utf-8-validate': 'utf-8-validate',
    // });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;

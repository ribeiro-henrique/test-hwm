/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://hardworkmedicina.com.br/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
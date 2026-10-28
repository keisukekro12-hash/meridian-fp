/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // 牛牛 配当計算（public/niuniu/index.html）を /niuniu で開けるように
    return [
      { source: "/niuniu", destination: "/niuniu/index.html" },
      { source: "/niuniu/", destination: "/niuniu/index.html" },
    ];
  },
};

module.exports = nextConfig;

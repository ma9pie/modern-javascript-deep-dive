/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // 예제 코드 표시를 위한 uglify 비활성화
  webpack(config) {
    return {
      ...config,
      optimization: {
        minimize: false,
      },
    };
  },
};

module.exports = nextConfig;

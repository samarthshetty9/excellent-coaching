/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'excellentcoachingclassesdwd.in',
      },
    ],
  },
};

export default nextConfig;

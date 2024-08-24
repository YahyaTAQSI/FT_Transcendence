/** @type {import('next').NextConfig} */

// const nextConfig = {
//   transpilePackages: ["@mui/x-charts"],
//   reactStrictMode: false,
//   images: {
//     domains: [
//       "cdn.intra.42.fr",
//       "localhost",
//       // "10.13.11.10",
//       "0.0.0.0",
//       "lh3.googleusercontent.com",
//     ],
//   },
// };


const nextConfig = {
  transpilePackages: ["@mui/x-charts"],
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;

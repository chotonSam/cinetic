/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "facebook.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "x.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "linkedin.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

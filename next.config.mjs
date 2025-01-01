/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Optimize for static export to improve performance on Netlify
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
  experimental: {
    images: {
      unoptimized: true, // Disable image optimization if needed
    },
  },
};

export default nextConfig;

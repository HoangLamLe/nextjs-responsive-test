/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photo.znews.vn",
        pathname: "/**",
      },
    ],
    deviceSizes: [320, 420, 768, 1024, 1200], // Define breakpoints for responsive images
    imageSizes: [16, 32, 48, 64, 96], // Define custom image sizes for the srcSet attribute
  },
};

export default nextConfig;

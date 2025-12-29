/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Image optimization needs a server, so disable it for static site
  },
};

export default nextConfig;
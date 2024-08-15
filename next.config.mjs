/** @type {import('next').NextConfig} */
const nextConfig = {
    // If your app is in production, set the assetPrefix and trailingSlash options
    assetPrefix: process.env.NODE_ENV === 'production' ? '/promptopia/' : '',
    trailingSlash: true,  // Ensures that Next.js generates paths with trailing slashes
    images: {
      loader: 'imgix',    // Use imgix loader for images
      path: '',           // Leave the path empty to make it relative
    },
  };
  
  export default nextConfig;
  
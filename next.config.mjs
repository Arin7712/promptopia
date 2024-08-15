// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable strict mode for React
  swcMinify: true, // Use the SWC compiler for minifying the output

  // Example of customizing the webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Example: Preventing a module from being bundled for the client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Example: Avoid bundling the 'fs' module for client-side code
      };
    }

    return config;
  },

  // Example of setting environment variables
  env: {
    CUSTOM_VAR: process.env.CUSTOM_VAR || 'default_value', // Example: Custom environment variable
  },

  // Example of custom page extensions
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'], // Add additional page extensions

  // Example of internationalized routing
  i18n: {
    locales: ['en', 'fr'], // Example: Supported locales
    defaultLocale: 'en', // Example: Default locale
  },

  // Example of image optimization settings
  images: {
    domains: ['example.com'], // Allow loading images from specific domains
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Customize responsive image sizes
  },
};

export default nextConfig;

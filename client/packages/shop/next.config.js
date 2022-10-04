const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withBabelMinify = require('next-babel-minify')()
module.exports = withBabelMinify()

// next.js configuration
const nextConfig = {
  // Reference a variable that was defined in the .env file and make it available at Build Time
};

module.exports = withPlugins([withOptimizedImages], nextConfig);

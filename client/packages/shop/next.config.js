const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

// next.js configuration
const nextConfig = {
  // Reference a variable that was defined in the .env file and make it available at Build Time
};
module.exports = {
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return '1.0.0'
  },
}

module.exports = withPlugins([withOptimizedImages], nextConfig);

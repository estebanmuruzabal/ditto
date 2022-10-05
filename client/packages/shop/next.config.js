const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withBabelMinify = require('next-babel-minify')()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (ANALYZE) {
     config.plugins.push(
       new BundleAnalyzerPlugin({
         analyzerMode: 'server',
         analyzerPort: isServer ? 8888 : 8889,
         openAnalyzer: true,
       })
     )
    }
    return config
  },
}
module.exports = withBundleAnalyzer({});
// next.js configuration
const nextConfig = {
  // Reference a variable that was defined in the .env file and make it available at Build Time
};

module.exports = withPlugins([withOptimizedImages], nextConfig);

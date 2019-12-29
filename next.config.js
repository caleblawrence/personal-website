const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const mdxPlugin = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
  options: {
    hastPlugins: [require('mdx-prism')],
  },
})

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
  // image optimization plugin
  [optimizedImages, {
    handleImages: ['png'],
    optimizeImages: true,
    imagesFolder: 'images',
    optimizeImagesInDev: true,
    inlineImageLimit: 8192,
    optipng: {
      optimizationLevel: 3,
    },
  }],
  // mdx plugin
  [mdxPlugin],
  [bundleAnalyzer],
],
  {
    // next config
    target: 'serverless',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
    webpack: (config, { defaultLoaders, isServer, dev }) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
        module: 'empty',
      }

      config.module.rules.push(
        {
          test: /\.css$/,
          use: [
            defaultLoaders.babel,
            {
              loader: require('styled-jsx/webpack').loader,
              options: {
                type: 'global',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
            },
          ],
        }
      )
      return config
    }
  }


);


const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const mdxPlugin = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
  options: {
    hastPlugins: [require('mdx-prism')],
  },
})

module.exports = withPlugins([
  [optimizedImages, {
    optimizeImagesInDev: true
  }],
  [mdxPlugin, {
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
    },

  }

  ]
  // your other plugins here

]);
  
 
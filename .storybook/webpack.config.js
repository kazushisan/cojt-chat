const autoprefixer = require('autoprefixer')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  const isProduction = mode === 'PRODUCTION'

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: !isProduction
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: !isProduction,
          plugins: [
            autoprefixer({
              grid: true
            })
          ]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: !isProduction
        }
      }
    ]
  })

  config.module.rules.push({
    test: /\.pug$/,
    loader: 'pug-plain-loader'
  })

  // Return the altered config
  return config
}

/* eslint-disable */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  productionSourceMap: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer = [
        new UglifyJSPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true
            }
          }
        })
      ]
    }
  }
}

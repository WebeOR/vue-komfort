/* eslint-disable */

const { NODE_ENV } = process.env;

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    if ( NODE_ENV === 'production' ) {
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

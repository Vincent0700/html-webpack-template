const path = require('path');
const { merge } = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const PORT = 8096;

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    hot: true,
    port: PORT,
    quiet: true,
    contentBase: path.join(__dirname, '../dist')
  },
  plugins: [
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`App is running at http://localhost:${PORT}`]
      }
    })
  ]
};

module.exports = merge(baseConfig, config);

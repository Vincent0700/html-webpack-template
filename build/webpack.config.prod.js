const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'production',
  devtool: false
};

module.exports = merge(baseConfig, config);

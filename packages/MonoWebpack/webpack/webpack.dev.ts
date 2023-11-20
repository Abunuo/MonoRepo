/*
 * @Date: 2023-10-17 10:27:35
 * @Description: webpack 5 development configuration
 */
/// <reference types="webpack-dev-server" />

import webpack from 'webpack';

const webpackConfigDev: webpack.Configuration = {
  mode: 'development',
  output: {
    filename: 'static/[name].bundle.js',
  },
  devServer: {
    hot: true,
    client: {
      progress: true,
    },
    // host: '0.0.0.0',
    // open: true,
    historyApiFallback: true,
  },
}
export default webpackConfigDev
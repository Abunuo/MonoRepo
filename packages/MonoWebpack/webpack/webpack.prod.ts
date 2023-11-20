/*
 * @Date: 2023-10-17 10:27:35
 * @Description: webpack 5 production configuration
 */
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { pathResolve } from "./webpack.base";

const webpackConfigProd: webpack.Configuration = {
  mode: 'production',
  output: {
    filename: 'static/[name].[contenthash].bundle.js',
    // publicPath: ""
  },
  plugins: [
    
  ]
}
export default webpackConfigProd
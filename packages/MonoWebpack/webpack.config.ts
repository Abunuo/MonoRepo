/*
 * @Date: 2023-10-17 10:27:35
 * @Description: webpack 5 configuration entry point
 */
import webpack from 'webpack';
import merge from 'webpack-merge';

import webpackConfigBase from "./webpack/webpack.base"
import webpackConfigDev from "./webpack/webpack.dev"
import webpackConfigProd from "./webpack/webpack.prod"

console.log("%cprocess.env.NODE_ENV: %s", "color: green;", process.env.NODE_ENV);

const config: webpack.Configuration = 
  merge(webpackConfigBase, process.env.NODE_ENV === "development" ? webpackConfigDev : webpackConfigProd);

export default config
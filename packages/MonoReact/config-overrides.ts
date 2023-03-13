/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: Monologue
 * @Date: 2023-03-09 10:56:05
 * @LastEditTime: 2023-04-07 01:07:52
 * @LastEditors: Monologue
 * @Description: 覆盖部分 webpack 配置
 */
const { override, fixBabelImports, addWebpackPlugin, addWebpackAlias, useBabelRc, addDecoratorsLegacy, overrideDevServer } = require('customize-cra')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  webpack: override(
    // fixBabelImports('import', {
    //   libraryName: 'antd',
    //   libraryDirectory: 'es',
    //   style: 'css'
    // }),
    // addDecoratorsLegacy(),
    addWebpackAlias({
      // eslint-disable-next-line no-useless-computed-key
      ['@']: path.resolve(__dirname, 'src')
    }),
    addWebpackPlugin(
      new webpack.DefinePlugin({
        // 需要同步在 @types/defined.d.ts 声明
        project_name: JSON.stringify('mono-react')
      })
    )
  ),
  devServer: overrideDevServer(
    // dev server plugin
    // watchAll()
    (config) => {
      return {
        ...config,
        // 服务开启gzip
        compress: true,
        proxy: {}
      }
    }
  )
}

/*
 * @Date: 2023-10-17 10:23:55
 * @Description: webpack 5 base configuration
 */
import webpack, { DefinePlugin } from "webpack";
import path from "path";
import { VueLoaderPlugin } from "vue-loader"
import HtmlWebpackPlugin from "html-webpack-plugin";

export const pathResolve = (pathname: string) => path.resolve(process.cwd(), pathname)

const webpackConfigBase: webpack.Configuration = {
  entry: {
    login: pathResolve("src/login.ts"),
    index: pathResolve("src/index.ts"),
  },
  output: {
    path: pathResolve("dist"),
    clean: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: pathResolve("public/login.html"),
      chunks: ["login"]
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: pathResolve("public/index.html"),
      chunks: ["index"]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   reactivityTransform: true
        // }
      },
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/]
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: ""
            }
          }
        ]
      }
      // {
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   use: [{
      //     loader: 'ts-loader',
      //     options: {
      //       appendTsSuffixTo: [/\.vue$/],
      //     }
      //   }],
      // }
    ],
  },
  resolve: {
    alias: {
      '@': pathResolve("src")
    }
  }
};

export default webpackConfigBase;

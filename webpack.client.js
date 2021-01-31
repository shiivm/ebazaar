const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.commom");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
// const Pages = require('./src/config/Pages.ts');
// console.log("=================PageConfigs",Pages)

const config = {
  entry: {
    'js/app': ["./src/client/App.tsx"],
    'js/home': ["./src/client/pages/Home.tsx","./src/client/index.tsx"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build","public"),
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: ["file-loader"]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader'],
      },
    ],
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new MiniCssExtractPlugin({}),
    new LoadablePlugin()
  ]
};

module.exports = merge(commonConfig, config);

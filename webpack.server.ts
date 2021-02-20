import path from "path";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.commom";
import nodeExternals from "webpack-node-externals";
import Dotenv from "dotenv-webpack";
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  target: "node",
  externals: [nodeExternals()],
  watchOptions: {
    poll: true,
  },
  node: {
    __dirname: false,
  },
  plugins: [new Dotenv({
    path: './.env',
    systemvars: true,
    defaults: false
  })],
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: ["file-loader"],
      },
      {
				test: /\.css$/,
				use: [
					{
						loader: "css-loader/locals"
					}
				]
			},
    ]
  }
};
module.exports = merge(commonConfig, config);

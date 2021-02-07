import path from "path";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.commom";
import nodeExternals from "webpack-node-externals";
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  target: "node",
  externals: [nodeExternals()],
};
module.exports = merge(commonConfig, config);

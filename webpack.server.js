const path = require("path");
const {merge} = require('webpack-merge');
const commonConfig = require("./webpack.commom");
const nodeExternals = require('webpack-node-externals');

const config = {
  entry: "./src/index.ts",
  output: {
    filename:"bundle.js",
    path:path.resolve(__dirname,'build')
  },
  target: "node",
  externals: [nodeExternals()],
};
module.exports = merge(commonConfig, config);

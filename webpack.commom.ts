import webpack from "webpack";

const mode = process.env.NODE_ENV || "development";
const config: webpack.Configuration = {
  mode: mode == "production" ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    fallback: {
      path: false,
      fs: false,
      process: false,
    },
  },
};

if (mode != "production") config["devtool"] = "eval-cheap-source-map";

export default config;

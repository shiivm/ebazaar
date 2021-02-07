import path from "path";
import fs from "fs";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.commom";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import LoadablePlugin from "@loadable/webpack-plugin";
import webpack from "webpack";
import Pages from "./src/config/Pages";
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const jsList: { [key: string]: string[] } = {};
const cssList: { [key: string]: string[] } = {};
const rootDir = path.resolve(__dirname, "src");
for (let i in Pages) {
  const page = Pages[i];
  const fileName = page.type;
  const lazyFileName = `${fileName}-lazy`;
  const pageConfigFile = path.resolve(
    rootDir,
    "config",
    "page-config",
    `${fileName}.tsx`
  );

  typeof jsList[lazyFileName] == "undefined" && (jsList[lazyFileName] = []);
  typeof jsList[fileName] == "undefined" && (jsList[fileName] = []);
  typeof cssList[fileName] == "undefined" && (cssList[fileName] = []);

  if (pageConfigFile && fs.existsSync(pageConfigFile)) {
    jsList[fileName].push(pageConfigFile);
  }

  if (Array.isArray(page.cssList)) {
    page.cssList.forEach(function (cssPath) {
      console.log("cssPath", cssPath);
      cssList[fileName].push(rootDir + "/" + cssPath);
    });
  }
  if (Array.isArray(page.cssLazyList)) {
    typeof cssList[lazyFileName] == "undefined" && (cssList[lazyFileName] = []);
    page.cssLazyList.forEach(function (cssPath) {
      console.log("cssLazyList", cssPath);
      cssList[lazyFileName].push(rootDir + "/" + cssPath);
    });
  }
  let filePath = path.resolve(
    rootDir,
    "client",
    "page-libs",
    `${fileName}.tsx`
  );
  if (fs.existsSync(filePath)) {
    jsList[fileName].push(filePath);
  }
  /* if (Array.isArray(page.hydrationComponets)) {
		for (var j in page.hydrationComponets) {
			let component = page.hydrationComponets[j];
			if(component.isLazyLoad) {
				jsList[lazyJsName].push(rootDir + component.path);
			} else {
				jsList[fileName].push(rootDir + component.path);
			}
		}
	} */
  jsList[fileName].push(`${rootDir}/client/index.tsx`);
  jsList[fileName] = Array.from(new Set(jsList[fileName])); // unique
  jsList[lazyFileName] = Array.from(new Set(jsList[lazyFileName])); // unique
  cssList[fileName] = Array.from(new Set(cssList[fileName])); // unique
  if (
    Array.isArray(cssList[lazyFileName]) &&
    cssList[lazyFileName].length > 0
  ) {
    cssList[lazyFileName] = Array.from(new Set(cssList[lazyFileName])); // unique
  }
}
const entry: { [key: string]: string[] } = {};

Object.keys(cssList).forEach(function (pageType) {
  if (cssList[pageType].length) entry["css/" + pageType] = cssList[pageType];
});

Object.keys(jsList).forEach(function (pageType) {
  if (jsList[pageType].length) entry[`js/${pageType}.js`] = jsList[pageType];
});

console.log("entry", entry);

const config: webpack.Configuration = {
  entry: entry,
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "build", "public"),
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: ["file-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "js/vendors.js",
          chunks: "all",
        },
      },
    },
    minimize: true,
  },
  plugins: [
    new MiniCssExtractPlugin({}),
    new LoadablePlugin({}),
    // new BundleAnalyzerPlugin()
  ],
};

module.exports = merge(commonConfig, config);

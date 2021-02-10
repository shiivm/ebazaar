import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import path from "path";
import { renderRoutes } from "react-router-config";
import { ChunkExtractor } from "@loadable/server";

import Routes from "../client/Routes";
import serialize from "serialize-javascript";
import config from "../config/config";


const renderer = (reqPath: string, context: {[key:string]:string|number}) => {
  const statsFile = path.resolve(__dirname, "public", "loadable-stats.json");
  const extractor = new ChunkExtractor({ statsFile });
  const FILE_VERSION = context.FILE_VERSION;
  const pageType = context.pageType;

  const jsx = extractor.collectChunks(
    <StaticRouter location={reqPath} context={context}>
      {renderRoutes(Routes)}
    </StaticRouter>
  );
  const content = renderToString(jsx);
  const jsFile = path.resolve("/js", `${pageType}.${FILE_VERSION}.js`);
  const cssFile = path.resolve("/css", `${pageType}.${FILE_VERSION}.css`);

  const vendorJs = path.resolve("/js", `vendors.${FILE_VERSION}.js`);
  const headerCss = path.resolve("/css",`header.${FILE_VERSION}.css`);
  const ebazaarCss = path.resolve("/css",`ebazaar.${FILE_VERSION}.css`);
  // const fontAwesome = path.resolve("/css", `font-awesome.${FILE_VERSION}.css`);
  // const favicon = path.resolve("/images", "favicon.ico");

  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
      <meta name="theme-color" content="#000000" />
      <meta name="Description" content="E-Commerce Application">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
      <link rel="stylesheet" href="${headerCss}">
      <link rel="stylesheet" href="${ebazaarCss}">
      <link rel="stylesheet" href="${cssFile}">
      <title>Ebazaar</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${content}</div>
      <script defer src="${vendorJs}"></script>
      <script defer src="${jsFile}"></script>
      <script>
      window.PAGE_TYPE="${pageType}";
      window.FILE_VERSION="${FILE_VERSION}";
      window.Config=${serialize({ ...config})}
      </script>
    </body>
  </html>`;
  return html;
};

export default renderer;

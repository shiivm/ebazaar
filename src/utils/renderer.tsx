import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import path from "path";
import { renderRoutes } from "react-router-config";
import { ChunkExtractor } from "@loadable/server";

import Routes from "../client/Routes";

const renderer = (reqPath: string, context: object) => {
  const statsFile = path.resolve(__dirname, "public", "loadable-stats.json");
  const extractor = new ChunkExtractor({ statsFile });

  const jsx = extractor.collectChunks(
    <StaticRouter location={reqPath} context={context}>
      {renderRoutes(Routes)}
    </StaticRouter>
  );
  const content = renderToString(jsx);
  const jsFile = path.resolve("/js", "home.js");
  // const favicon = path.resolve("/images", "favicon.ico");

  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="Description" content="E-Commerce Application">
      <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"> 
      <title>Ebazaar</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${content}</div>
      <script defer src="${jsFile}"></script>
    </body>
  </html>`;
  return html;
};

export default renderer;

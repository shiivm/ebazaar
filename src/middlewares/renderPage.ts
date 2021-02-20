import { Request, Response } from "express";
import renderer from "../utils/renderer";
import { matchRoutes } from "react-router-config";
import Routes from "../client/Routes";

const renderPage = (req: Request, res: Response):void => {
  const reqPath = req.path;
  const FILE_VERSION = 1234567;
  // const promises:Promise[] = [];
  let pageType = "";
  matchRoutes(Routes, reqPath).map(({ route, match }) => {
    /* promises.push(
      new Promise((resolve, reject) => {
        resolve(true);
      })
    ); */
    pageType = route.pageType;
  });
  // Promise.all(promises).then(() => {
  // });
  const context = {
    FILE_VERSION,
    pageType: pageType,
  };
  res.setHeader("Content-Type", "text/html");
  res.send(renderer(reqPath, context));
};

export default renderPage;

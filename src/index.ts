import express from "express";
import path from "path";
import compression from "compression";

import errorHandler from "./middlewares/errorHandler";
import renderPage from "./middlewares/renderPage";

const app = express();

app.use(function (req, res, next) {
  const jsPattern = /\.[0-9a-zA-Z]{5,25}\.js$/;
  const cssPattern = /\.[0-9a-z]{5,25}\.css$/;
  if (jsPattern.test(req.url)) {
    req.url = req.url.replace(jsPattern, ".js");
    if (process.env.NODE_ENV == "production") {
      res.set("Cache-Control", `public, max-age=${31557600}`);
    }
  } else if (cssPattern.test(req.url)) {
    req.url = req.url.replace(cssPattern, ".css");
    if (process.env.NODE_ENV == "production") {
      res.set("Cache-Control", `public, max-age=${31557600}`);
      res.set(
        "Expires",
        `${new Date(Date.now() + parseInt("31557600") * 1000)}`
      );
    }
  }
  next();
});
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));
app.use('/static',express.static(path.resolve(__dirname, "public")));

app.get("/*", renderPage);
app.use(errorHandler);

process.on("uncaughtException", (err) => {
  console.log("Process uncaughtException", err);
  errorHandler;
});
process.on("unhandledRejection", (reason, p) => {
  console.log("Process unhandledRejection reason", reason);
  console.log("Process unhandledRejection p", p);
  errorHandler;
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

import express, { Application } from "express";
import routes from "./routes";

export const initializeApp = () => {
  const app: Application = express();
  // support parsing of application/json type post data and limit payload
  app.use(express.json({ limit: "300kb" }));
  //support parsing of application/x-www-form-urlencoded post data
  app.use(express.urlencoded({ extended: true }));
  // set up the global routing in express
  app.use(routes);

  return app;
};

export default initializeApp;

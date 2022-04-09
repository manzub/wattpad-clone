const compression = require("compression");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const customLogger = require("./utils/customLogger");


module.exports = function expressApp(functionName) {
  const app = express();
  const router = express.Router();

  // gzip responses
  router.use(compression());

  // Set router base path for production & dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`


  router.get('/init', (req, res) => {
    res.send('welcome');
  })

  // default page not found route
  app.use("*", (req, res) => {
    res.status(404).json({
      status: 0,
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "You reached a route that is not defined on this server",
      },
    });
  });

  // TODO: use connectMongo.then for anyroutes

  // Attach logger
  app.use(morgan(customLogger))
  // Setup routes
  app.use(routerBasePath, router)
  // Apply express middlewares
  router.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'))

  return app;
}
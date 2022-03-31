import compression from "compression";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import customLogger from "./utils/customLogger";

export default function expressApp(functionName) {
  const app = express();
  const router = express.Router();

  // gzip responses
  router.use(compression());

  // Set router base path for production & dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`


  router.get('/init', (req, res) => {
    res.send('welcome');
  })

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
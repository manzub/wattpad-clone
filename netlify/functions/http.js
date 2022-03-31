import ServerlessHttp from "serverless-http";
import expressApp from "./app";

const functionName = 'http';

const app = expressApp(functionName);

exports.handler = ServerlessHttp(app);
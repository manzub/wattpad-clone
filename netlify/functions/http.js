const ServerlessHttp = require("serverless-http");
const expressApp = require("./app");

const functionName = 'http';

const app = expressApp(functionName);

exports.handler = ServerlessHttp(app);
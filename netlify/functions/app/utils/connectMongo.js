require("dotenv").config();
const { dbConfig } = require("../config/db.config");
const db = require("../models");
let isConnected;

module.exports = function connectMongo() {
  if(isConnected) return Promise.resolve();

  // check for process error on webpack 5
  return db.mongoose.connect(`mongodb+srv://${dbConfig.USER}:${process.env.CONNECTION_PASSKY}@${dbConfig.HOST}/${dbConfig.DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(conn => {
    isConnected = conn.connections[0].readyState;
  })
}
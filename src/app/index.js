const express = require("express");
const cors = require("cors");
const helmate = require("helmet");
const morgan = require("morgan");
const { APP_CONFIG } = require("../config");
const { DatabaseConnection } = require("../infra/mongoose");
const { API_ROUTER } = require("./router");

class ExpressApp {
  constructor() {
    this._app = express();
  }

  async start() {
    // Database connection

    await DatabaseConnection.connect();

    // PreMiddleWares

    this._app.use(morgan(APP_CONFIG.LOGGER_TYPE));
    this._app.use(cors());
    this._app.use(helmate());
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: false }));

    // Routes

    this._app.use(API_ROUTER);

    // App is listining at port

    this._app.listen(APP_CONFIG.PORT, () => {
      console.log(`App is listining at port ${APP_CONFIG.PORT}`);
    });
  }
}

module.exports = ExpressApp;

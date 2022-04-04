// express app

// load envs
require("dotenv").config();

const ExpressApp = require("./app");
const app = new ExpressApp();
app.start();

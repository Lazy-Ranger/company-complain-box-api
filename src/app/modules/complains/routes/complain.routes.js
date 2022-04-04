const { Router } = require("express");
const { COMPLAIN_CONTROLLER } = require("../controller/complain.controller");

const COMPLAIN_ROUTES = Router();
COMPLAIN_ROUTES.get("/list", COMPLAIN_CONTROLLER.getComplain);
COMPLAIN_ROUTES.post("/create", COMPLAIN_CONTROLLER.createComplain);

module.exports = { COMPLAIN_ROUTES };

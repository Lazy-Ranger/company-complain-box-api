const { Router } = require("express");
const { COMMON_CONTROLLER } = require("../controller/common.controller");

const COMMON_ROUTES = Router();

COMMON_ROUTES.get("/get_company_type", COMMON_CONTROLLER.getCompanyType);

module.exports = { COMMON_ROUTES };

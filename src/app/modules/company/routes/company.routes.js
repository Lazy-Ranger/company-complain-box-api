const { Router } = require("express");
const { COMPANY_CONTROLLER } = require("../controller/company.controller");

const COMPANY_ROUTES = Router();
COMPANY_ROUTES.get("/list", COMPANY_CONTROLLER.getCompany);
COMPANY_ROUTES.post("/create", COMPANY_CONTROLLER.companyCreate);

module.exports = { COMPANY_ROUTES };

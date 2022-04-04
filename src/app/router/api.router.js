const { Router } = require("express");
const { COMMON_ROUTES } = require("../modules/common");
const { COMPANY_ROUTES } = require("../modules/company");
const { EMPLOYEE_ROUTER } = require("../modules/employee");
const { JOBS_ROUTER } = require("../modules/jobs");
const { COMPLAIN_ROUTES } = require("../modules/complains");

const API_ROUTER = Router();
// common_type routes

API_ROUTER.use("/common", COMMON_ROUTES);

// CompanyRoutes

API_ROUTER.use("/company", COMPANY_ROUTES);

// Employee Routes

API_ROUTER.use("/employee", EMPLOYEE_ROUTER);

// Jobs

API_ROUTER.use("/job", JOBS_ROUTER);

// Complain

API_ROUTER.use("/complain", COMPLAIN_ROUTES);

module.exports = { API_ROUTER };

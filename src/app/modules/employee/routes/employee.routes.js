const { Router } = require("express");
const { EMPLOYEE_CONTROLLER } = require("../controller/employee.controller");

const EMPLOYEE_ROUTER = Router();
EMPLOYEE_ROUTER.get("/list", EMPLOYEE_CONTROLLER.getEmployee);
EMPLOYEE_ROUTER.post("/create", EMPLOYEE_CONTROLLER.createEmployee);

module.exports = { EMPLOYEE_ROUTER };

const { Router } = require("express");
const { JOBS_CONTROLLER } = require("../controller/job.controller");

const JOBS_ROUTER = Router();
JOBS_ROUTER.get("/list", JOBS_CONTROLLER.getJob);
JOBS_ROUTER.post("/create", JOBS_CONTROLLER.jobCreate);

module.exports = { JOBS_ROUTER };

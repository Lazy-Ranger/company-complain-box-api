const { httpException, httpOK } = require("../../../../core/http");
const { JOB_CREATE_SERVICE, JOB_QUERY_SERVICES } = require("../services");

class JobsController {
  constructor() {
    this.jobCreateService = JOB_CREATE_SERVICE;
    this.jobQueryService = JOB_QUERY_SERVICES;
  }

  getJob = async (req, res) => {
    try {
      const jobsData = await this.jobQueryService.getJobs();
      httpOK(res, jobsData);
    } catch (err) {
      httpException(res, err, `[JobController]:Jobs not found`);
    }
  };

  jobCreate = async (req, res) => {
    try {
      const job = await this.jobCreateService.createJob(req.body);
      httpOK(res, job);
    } catch (err) {
      httpException(res, err, `[JobController]:Job not created`);
    }
  };
}

const JOBS_CONTROLLER = new JobsController();

module.exports = {
  JOBS_CONTROLLER,
};

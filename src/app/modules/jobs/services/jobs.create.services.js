const { JOB_MODEL } = require("../../../models");

class JobCreateService {
  constructor() {
    this.jobModel = JOB_MODEL;
  }
  async createJob(body) {
    return await this.jobModel.create(body);
  }
}

const JOB_CREATE_SERVICE = new JobCreateService();

module.exports = {
  JOB_CREATE_SERVICE,
};

const { JOB_MODEL } = require("../../../models");

class JobsQuerySerices {
  constructor() {
    this.jobModel = JOB_MODEL;
  }

  async getJobs() {
    return await this.jobModel
      .find()
      .populate({ path: "companyId" })
      .lean({ virtuals: true });
  }
}

const JOB_QUERY_SERVICES = new JobsQuerySerices();

module.exports = {
  JOB_QUERY_SERVICES,
};

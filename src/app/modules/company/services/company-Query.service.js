const { COMPANY_MODEL } = require("../../../models");

class CompanyQueryService {
  constructor() {
    this.companyModel = COMPANY_MODEL;
  }

  async getCompany(queryModel) {
    const companyData = await this.companyModel
      .find()
      .populate({ path: "companyType" })
      .lean({ virtuals: true });

    return companyData;
  }
}

const COMPANY_QUERY_SERVICES = new CompanyQueryService();

module.exports = { COMPANY_QUERY_SERVICES };

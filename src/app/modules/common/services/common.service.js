const {
  BadRequestException,
  NotFoundException,
} = require("../../../../core/http");
const { COMPANY_TYPE_MODEL } = require("../../../models");

class CommonService {
  constructor() {
    this.companyType = COMPANY_TYPE_MODEL;
  }

  async getCompanyTypes() {
    const companyTypeData = await this.companyType
      .find()
      .lean({ virtual: true });
    if (!companyTypeData) {
      throw new NotFoundException("user not found");
    }
    return companyTypeData;
  }
}

const COMMON_SERVICE = new CommonService();

module.exports = {
  COMMON_SERVICE,
};

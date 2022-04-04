const { COMPANY_MODEL } = require("../../../models");
const { NotFoundException } = require("../../../../core/http");

class CompanyCreateService {
  constructor() {
    this.companyModel = COMPANY_MODEL;
  }

  async removeVendor(vendorId) {
    const isUserDelete = await this.companyModel.findOneAndDelete({
      _id: vendorId,
    });
    if (!isUserDelete) {
      throw new NotFoundException("User not found");
    }
  }

  async createCompany(companyModelData) {
    return await this.companyModel.create(companyModelData);
  }
}

const COMPANY_CREATE_SERVICE = new CompanyCreateService();

module.exports = {
  COMPANY_CREATE_SERVICE,
};

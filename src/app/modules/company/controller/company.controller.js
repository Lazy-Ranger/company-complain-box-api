const { httpOK, httpException } = require("../../../../core/http");
const {
  COMPANY_CREATE_SERVICE,
  COMPANY_QUERY_SERVICES,
} = require("../services");

class CompanyController {
  constructor() {
    this.companyCreateService = COMPANY_CREATE_SERVICE;
    this.companyQueryService = COMPANY_QUERY_SERVICES;
  }

  deleteVendors = async (req, res) => {
    try {
      const deletedData = await this.companyCreateService.removeVendor();
      httpOK(res, deletedData);
    } catch (err) {
      httpException(res, err, `[CompanyController]:delete vendors`);
    }
  };

  getCompany = async (req, res) => {
    try {
      const companyData = await this.companyQueryService.getCompany();
      httpOK(res, companyData);
    } catch (err) {
      httpException(res, err, `[CompanyController]:Cannot get company data`);
    }
  };

  // company create
  companyCreate = async (req, res) => {
    try {
      const companyCreateModelData =
        await this.companyCreateService.createCompany(req.body);
      httpOK(res, companyCreateModelData);
    } catch (err) {
      httpException(res, err, `[CompanyController]: company not created`);
    }
  };
}

const COMPANY_CONTROLLER = new CompanyController();

module.exports = { COMPANY_CONTROLLER };

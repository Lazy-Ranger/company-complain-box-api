const { httpOK, httpException } = require("../../../../core/http");
const { COMMON_SERVICE } = require("../services");

class CommonController {
  constructor() {
    this.commonService = COMMON_SERVICE;
  }

  getCompanyType = async (req, res) => {
    try {
      const companyTypeData = await this.commonService.getCompanyTypes();
      httpOK(res, companyTypeData);
    } catch (err) {
      httpException(res, err, "[AuthController:] cannot create user account");
    }
  };
}

const COMMON_CONTROLLER = new CommonController();

module.exports = {
  COMMON_CONTROLLER,
};

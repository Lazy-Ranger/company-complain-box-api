const { httpOK, httpException } = require("../../../../core/http");
const {
  CREATE_COMPLAIN_SERVICE,
  COMPLAIN_QUERY_SERVICE,
} = require("../services");

class ComplainController {
  constructor() {
    this.createComplainServive = CREATE_COMPLAIN_SERVICE;
    this.complainQueryService = COMPLAIN_QUERY_SERVICE;
  }

  getComplain = async (req, res) => {
    try {
      const complains = await this.complainQueryService.getComplain();
      httpOK(res, complains);
    } catch (err) {
      httpException(res, err, `[ComplainController]:Complain not found`);
    }
  };

  createComplain = async (req, res) => {
    try {
      const data = await this.createComplainServive.createComplain(req.body);
      httpOK(res, data);
    } catch (err) {
      httpException(res, err, `[ComplainController]:'Complain not raished'`);
    }
  };
}

const COMPLAIN_CONTROLLER = new ComplainController();

module.exports = {
  COMPLAIN_CONTROLLER,
};

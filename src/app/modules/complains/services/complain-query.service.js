const { BadRequestException } = require("../../../../core/http");
const { COMPLAIN_MODEL } = require("../../../models");

class ComplainQueryService {
  constructor() {
    this.complainModel = COMPLAIN_MODEL;
  }

  async getComplain(body) {
    const data = await this.complainModel.find(body);
    return data;
  }
}

const COMPLAIN_QUERY_SERVICE = new ComplainQueryService();

module.exports = {
  COMPLAIN_QUERY_SERVICE,
};

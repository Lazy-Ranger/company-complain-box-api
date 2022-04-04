const { BadRequestException } = require("../../../../core/http");
const { COMPLAIN_MODEL } = require("../../../models");

class ComplainCreateService {
  constructor() {
    this.complainModel = COMPLAIN_MODEL;
  }

  async createComplain(complainModel) {
    const data = await this.complainModel.create(complainModel);
    return data;
  }
}

const CREATE_COMPLAIN_SERVICE = new ComplainCreateService();

module.exports = {
  CREATE_COMPLAIN_SERVICE,
};

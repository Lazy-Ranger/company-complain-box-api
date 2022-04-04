const { EMPLOYEE_MODEL } = require("../../../models");

class EmployeeQueryService {
  constructor() {
    this.employeeModel = EMPLOYEE_MODEL;
  }

  async getEmployees() {
    return await this.employeeModel
      .find()
      .populate({ path: "companyId" })
      .lean({ virtuals: true });
  }
}

module.exports = { EmployeeQueryService };

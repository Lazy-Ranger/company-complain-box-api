const { EMPLOYEE_MODEL } = require("../../../models");

class EmployeeCreateService {
  constructor() {
    this.employeeModel = EMPLOYEE_MODEL;
  }

  async createEmployeService(data) {
    const employee = this.employeeModel.create(data);
    return employee;
  }
}

module.exports = { EmployeeCreateService };

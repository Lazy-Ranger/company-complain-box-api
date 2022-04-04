const { httpException, httpOK } = require("../../../../core/http");
const { EmployeeCreateService, EmployeeQueryService } = require("../services");

class EmployeeController {
  constructor() {
    this.employeCreateSerice = new EmployeeCreateService();
    this.employeeQueryService = new EmployeeQueryService();
  }

  getEmployee = async (req, res) => {
    try {
      const employeeData = await this.employeeQueryService.getEmployees();
      httpOK(res, employeeData);
    } catch (err) {
      httpException(res, err, `[EmployeeController]: cannot get employee`);
    }
  };

  createEmployee = async (req, res) => {
    try {
      const employee = await this.employeCreateSerice.createEmployeService(
        req.body
      );
      httpOK(res, employee);
    } catch (err) {
      httpException(res, err, `[CreateEmployee]: cannot created employee`);
    }
  };
}

const EMPLOYEE_CONTROLLER = new EmployeeController();

module.exports = { EMPLOYEE_CONTROLLER };

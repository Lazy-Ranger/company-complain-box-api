const { Schema, model } = require("mongoose");

const EMPLOYEE_SCHEMA_FIELD = {
  employeeName: {
    type: String,
    default: null,
    required: true,
  },
  employeeDisplayId: {
    type: String,
    default: null,
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "company",
    default: null,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: null,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: String,
    default: null,
  },
};

const EMPLOYEE_SCHEMA = new Schema(EMPLOYEE_SCHEMA_FIELD);

// hooks

EMPLOYEE_SCHEMA.pre("save", function () {
  this.isActive = true;
  this.employeeDisplayId = new Date();
  this.createAt = new Date();
  this.updatedAt = new Date();
});

EMPLOYEE_SCHEMA.pre("update", function () {
  this.updatedAt = new Date();
});

const EMPLOYEE_COLLECTION = "employee";

const EMPLOYEE_MODEL = model(EMPLOYEE_COLLECTION, EMPLOYEE_SCHEMA);

module.exports = {
  EMPLOYEE_COLLECTION,
  EMPLOYEE_MODEL,
};

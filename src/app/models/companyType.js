const { Schema, model } = require("mongoose");

const COMPANY_TYPES_SCHEMA_FIELD = {
  companyType: {
    type: String,
    enum: ["ADMIN", "VENDOR"],
  },
  companyLevel: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: null,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  updateAt: {
    default: null,
    type: Date,
    required: true,
  },
};

const COMPANY_SCHEMA = new Schema(COMPANY_TYPES_SCHEMA_FIELD);

const COMPANY_COLLECTION = "CompanyType";

const COMPANY_TYPE_MODEL = model(COMPANY_COLLECTION, COMPANY_SCHEMA);

module.exports = {
  COMPANY_TYPE_MODEL,
  COMPANY_COLLECTION,
};

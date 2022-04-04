const { Schema, model } = require("mongoose");

const COMPANY_SCHEMA_FIELD = {
  companyName: {
    type: String,
    default: null,
    required: true,
  },
  companyType: {
    type: Schema.Types.ObjectId,
    default: null,
    ref: "CompanyType",
    required: true,
  },
  isActive: {
    type: Boolean,
    default: null,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    default: null,
    type: Date,
  },
};

const COMPANY_SCHEMA = new Schema(COMPANY_SCHEMA_FIELD);

// hooks

COMPANY_SCHEMA.pre("save", function () {
  this.isActive = true;
  this.createdAt = Date.now();
  this.updatedAt = Date.now();
});

COMPANY_SCHEMA.pre("update", function () {
  this.updatedAt = new Date.now().toISOString();
});

const COMPANY_COLLECTION = "company";

const COMPANY_MODEL = new model(COMPANY_COLLECTION, COMPANY_SCHEMA);

module.exports = { COMPANY_MODEL, COMPANY_COLLECTION };

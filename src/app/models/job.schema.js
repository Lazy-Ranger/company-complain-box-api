const { Schema, model } = require("mongoose");

const JOB_SCHEMA_FIELD = {
  JobName: {
    type: String,
    default: null,
    required: true,
  },
  companyId: {
    type: Schema.Types.ObjectId,
    default: null,
    ref: "company",
    required: true,
  },
  isActive: {
    type: String,
    default: null,
  },
  createAt: {
    type: String,
    default: Date.now(),
  },
  updateAt: {
    default: null,
    type: Date,
  },
};

const JOB_SCHEMA = new Schema(JOB_SCHEMA_FIELD);

// hooks

JOB_SCHEMA.pre("save", function () {
  this.isActive = true;
  this.createAt = new Date();
  this.updateAt = new Date();
});

JOB_SCHEMA.pre("update", function () {
  this.updateAt = new Date();
});

const JOB_COLLECTION = "job";

const JOB_MODEL = new model(JOB_COLLECTION, JOB_SCHEMA);

module.exports = {
  JOB_COLLECTION,
  JOB_MODEL,
};

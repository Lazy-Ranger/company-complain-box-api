const { Schema, model } = require("mongoose");

const COMPLAIN_SCHEMA_FIELD = {
  complainDisplayId: {
    type: String,
    default: null,
  },
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "Job",
  },
  complainCreatedById: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  }, // Employee id
  specialRemark: {
    type: String,
  },
  complainStatus: {
    type: String,
    enum: ["OPEN", "CLOSED"],
    default: "OPEN",
  },
  handleBy: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  isReopended: {
    type: Boolean,
  },
  isActive: {
    type: Boolean,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    default: null,
    type: Date,
  },
};

// schema
const COMPLAIN_SCHEMA = new Schema(COMPLAIN_SCHEMA_FIELD);

// hooks

COMPLAIN_SCHEMA.pre("save", function () {
  this.complainStatus = "OPEN";
  this.isActive = true;
  this.handleBy = null;
  this.createdAt = new Date();
  this.updateAt = new Date();
});

COMPLAIN_SCHEMA.pre("update", function () {
  this.updateAt = new Date();
});

const COMPLAIN_COLLECTION = "complain";

// model
const COMPLAIN_MODEL = model(COMPLAIN_COLLECTION, COMPLAIN_SCHEMA);

module.exports = { COMPLAIN_COLLECTION, COMPLAIN_MODEL };

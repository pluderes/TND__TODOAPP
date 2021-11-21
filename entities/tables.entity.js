"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tables = new Schema({
  workspace_ID: {
    _id: false,
    type: Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
  table_name: {
    type: String,
    required: true,
  },
  star: {
    type: Boolean,
    required: true,
  },
});

const Tables = mongoose.model("Tables", tables);

module.exports = Tables;

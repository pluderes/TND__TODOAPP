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
  users_in_table: [
    {
      _id: false,
      user_ID: { type: Schema.Types.ObjectId, ref: "Users" },
      user_permission: { type: String, required: true },
    },
  ],
  column_IDs: [
    {
      _id: false,
      column_ID: { type: Schema.Types.ObjectId, ref: "Columns" },
    },
  ],
});

const Tables = mongoose.model("Tables", tables);

module.exports = Tables;

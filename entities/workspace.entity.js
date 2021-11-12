"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = require("./users.entity");

const workspace = new Schema({
  workspace_name: {
    type: String,
    required: true,
  },
  description: { type: String },
  tables_in_ws: [
    {
      _id: false,
      table_ID: { type: Schema.Types.ObjectId, ref: "Table", unique: true },
    },
  ],
  users_in_ws: [
    {
      _id: false,
      user_ID: { type: Schema.Types.ObjectId, ref: "Users", unique: true },
      user_permission: { type: String, required: true },
    },
  ],
});

// users.index({email: 2}, {unique: true})

const Workspace = mongoose.model("Workspace", workspace);

module.exports = Workspace;

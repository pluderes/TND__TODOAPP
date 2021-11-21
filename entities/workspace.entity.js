"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workspace = new Schema({
  workspace_name: {
    type: String,
    required: true,
  },
  description: { type: String },
  users_in_ws: [
    {
      _id: false,
      user_ID: { type: Schema.Types.ObjectId, ref: "Users", unique: true },
      user_permission: { type: String, required: true },
    },
  ],
});

const Workspace = mongoose.model("Workspace", workspace);

module.exports = Workspace;

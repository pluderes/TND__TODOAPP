"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workspace = require("./workspace.entity");

const users = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  workspace_IDs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workspace",
    },
  ],
});

const Users = mongoose.model("Users", users);

module.exports = Users;

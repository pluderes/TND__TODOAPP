"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  user_ID: {
      type: String,
  },
  username: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    unique: true,
    // required: true
  },
  password: {
    type: String,
  },
  tables_ID: {
    type: Array,
  },
  workspace_ID: {
    type: Array,
  },
});

// users.index({email: 2}, {unique: true})

const Users = mongoose.model("Users", users);

module.exports = Users;

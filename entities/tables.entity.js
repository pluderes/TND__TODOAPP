"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tables = new Schema({
  table_name: {
    type: String,
    required: true,
    unique: true,
  },
  star: {
    type: Boolean,
    required: true,
  },
  table_column_IDs: {
    type: Array,
  },
});

// users.index({email: 2}, {unique: true})

const Tables = mongoose.model("Tables", tables);

module.exports = Tables;

"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const columns = new Schema({
  table_ID: {
    _id: false,
    type: Schema.Types.ObjectId,
    ref: "Tables",
  },
  column_name: {
    type: String,
    required: true,
  },
});

const Columns = mongoose.model("Columns", columns);

module.exports = Columns;

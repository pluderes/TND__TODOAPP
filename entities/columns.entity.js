"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const columns = new Schema({
  column_name: {
    type: String,
    required: true,
  },
  card_IDs: {
    type: Array,
  },
});

const Columns = mongoose.model("Columns", columns);

module.exports = Columns;

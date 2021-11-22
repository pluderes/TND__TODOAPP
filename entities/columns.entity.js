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
  card_IDs: [
    {
      _id: false,
      card_ID: { type: Schema.Types.ObjectId, ref: "Cards" },
    },
  ],
});

const Columns = mongoose.model("Columns", columns);

module.exports = Columns;

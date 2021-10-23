"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const card_taskList = new Schema({
  card_ID: {
    type: String,
    required: true,
  },
  taskList_name: {
    type: String,
    required: true,
  },
  subTask_IDs: {
    type: Array,
  },
  taskList_status: {
    type: Boolean,
    required: true,
  },
});

const Card_taskList = mongoose.model("Card_taskList", card_taskList);

module.exports = Card_taskList;

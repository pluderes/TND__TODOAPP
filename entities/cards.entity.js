"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cards = new Schema({
  card_name: {
    type: String,
    required: true,
  },
  card_desc: {
    type: String,
  },
  user_in_task_IDs: {
    type: Array,
    required: true,
  },
  card_deadline: {
    createAt: { type: Date, required: true },
    deadline: { type: Date, required: true },
    status: { type: String, required: true },
  },
  activity_IDs: {
    type: Array,
  },
  taskList_IDs: {
    type: Array,
  },
  comment_IDs: {
    type: Array,
  },
});

const Cards = mongoose.model("Cards", cards);

module.exports = Cards;

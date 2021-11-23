"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const card_taskList = new Schema({
  card_ID: {
    _id: false,
    type: Schema.Types.ObjectId,
    ref: "Cards",
    required: true,
  },
  taskList_name: {
    type: String,
    required: true,
  },
  subTask_IDs: [
    {
      _id: false,
      subTask_ID: {
        type: Schema.Types.ObjectId,
        ref: "TaskList_subTasks",
      },
    },
  ],
});

const Card_taskList = mongoose.model("Card_taskList", card_taskList);

module.exports = Card_taskList;

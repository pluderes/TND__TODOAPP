"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskList_subtasks = new Schema({
  taskList_ID: {
    _id: false,
    type: Schema.Types.ObjectId,
    ref: "Card_taskList",
    required: true,
  },
  subtask_name: {
    type: String,
    required: true,
  },
  subtask_status: {
    type: Boolean,
    required: true,
  },
});

const TaskList_subtasks = mongoose.model(
  "TaskList_subtasks",
  taskList_subtasks
);

module.exports = TaskList_subtasks;

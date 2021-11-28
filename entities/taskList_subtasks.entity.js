"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskList_subtasks = new Schema({
  taskList_ID: {
    _id: false,
    type: Schema.Types.ObjectId,
    ref: "Card_taskLists",
    required: true,
  },
  subtask_info: {
    users: [{ _id: false, type: Schema.Types.ObjectId, ref: "Users" }],
    content: {
      type: String,
      required: true,
    },
  },
  subtask_checked: {
    type: Boolean,
    required: true,
  },
});

const TaskList_subTasks = mongoose.model(
  "TaskList_subTasks",
  taskList_subtasks
);

module.exports = TaskList_subTasks;

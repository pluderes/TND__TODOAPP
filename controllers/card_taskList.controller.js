const modelTaskList = require("../models/Card_taskList");
const errorMessage = require("../config").errorMessage;

const createTaskList = async (newTaskList) => {
  try {
    let result = await modelTaskList.createTaskList(newTaskList);
    if (!result)
      res.status(402).json(errorMessage(["err create taskList --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err create taskList --controller", err]));
  }
};

const getAllTaskList = async ({ name }) => {
  try {
    let result = await modelTaskList.getAllTaskList({ name });
    if (!result)
      res.status(402).json(errorMessage(["err get taskList --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err get taskList --controller", err]));
  }
};

const getTaskListByCardID = async ({ cardID }) => {
  try {
    let result = await modelTaskList.getTaskListByCardID({
      cardID,
    });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err get taskList by cardID  --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err get taskList by cardID  --controller", err]));
  }
};

//   update taskList
const editTaskList = async ({ taskListID, data }) => {
  try {
    let result = await modelTaskList.editTaskList({
      taskListID,
      data,
    });
    if (!result)
      res.status(402).json(errorMessage(["err edit tasklist --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err edit tasklist --controller", err]));
  }
};

// delete tasklist by ID
const deleteTaskList = async ({ taskListID }) => {
  try {
    let result = await modelTaskList.deleteTaskList({ taskListID });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err delete taskList by ID --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err delete taskList by ID --controller", err]));
  }
};

module.exports = {
  createTaskList,
  getAllTaskList,
  getTaskListByCardID,
  editTaskList,
  deleteTaskList,
};

const modelSubTask = require("../models/TaskList_subTask");
const errorMessage = require("../config").errorMessage;

const createSubTask = async (newSubTask) => {
  try {
    let result = await modelSubTask.createSubTask(newSubTask);
    if (!result)
      res.status(402).json(errorMessage(["err create SubTask --controller."]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err create SubTask --controller.", err]));
  }
};

const getAllSubTask = async ({ name }) => {
  try {
    let result = await modelSubTask.getAllSubTask({ name });
    if (!result)
      res.status(402).json(errorMessage(["err get subtask --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err get subtask --controller.", err]));
  }
};

const getSubTaskByTaskListID = async ({ taskListID }) => {
  try {
    let result = await modelSubTask.getSubTaskByTaskListID({
      taskListID,
    });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err get SubTask by taskListID  --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(
        errorMessage(["err get SubTask by taskListID  --controller.", err])
      );
  }
};

//   update subtask
const editSubTask = async ({ subTaskID, data }) => {
  try {
    let result = await modelSubTask.editSubTask({
      subTaskID,
      data,
    });
    if (!result)
      res.status(402).json(errorMessage(["err edit subtask --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err edit subtask --controller.", err]));
  }
};

// delete subtask by ID
const deleteSubTask = async ({ subTaskID }) => {
  try {
    let result = await modelSubTask.deleteSubTask({ subTaskID });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err delete SubTask by subTaskID --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(
        errorMessage(["err delete SubTask by subTaskID --controller", err])
      );
  }
};

module.exports = {
  createSubTask,
  getAllSubTask,
  getSubTaskByTaskListID,
  editSubTask,
  deleteSubTask,
};

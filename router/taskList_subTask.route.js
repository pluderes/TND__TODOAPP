const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");
const mongoose = require("mongoose");

const subTaskRouter = express.Router();

// create new comment
subTaskRouter.post("/addSubTask", async (req, res) => {
  try {
    const { taskList_ID, content, subtask_checked } = req.body;
    const newSubTask = {
      taskList_ID: taskList_ID,
      content: content,
    };
    newSubTask.subTask_ID = uuidv4();
    const result = await Controller.SubTask.createSubTask(newSubTask);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add subtask --route." + err,
    });
  }
});

// get all subtask
subTaskRouter.get("/", async (req, res, { name }) => {
  try {
    const result = await Controller.SubTask.getAllSubTask({ name });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all subtask --route",
    });
  }
});

// get subtask by taskListID
subTaskRouter.get("/:taskListID", async (req, res) => {
  try {
    const { taskListID } = req.params;
    console.log("taskListID", taskListID);
    const data = await Controller.SubTask.getSubTaskByTaskListID({
      taskListID,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all subtask by taskListID --route",
    });
  }
});

// edit subtask
subTaskRouter.patch("/editSubTask/:subTaskID", async (req, res) => {
  try {
    const { subTaskID } = req.params;
    const dataUpdate = req.body;
    const result = await Controller.SubTask.editSubTask({
      subTaskID,
      data: dataUpdate,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors edit subtask --router",
    });
  }
});

subTaskRouter.patch("/checkSubTask/:subTaskID", async (req, res) => {
  try {
    const { subTaskID } = req.params;
    const result = await Controller.SubTask.checkSubTask({
      subTaskID,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      msg: "errors edit subtask --router",
    });
  }
});

// delete SubTask by SubTask ID
subTaskRouter.delete("/deleteSubTask/:subTaskID", async (req, res) => {
  try {
    const { subTaskID } = req.params;
    const { taskListID } = req.body;
    const result = await Controller.SubTask.deleteSubTask({
      subTaskID,
      taskListID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors delete SubTask --router",
    });
  }
});

module.exports = subTaskRouter;

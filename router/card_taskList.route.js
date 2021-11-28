const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");
const mongoose = require("mongoose");

const taskListRouter = express.Router();

// create new taskList
taskListRouter.post("/addTaskList", async (req, res) => {
  try {
    const { card_ID, taskList_name } = req.body;
    const newTaskList = {
      card_ID: card_ID,
      taskList_name: taskList_name,
    };
    newTaskList.taskList_ID = uuidv4();
    const result = await Controller.TaskList.createTaskList(newTaskList);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add tasklist --route",
    });
  }
});

// get all tasklist
taskListRouter.get("/", async (req, res, { name }) => {
  try {
    const result = await Controller.TaskList.getAllTaskList({ name });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all taskList --route",
    });
  }
});

// get task by cardID
taskListRouter.get("/:cardID", async (req, res) => {
  try {
    const { cardID } = req.params;
    const data = await Controller.TaskList.getTaskListByCardID({
      cardID,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all taskList by cardID --route",
    });
  }
});

// edit taskList
taskListRouter.patch("/editTaskList/:taskListID", async (req, res) => {
  try {
    const { taskListID } = req.params;
    const dataUpdate = req.body;
    const result = await Controller.TaskList.editTaskList({
      taskListID,
      data: dataUpdate,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors edit taskList --router",
    });
  }
});

// delete taskList by ID
taskListRouter.delete("/deleteTaskList/:taskListID", async (req, res) => {
  try {
    const { taskListID } = req.params;
    const { cardID } = req.body;
    const result = await Controller.TaskList.deleteTaskList({
      taskListID,
      cardID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors delete taskList --router",
    });
  }
});

module.exports = taskListRouter;

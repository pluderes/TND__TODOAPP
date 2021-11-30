const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const tableRouter = express.Router();

// create new table
tableRouter.post("/addTable", async (req, res) => {
  try {
    const { name, star, workspace_ID } = req.body;
    const userToken = req.headers.authorization.split(" ")[1];
    let userID = await jwt.verify(userToken, process.env.JWT_KEY);
    const newTable = {
      workspace_ID: workspace_ID,
      table_name: name,
      star: star,
      users_in_table: [
        {
          user_ID: mongoose.Types.ObjectId(userID.id),
          user_permission: "admin",
        },
      ],
    };
    newTable.table_ID = uuidv4();
    const result = await Controller.Table.createTable(newTable);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add table --route" + err,
    });
  }
});

// get all table
tableRouter.get("/", async (req, res) => {
  try {
    const { table_name } = req.body;
    const result = await Controller.Table.getAllTable({ table_name });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all table --route" + err,
    });
  }
});

// get table by WS_ID
tableRouter.get("/ws/:workspaceID", async (req, res) => {
  try {
    const { workspaceID } = req.params;
    const { table_name } = req.body;
    const data = await Controller.Table.getTableByWorkspaceID({
      workspaceID,
      table_name,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all table --route" + err,
    });
  }
});

// get table by table_ID
tableRouter.get("/:tableID", async (req, res) => {
  try {
    const { tableID } = req.params;
    const data = await Controller.Table.getTableByTableID({
      tableID,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({
      msg: "errors get table by ID --route" + err,
    });
  }
});

// edit table
tableRouter.patch("/editTable/:tableID", async (req, res) => {
  try {
    const { tableID } = req.params;
    const dataUpdate = req.body;
    const result = await Controller.Table.editTable({
      tableID,
      data: dataUpdate,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors edit table --router" + err,
    });
  }
});

tableRouter.patch("/checkStar/:tableID", async (req, res) => {
  try {
    const { tableID } = req.params;
    const result = await Controller.Table.checkStar({
      tableID,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      msg: "errors check star --router",
    });
  }
});

// add user to table
tableRouter.patch("/addUserTable/:tableID", async (req, res) => {
  try {
    const { tableID } = req.params;
    const userID = req.body;
    const result = await Controller.Table.addUserTable({
      tableID,
      data: userID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add user table --router" + err,
    });
  }
});

// delete user in table
tableRouter.patch("/deleteUserTable/:tableID", async (req, res) => {
  try {
    const { tableID } = req.params;
    const userID = req.body;
    const result = await Controller.Table.deleteUserTable({
      tableID,
      data: userID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors delete user table --router" + err,
    });
  }
});

// delete table by table ID
tableRouter.delete("/deleteTable/:tableID", async (req, res) => {
  try {
    const { tableID } = req.params;
    const result = await Controller.Table.deleteTable({
      tableID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors delete table --router" + err,
    });
  }
});

module.exports = tableRouter;

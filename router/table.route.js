const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");

const tableRouter = express.Router();

// create new table
tableRouter.post("/addTable", async (req, res) => {
  try {
    const { name, star, workspace_ID } = req.body;
    const newTable = {
      workspace_ID: workspace_ID,
      table_name: name,
      star: star,
    };
    newTable.table_ID = uuidv4();
    const result = await Controller.Table.createTable(newTable);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add table --route",
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
      msg: "errors get all table --route",
    });
  }
});

// get table by WS_ID
tableRouter.get("/:workspaceID", async (req, res) => {
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
      msg: "errors get all table --route",
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
      msg: "errors edit table --router",
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
      msg: "errors delete table --router",
    });
  }
});

module.exports = tableRouter;

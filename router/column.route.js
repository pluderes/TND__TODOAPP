const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");

const columnRouter = express.Router();

// create new column
columnRouter.post("/addColumn", async (req, res) => {
  try {
    const { name, table_ID } = req.body;
    const newColumn = {
      table_ID: table_ID,
      column_name: name,
    };
    newColumn.column_ID = uuidv4();
    const result = await Controller.Column.createColumn(newColumn);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add column --route",
    });
  }
});

// get all column
columnRouter.get("/", async (req, res, { name }) => {
  try {
    const result = await Controller.Column.getAllColumn({ name });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all column --route",
    });
  }
});

// get column by table_ID
columnRouter.get("/:tableID", async (req, res) => {
  try {
    const { tableID } = req.params;
    const { column_name } = req.body;
    const data = await Controller.Column.getColumnByTableID({
      tableID,
      column_name,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all column by tableID --route",
    });
  }
});

// edit column
columnRouter.patch("/editColumn/:columnID", async (req, res) => {
  try {
    const { columnID } = req.params;
    const dataUpdate = req.body;
    const result = await Controller.Column.editColumn({
      columnID,
      data: dataUpdate,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors edit column --router",
    });
  }
});

// delete colum by column ID
columnRouter.delete("/deleteColumn/:columnID", async (req, res) => {
  try {
    const { columnID } = req.params;
    const result = await Controller.Column.deleteColumn({
      columnID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors delete column --router",
    });
  }
});

module.exports = columnRouter;

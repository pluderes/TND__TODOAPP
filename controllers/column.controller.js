const modelColumn = require("../models/Column");
const errorMessage = require("../config").errorMessage;

const createColumn = async (data) => {
  try {
    let result = await modelColumn.createColumn(data);
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err create column --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err create column --controller", err]));
  }
};

const getAllColumn = async ({ data }) => {
  try {
    let result = await modelColumn.getAllColumn({ data });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err get column --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err get column --controller", err]));
  }
};

const getColumnByTableID = async ({ tableID, column_name }) => {
  try {
    let result = await modelColumn.getColumnByTableID({ tableID, column_name });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage(["err get column by table_ID --controller"])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err get column by table_ID --controller", err]));
  }
};

const editColumn = async ({ columnID, data }) => {
  try {
    let result = await modelColumn.editColumn({
      columnID,
      data,
    });
    if (!result)
      res.status(402).json(errorMessage(["err edit column --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err edit column --controller", err]));
  }
};

const deleteColumn = async ({ columnID }) => {
  try {
    let result = await modelColumn.deleteColumn({ columnID });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err delete column by ID --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err delete column by ID --controller", err]));
  }
};

module.exports = {
  createColumn,
  getAllColumn,
  getColumnByTableID,
  editColumn,
  deleteColumn,
};

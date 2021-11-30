const modelTable = require("../models/Table");
const errorMessage = require("../config").errorMessage;

const createTable = async (data) => {
  try {
    let result = await modelTable.createTable(data);
    if (!result)
      res
        .status(402)
        .json(errorMessage(["something wrong create table --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in create table --controller", err]));
  }
};

const getAllTable = async ({ table_name }) => {
  try {
    let result = await modelTable.getAllTable({ table_name });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["something wrong get table  --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err in get table --controller", err]));
  }
};

const getTableByWorkspaceID = async ({ workspaceID, table_name }) => {
  try {
    let result = await modelTable.getTableByWorkspaceID({
      workspaceID,
      table_name,
    });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage(["something wrong get table by WS_ID  --controller"])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in get table by WS_ID --controller", err]));
  }
};
const getTableByTableID = async ({ tableID }) => {
  try {
    let result = await modelTable.getTableByTableID({
      tableID,
    });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage(["something wrong get table by table_ID  --controller"])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in get table by WS_ID --controller", err]));
  }
};

const editTable = async ({ tableID, data }) => {
  try {
    let result = await modelTable.editTable({
      tableID,
      data,
    });
    if (!result)
      res.status(402).json(errorMessage(["err edit table --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err edit table --controller", err]));
  }
};

//   check subtask
const checkStar = async ({ tableID }) => {
  try {
    let result = await modelTable.checkStar({
      tableID,
    });
    if (!result)
      res.status(402).json(errorMessage(["err check star --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err check star --controller.", err]));
  }
};

const addUserTable = async ({ tableID, data }) => {
  try {
    let result = await modelTable.addUserTable({
      tableID,
      data,
    });
    if (!result)
      res.status(402).json(errorMessage(["err add user table --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err add user table --controller", err]));
  }
};

const deleteUserTable = async ({ tableID, data }) => {
  try {
    let result = await modelTable.deleteUserTable({
      tableID,
      data,
    });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err delete user in table --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err delete user in table --controller", err]));
  }
};

const deleteTable = async ({ tableID }) => {
  try {
    let result = await modelTable.deleteTable({ tableID });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err delete table by ID --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err delete table by ID --controller", err]));
  }
};

module.exports = {
  createTable,
  getAllTable,
  getTableByWorkspaceID,
  getTableByTableID,
  editTable,
  checkStar,
  addUserTable,
  deleteUserTable,
  deleteTable,
};

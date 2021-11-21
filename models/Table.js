const TableEntity = require("../entities/tables.entity");

//   create table
const createTable = async (body) => {
  try {
    const result = await TableEntity.create(body);
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create new table --models", err);
    throw err;
  }
};

// get all table
const getAllTable = async ({ table_name }) => {
  try {
    const regexName = new RegExp(`${table_name}`);
    const query = {};
    if (table_name) query.table_name = regexName;
    console.log("query:", query);

    const result = await TableEntity.find(query).limit(20);
    return result;
  } catch (err) {
    console.log("err get all table --models", err);
    throw err;
  }
};

// get all table
const getTableByWorkspaceID = async ({ workspaceID, table_name }) => {
  try {
    let query = { workspace_ID: workspaceID };
    if (table_name) {
      let regexName = new RegExp(`${table_name}`);
      query = { ...query, table_name: regexName };
    }
    const result = await TableEntity.find(query).limit(20);
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get table by WS_ID --models", err);
    throw err;
  }
};

//   update table
const editTable = async ({ tableID, data }) => {
  try {
    const result = await TableEntity.findOneAndUpdate(
      { _id: tableID },
      { $set: data }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err update table --models", err);
    throw err;
  }
};

//   delete table
const deleteTable = async ({ tableID }) => {
  try {
    const result = await TableEntity.deleteOne({ _id: tableID });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete table --models", err);
    throw err;
  }
};

module.exports = {
  createTable,
  getAllTable,
  getTableByWorkspaceID,
  editTable,
  deleteTable,
};

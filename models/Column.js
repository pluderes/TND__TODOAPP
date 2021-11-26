const ColumnEntity = require("../entities/columns.entity");
const TableEntity = require("../entities/tables.entity");
const mongoose = require("mongoose");

//   create Column
const createColumn = async (newColumn) => {
  try {
    const result = await ColumnEntity.create(newColumn);

    const result2 = await TableEntity.findOneAndUpdate(
      { _id: newColumn.table_ID },
      {
        $push: {
          column_IDs: {
            column_ID: mongoose.Types.ObjectId(result._id),
          },
        },
      }
    );

    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create new columns --models", err);
    throw err;
  }
};

// get all column
const getAllColumn = async ({ name }) => {
  try {
    const regexName = new RegExp(`${name}`);
    const query = {};
    if (name) query.name = regexName;

    const result = await ColumnEntity.find(query).populate("card_IDs.card_ID");
    return result;
  } catch (err) {
    console.log("err get all column --models", err);
    throw err;
  }
};

// get column by tableID
const getColumnByTableID = async ({ tableID, column_name }) => {
  try {
    let query = { table_ID: tableID };
    if (column_name) {
      let regexName = new RegExp(`${column_name}`);
      query = { ...query, column_name: regexName };
    }
    const result = await ColumnEntity.find(query).populate("card_IDs.card_ID");
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get column by table_ID --models", err);
    throw err;
  }
};

//   update column
const editColumn = async ({ columnID, data }) => {
  try {
    const result = await ColumnEntity.findOneAndUpdate(
      { _id: columnID },
      { $set: data }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err update column --models", err);
    throw err;
  }
};

//   delete column
const deleteColumn = async ({ columnID, tableID }) => {
  try {
    const result = await ColumnEntity.deleteOne({ _id: columnID });
    const result2 = await TableEntity.findOneAndUpdate(
      { _id: tableID },
      {
        $pull: {
          column_IDs: {
            column_ID: columnID,
          },
        },
      }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete column --models", err);
    throw err;
  }
};

module.exports = {
  createColumn,
  getAllColumn,
  getColumnByTableID,
  editColumn,
  deleteColumn,
};

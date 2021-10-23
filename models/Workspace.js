const Base = require("./base");
// const Model = require("../entities");
const WorkspaceEntity = require("../entities/workspace.entity");

//   create WS
const createWorkspace = async (body) => {
  try {
    const result = await WorkspaceEntity.create(body);
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create new workspace", err);
    throw err;
  }
};

const getAllWorkspace = async ({ name }) => {
  try {
    const regexName = new RegExp(`${name}`);
    const query = {};
    if (name) query.name = regexName;

    const result = await WorkspaceEntity.find(query).limit(20);
    return result;
  } catch (err) {
    console.log("err get all workspace", err);
    throw err;
  }
};
//   get WS by ID
const getWorkspaceById = async ({ workspaceID }) => {
  try {
    const result = await WorkspaceEntity.findOne({ _id: workspaceID });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get workspace by ID", err);
    throw err;
  }
};

//   get WS by user ID
const getWorkspaceByUserId = async ({ userID }) => {
  try {
    const result = await WorkspaceEntity.findOne({
      "users_in_ws.user_ID": userID,
    }).populate("");
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get workspace by ID", err);
    throw err;
  }
};

//   update WS
const editWorkspace = async ({ workspaceID, data }) => {
  try {
    const result = await WorkspaceEntity.findOneAndUpdate(
      { _id: workspaceId },
      { $set: data }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err update workspace", err);
    throw err;
  }
};

//   delete WS
const deleteWorkspace = async ({ workspaceID }) => {
  try {
    const result = await WorkspaceEntity.deleteOne({ _id: workspaceID });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete workspace", err);
    throw err;
  }
};
module.exports = {
  getAllWorkspace,
  getWorkspaceById,
  getWorkspaceByUserId,
  createWorkspace,
  editWorkspace,
  deleteWorkspace,
};

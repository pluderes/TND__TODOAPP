const Base = require("./base");
// const Model = require("../entities");
const WorkspaceEntity = require("../entities/workspace.entity");

//   create WS
const createWorkspace = async (newWorkspace) => {
  try {
    const result = await WorkspaceEntity.create(newWorkspace);
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create workspace --models", err);
    throw err;
  }
};

const getAllWorkspace = async ({ workspace_name }) => {
  try {
    const regexName = new RegExp(`${workspace_name}`);
    const query = {};
    if (workspace_name) query.workspace_name = regexName;
    const result = await WorkspaceEntity.find(query).populate(
      "users_in_ws.user_ID"
    );
    return result;
  } catch (err) {
    console.log("err get all workspace --models", err);
    throw err;
  }
};
//   get WS by ID
const getWorkspaceById = async ({ workspaceID }) => {
  try {
    const result = await WorkspaceEntity.findOne({ _id: workspaceID }).populate(
      "users_in_ws.user_ID"
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get workspace by ID --models", err);
    throw err;
  }
};

//   get WS by user ID
const getWorkspaceByUserId = async ({ id }) => {
  try {
    // console.log("userID - models", id);
    const result = await WorkspaceEntity.find({
      "users_in_ws.user_ID": id,
    }).populate("users_in_ws.user_ID");
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get workspace by ID --models", err);
    throw err;
  }
};

//   update WS
const editWorkspace = async ({ workspaceID, data }) => {
  try {
    const result = await WorkspaceEntity.findOneAndUpdate(
      { _id: workspaceID },
      { $set: data }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err update workspace --models", err);
    throw err;
  }
};

//   add user to WS
const addUserWS = async ({ workspaceID, data }) => {
  try {
    const result = await WorkspaceEntity.findOneAndUpdate(
      { _id: workspaceID },
      {
        $push: {
          users_in_ws: { user_ID: data.user_ID, user_permission: "member" },
        },
      }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err update workspace --models", err);
    throw err;
  }
};

//   delete user in WS
const deleteUserWS = async ({ workspaceID, data }) => {
  try {
    const result = await WorkspaceEntity.findOneAndUpdate(
      { _id: workspaceID },
      {
        $pull: {
          users_in_ws: { user_ID: data.user_ID },
        },
      }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete user in workspace --models", err);
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
    console.log("err delete workspace --models", err);
    throw err;
  }
};
module.exports = {
  getAllWorkspace,
  getWorkspaceById,
  getWorkspaceByUserId,
  createWorkspace,
  editWorkspace,
  addUserWS,
  deleteUserWS,
  deleteWorkspace,
};

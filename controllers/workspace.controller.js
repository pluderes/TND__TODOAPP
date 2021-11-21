const modelWorkspace = require("../models/Workspace");
const errorMessage = require("../config").errorMessage;

const createWorkspace = async (data) => {
  try {
    let result = await modelWorkspace.createWorkspace(data);
    if (!result)
      res
        .status(402)
        .json(
          errorMessage(["err create workspace --controller"])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err create workspace --controller", err]));
  }
};

const getAllWorkspace = async ({ workspace_name }) => {
  try {
    let result = await modelWorkspace.getAllWorkspace({ workspace_name });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage(["err get workspace --controller"])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err get workspace --controller", err]));
  }
};

const getWorkspaceById = async ({ workspaceID }) => {
  try {
    let result = await modelWorkspace.getWorkspaceById({ workspaceID });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage([
            "err get workspace by ID --controller",
          ])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err get workspace by ID --controller", err]));
  }
};

const getWorkspaceByUserId = async ({ id }) => {
  try {
    // console.log("userID - controller", id);
    let result = await modelWorkspace.getWorkspaceByUserId({ id });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage([
            "err get workspace by user ID --controller",
          ])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(
        errorMessage(["err get workspace by user ID --controller", err])
      );
  }
};

const addUserWS = async ({ workspaceID, data }) => {
  try {
    let result = await modelWorkspace.addUserWS({
      workspaceID,
      data,
    });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage([
            "err add user workspace --controller",
          ])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(
        errorMessage(["err add user workspace --controller", err])
      );
  }
};

const editWorkspace = async ({ workspaceID, data }) => {
  try {
    let result = await modelWorkspace.editWorkspace({
      workspaceID,
      data,
    });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage([
            "err edit workspace --controller",
          ])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(
        errorMessage(["err edit workspace --controller", err])
      );
  }
};

const deleteUserWS = async ({ workspaceID, data }) => {
  try {
    let result = await modelWorkspace.deleteUserWS({
      workspaceID,
      data,
    });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage([
            "err delete user in workspace --controller",
          ])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(
        errorMessage(["err delete user in workspace --controller", err])
      );
  }
};

const deleteWorkspace = async ({ workspaceID }) => {
  try {
    let result = await modelWorkspace.deleteWorkspace({ workspaceID });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage([
            "err delete workspace by WS_ID --controller",
          ])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err delete workspace by WS_ID --controller", err]));
  }
};
module.exports = {
  createWorkspace,
  getAllWorkspace,
  getWorkspaceById,
  getWorkspaceByUserId,
  addUserWS,
  editWorkspace,
  deleteUserWS,
  deleteWorkspace,
};

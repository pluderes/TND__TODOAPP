const modelWorkspace = require("../models/Workspace");
const errorMessage = require("../config").errorMessage;

const createWorkspace = async (data) => {
  try {
    let result = await modelWorkspace.createWorkspace(data);
    if (!result)
      res
        .status(402)
        .json(
          errorMessage(["something wrong when create workspace in controller"])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in create workspace in controller", err]));
  }
};

const getAllWorkspace = async ({ data }) => {
  try {
    let result = await modelWorkspace.getAllWorkspace({ data });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage(["something wrong when get workspace in controller"])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in get workspace in controller", err]));
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
            "something wrong when get workspace by ID in controller",
          ])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in get workspace by ID in controller", err]));
  }
};

const getWorkspaceByUserId = async ({ userID }) => {
  try {
    let result = await modelWorkspace.getWorkspaceByUserId({ userID });
    if (!result)
      res
        .status(402)
        .json(
          errorMessage([
            "something wrong when get workspace by user ID in controller",
          ])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in get workspace by user ID in controller", err]));
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
            "something wrong when delete workspace by ID in controller",
          ])
        );
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err in delete workspace by ID in controller", err]));
  }
};
module.exports = {
  createWorkspace,
  getAllWorkspace,
  getWorkspaceById,
  getWorkspaceByUserId,
  deleteWorkspace,
};
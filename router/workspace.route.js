const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const workspaceRouter = express.Router();

// create new user
workspaceRouter.post("/addWorkspace", async (req, res) => {
  try {
    const { name, desc, userToken } = req.body;
    let userID = await jwt.verify(userToken, process.env.JWT_KEY);
    const newWorkspace = {
      workspace_name: name,
      description: desc,
      users_in_ws: [
        {
          user_ID: mongoose.Types.ObjectId(userID.id),
          user_permission: "admin",
        },
      ],
    };
    newWorkspace.workspace_ID = uuidv4();
    const result = await Controller.Workspace.createWorkspace(newWorkspace);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add WS --router",
    });
  }
});

// get all workspace
workspaceRouter.get("/", async (req, res) => {
  try {
    const { workspace_name } = req.body;
    const result = await Controller.Workspace.getAllWorkspace({
      workspace_name,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "err get workspace --router",
    });
  }
});

// get workspace By workspace_ID
workspaceRouter.get("/:workspaceID", async (req, res) => {
  const { workspaceID } = req.params;
  const { status, data } = await Controller.Workspace.getWorkspaceById({
    workspaceID,
  });
  res.status(status).json(data);
});

// get workspace by user_ID
workspaceRouter.get("/user/:userToken", async (req, res) => {
  let userID = await jwt.verify(req.params.userToken, process.env.JWT_KEY);
  let id = userID.id;
  const { status, data } = await Controller.Workspace.getWorkspaceByUserId({
    id,
  });
  res.status(status).json(data);
});

// add user to WS
workspaceRouter.patch("/addUserWS/:workspaceID", async (req, res) => {
  try {
    const { workspaceID } = req.params;
    const userID = req.body;
    const result = await Controller.Workspace.addUserWS({
      workspaceID,
      data: userID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add user WS --router",
    });
  }
});

// edit WS
workspaceRouter.patch("/editWorkspace/:workspaceID", async (req, res) => {
  try {
    const { workspaceID } = req.params;
    const dataUpdate = req.body;
    const result = await Controller.Workspace.editWorkspace({
      workspaceID,
      data: dataUpdate,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors edit WS --router",
    });
  }
});

// delete user in WS
workspaceRouter.patch("/deleteUserWS/:workspaceID", async (req, res) => {
  try {
    const { workspaceID } = req.params;
    const userID = req.body;
    const result = await Controller.Workspace.deleteUserWS({
      workspaceID,
      data: userID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors delete user WS --router",
    });
  }
});

// delete workspace
workspaceRouter.delete("/delete/:workspaceID", async (req, res, { name }) => {
  try {
    const { workspaceID } = req.params;
    const result = await Controller.Workspace.deleteWorkspace({ workspaceID });
    // console.log("result", result, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});
module.exports = workspaceRouter;

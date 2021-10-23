const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");

const workspaceRouter = express.Router();

// create new user
workspaceRouter.post("/addWorkspace", async (req, res) => {
  try {
    const newWorkspace = req.body;
    newWorkspace.workspace_ID = uuidv4();
    const result = await Controller.Workspace.createWorkspace(newWorkspace);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});

// get all workspace
workspaceRouter.get("/", async (req, res, { name }) => {
  try {
    const result = await Controller.Workspace.getAllWorkspace({ name });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "something wrong in router get workspace",
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
workspaceRouter.get("/user/:userID", async (req, res) => {
  const { userID } = req.params;
  const { status, data } = await Controller.Workspace.getWorkspaceByUserId({
    userID,
  });
  res.status(status).json(data);
});

// delete workspace
workspaceRouter.delete("/delete/:workspaceID", async (req, res, { name }) => {
  try {
    const { workspaceID } = req.params;
    const result = await Controller.Workspace.deleteWorkspace({ workspaceID });
    console.log("result", result, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});
module.exports = workspaceRouter;

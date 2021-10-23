const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");

const userRouter = express.Router();

// get all user
userRouter.get("/", async (req, res) => {
  const name = req.query.name;
  const { status, data } = await Controller.User.getAllUser({ name });
  res.status(status).json(data);
});

// get user By id
userRouter.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  // console.log(userId);
  const { status, data } = await Controller.User.getUserById({ userId });
  res.status(status).json(data);
});

// create new user
userRouter.post("/addUser", async (req, res) => {
  try {
    const newUser = req.body;
    newUser._id = uuidv4();
    const result = await Controller.User.createUser(newUser);
    res.json(result);
    // console.log(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});

// update info user by ID
userRouter.patch("/update/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const newData = req.body;
    const result = await Controller.User.editUser({ userId, data: newData });
    // console.log("result", result, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});
// update WS_IDs user by ID
userRouter.patch("/updateWS_IDs/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const newData = req.body;
    const result = await Controller.User.updateWS_IDs({
      userId,
      data: newData,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});
// delete user by ID
userRouter.delete("/delete/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await Controller.User.deleteUser({ userId });
    // console.log("result", result, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});

module.exports = userRouter;

const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");

const Router = express.Router();

// get all user
Router.get("/", async (req, res) => {
  const name = req.query.name;
  const { status, data } = await Controller.User.getAllUser({ name });
  res.status(status).json(data);
});

// get user By id
Router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { status, data } = await Controller.User.getUserById({ userId });
  res.status(status).json(data);
});

// create new user
Router.post("/addUser", async (req, res) => {
  try {
    const newUser = req.body;
    newUser.id = uuidv4();
    const result = await Controller.User.createUser(newUser);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});

// update info user by ID
Router.patch("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const newData = req.body;
    const result = await Controller.User.editUser({ userId, data: newData });
    console.log("result", result, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});

// delete user by ID
Router.delete("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await Controller.User.deleteUser({ userId });
    console.log("result", result, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors server",
    });
  }
});

// Login user
Router.post("/login", async (req, res) => {
  try {
    const dataLogin = req.body;
    const result = await Controller.Login.login(dataLogin);
    // console.log("oke");
    res.send({ token: result });
  } catch (err) {
    res.status(500).json({
      msg: "err",
    });
  }
});

module.exports = Router;

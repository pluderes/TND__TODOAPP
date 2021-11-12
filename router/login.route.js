const express = require("express");
const Controller = require("../controllers");
const jwt = require("jsonwebtoken");

const loginRouter = express.Router();

// Login user
loginRouter.post("/", async (req, res) => {
  try {
    const dataLogin = req.body;
    const result = await Controller.Login.login(dataLogin);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "email or password wrong",
    });
  }
});

// login by token
loginRouter.get("/token", async (req, res) => {
  try {
    // console.log("token: ", req.headers.authorization.split(" ")[1]);
    let token = req.headers.authorization.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.JWT_KEY);
    res.send({ userID: decoded.id });
  } catch (err) {
    res.status(500).json({
      msg: "err",
    });
  }
});

module.exports = loginRouter;

const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");
const mongoose = require("mongoose");

const activityRouter = express.Router();

// create new activity
activityRouter.post("/addActivity", async (req, res) => {
  try {
    const { card_ID, content, user_ID } = req.body;
    // let userID = await jwt.verify(userToken, process.env.JWT_KEY);
    const newActivity = {
      card_ID: card_ID,
      user_ID: user_ID,
      content: content,
    };
    newActivity.activity_ID = uuidv4();
    const result = await Controller.Activity.createActivity(newActivity);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add activity --route",
    });
  }
});

// get all activity
activityRouter.get("/", async (req, res, { name }) => {
  try {
    const result = await Controller.Activity.getAllActivity({ name });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all Activity --route",
    });
  }
});

// get comment by card_ID
activityRouter.get("/:cardID", async (req, res) => {
  try {
    const { cardID } = req.params;
    const data = await Controller.Activity.getActivityByCardID({
      cardID,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all Activity by cardID --route",
    });
  }
});

module.exports = activityRouter;

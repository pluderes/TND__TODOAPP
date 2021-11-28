const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const commentRouter = express.Router();

// create new comment
commentRouter.post("/addComment", async (req, res) => {
  try {
    const { card_ID, content } = req.body;
    const userToken = req.headers.authorization.split(" ")[1];
    let userID = await jwt.verify(userToken, process.env.JWT_KEY);

    const newComment = {
      card_ID: card_ID,
      user_ID: mongoose.Types.ObjectId(userID.id),
      content: content,
    };
    newComment.comment_ID = uuidv4();
    const result = await Controller.Comment.createComment(newComment);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add comment --route",
    });
  }
});

// get all comment
commentRouter.get("/", async (req, res, { name }) => {
  try {
    const result = await Controller.Comment.getAllComment({ name });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all comment --route",
    });
  }
});

// get comment by card_ID
commentRouter.get("/:cardID", async (req, res) => {
  try {
    const { cardID } = req.params;
    const data = await Controller.Comment.getCommentByCardID({
      cardID,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all comment by cardID --route",
    });
  }
});

// edit comment
commentRouter.patch("/editComment/:commentID", async (req, res) => {
  try {
    const { commentID } = req.params;
    const dataUpdate = req.body;
    const result = await Controller.Comment.editComment({
      commentID,
      data: dataUpdate,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors edit comment --router",
    });
  }
});

// delete comment by comment ID
commentRouter.delete("/deleteComment/:commentID", async (req, res) => {
  try {
    const { commentID } = req.params;
    const { cardID } = req.body;
    const result = await Controller.Comment.deleteComment({
      commentID,
      cardID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors delete comment --router",
    });
  }
});

module.exports = commentRouter;

const modelComment = require("../models/Card_comment");
const errorMessage = require("../config").errorMessage;

const createComment = async (newComment) => {
  try {
    let result = await modelComment.createComment(newComment);
    if (!result)
      res.status(402).json(errorMessage(["err create comment --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err create comment --controller", err]));
  }
};

const getAllComment = async ({ name }) => {
  try {
    let result = await modelComment.getAllComment({ name });
    if (!result)
      res.status(402).json(errorMessage(["err get comment --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err get comment --controller", err]));
  }
};

const getCommentByCardID = async ({ cardID }) => {
  try {
    let result = await modelComment.getCommentByCardID({
      cardID,
    });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err get comment by cardID  --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err get comment by cardID  --controller", err]));
  }
};

//   update comment
const editComment = async ({ commentID, data }) => {
  try {
    let result = await modelComment.editComment({
      commentID,
      data,
    });
    if (!result)
      res.status(402).json(errorMessage(["err edit comment --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err edit comment --controller", err]));
  }
};

// delete comment by ID
const deleteComment = async ({ commentID }) => {
  try {
    let result = await modelComment.deleteComment({ commentID });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err delete comment by commentID --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(
        errorMessage(["err delete comment by commentID --controller", err])
      );
  }
};

module.exports = {
  createComment,
  getAllComment,
  getCommentByCardID,
  editComment,
  deleteComment,
};

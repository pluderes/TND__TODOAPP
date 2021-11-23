const CommentEntity = require("../entities/card_comments.entity");
const UserEntity = require("../entities/users.entity");

//   create comment
const createComment = async (newComment) => {
  try {
    const dataUser = await UserEntity.findOne({
      _id: newComment.user_ID,
    });
    const dataComment = {
      card_ID: newComment.card_ID,
      user_ID: newComment.user_ID,
      comment_info: {
        user_name: dataUser.username,
        content: newComment.content,
      },
    };
    const result = await CommentEntity.create(dataComment);
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create comment --models", err);
    throw err;
  }
};

//   get comment by card ID
const getCommentByCardID = async ({ cardID }) => {
  try {
    const result = await CommentEntity.find({
      card_ID: cardID,
    });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get comment by cardID --models", err);
    throw err;
  }
};

// get all comment
const getAllComment = async ({ name }) => {
  try {
    const regexName = new RegExp(`${name}`);
    const query = {};
    if (name) query.name = regexName;

    const result = await CommentEntity.find().limit(20);
    return result;
  } catch (err) {
    console.log("err get all comment --models", err);
    throw err;
  }
};

//   update comment
const editComment = async ({ commentID, data }) => {
  try {
    const result = await CommentEntity.findOneAndUpdate(
      { _id: commentID },
      {
        $set: {
          "comment_info.content": data.content,
        },
      }
    );
    console.log("result", result);
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err update comment --models", err);
    throw err;
  }
};

//   delete comment
const deleteComment = async ({ commentID }) => {
  try {
    const result = await CommentEntity.deleteOne({ _id: commentID });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete comment --models", err);
    throw err;
  }
};

module.exports = {
  createComment,
  getAllComment,
  getCommentByCardID,
  editComment,
  deleteComment,
};

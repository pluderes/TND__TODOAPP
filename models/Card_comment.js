const CommentEntity = require("../entities/card_comments.entity");

//   create comment
const createComment = async (body) => {
  try {
    const result = await CommentEntity.create(body);
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create comment --models", err);
    throw err;
  }
};

// get all comment
const getAllComment = async ({ name }) => {
  try {
    const regexName = new RegExp(`${name}`);
    const query = {};
    if (name) query.name = regexName;

    const result = await CommentEntity.find(query).limit(20);
    return result;
  } catch (err) {
    console.log("err get all comment --models", err);
    throw err;
  }
};

//   update comment
const editComment = async ({ comment_ID, data }) => {
  try {
    const result = await CommentEntity.findOneAndUpdate(
      { _id: comment_ID },
      { $set: data }
    );
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
const deleteComment = async ({ comment_ID }) => {
  try {
    const result = await CommentEntity.deleteOne({ _id: comment_ID });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete TaskList --models", err);
    throw err;
  }
};

module.exports = {
  createComment,
  getAllComment,
  editComment,
  deleteComment,
};

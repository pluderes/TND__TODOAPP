const CardEntity = require("../entities/cards.entity");
const ColumnEntity = require("../entities/columns.entity");
const mongoose = require("mongoose");

//   create card
const createCard = async (newCard) => {
  try {
    const result = await CardEntity.create(newCard);
    const result2 = await ColumnEntity.findOneAndUpdate(
      { _id: newCard.column_ID },
      {
        $push: {
          card_IDs: {
            card_ID: mongoose.Types.ObjectId(result._id),
          },
        },
      }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create new card --models", err);
    throw err;
  }
};

// get all card
const getAllCard = async ({ name }) => {
  try {
    const regexName = new RegExp(`${name}`);
    const query = {};
    if (name) query.name = regexName;

    const result = await CardEntity.find(query).limit(20);
    return result;
  } catch (err) {
    console.log("err get all card --models", err);
    throw err;
  }
};

// get carn by columnID
const getCardByColumnID = async ({ columnID, card_name }) => {
  try {
    let query = { column_ID: columnID };
    if (card_name) {
      let regexName = new RegExp(`${card_name}`);
      query = { ...query, card_name: regexName };
    }
    const result = await CardEntity.find(query)
      .populate("users_in_card.user_ID")
      .populate("card_taskLists.taskList_ID")
      .populate("card_commnets.comment_ID")
      .populate("card_activities.activity_ID");
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get card by column_ID --models", err);
    throw err;
  }
};

// get carn by cardID
const getCardByCardID = async ({ cardID }) => {
  try {
    let query = { _id: cardID };
    const result = await CardEntity.find(query)
      .populate("users_in_card.user_ID")
      .populate("card_comments.comment_ID")
      .populate("card_activities.activity_ID")
      .populate({
        path: "card_taskLists.taskList_ID",
        populate: {
          path: "subTask_IDs.subTask_ID",
        },
      });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get card by cardID --models", err);
    throw err;
  }
};

//   update card
const editCard = async ({ cardID, data }) => {
  try {
    if (!data.card_deadline) {
      const result = await CardEntity.findOneAndUpdate(
        { _id: cardID },
        { $set: data }
      );
      return {
        data: result,
        status: 200,
      };
    } else {
      data.card_deadline.deadline = new Date(data.card_deadline.deadline);
      const result = await CardEntity.findOneAndUpdate(
        { _id: cardID },
        { $set: data }
      );
      return {
        data: result,
        status: 200,
      };
    }
  } catch (err) {
    console.log("err update card --models", err);
    throw err;
  }
};

//   add user to card
const addUserCard = async ({ cardID, data }) => {
  try {
    const result = await CardEntity.findOneAndUpdate(
      { _id: cardID },
      {
        $push: {
          users_in_card: { user_ID: data.user_ID, user_permission: "member" },
        },
      }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err add user card --models", err);
    throw err;
  }
};

//   delete user in Card
const deleteUserCard = async ({ cardID, data }) => {
  try {
    const result = await CardEntity.findOneAndUpdate(
      { _id: cardID },
      {
        $pull: {
          users_in_card: { user_ID: data.user_ID },
        },
      }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete user in card --models", err);
    throw err;
  }
};

//   delete card
const deleteCard = async ({ cardID, columnID }) => {
  try {
    const result = await CardEntity.deleteOne({ _id: cardID });
    const result2 = await ColumnEntity.findOneAndUpdate(
      { _id: columnID },
      {
        $pull: {
          card_IDs: {
            card_ID: cardID,
          },
        },
      }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete card --models", err);
    throw err;
  }
};

module.exports = {
  createCard,
  getAllCard,
  getCardByColumnID,
  getCardByCardID,
  editCard,
  addUserCard,
  deleteUserCard,
  deleteCard,
};

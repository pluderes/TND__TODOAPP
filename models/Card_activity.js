const ActivityEntity = require("../entities/card_activities.entity");
const UserEntity = require("../entities/users.entity");
const CardEntity = require("../entities/cards.entity");

//   create activity
const createActivity = async (newActivity) => {
  try {
    const dataActivity = {
      card_ID: newActivity.card_ID,
      user_ID: newActivity.user_ID,
      content: newActivity.content,
    };
    const result = await ActivityEntity.create(dataActivity);
    const result2 = await CardEntity.findOneAndUpdate(
      { _id: dataActivity.card_ID },
      {
        $push: {
          card_activities: { activity_ID: result._id },
        },
      }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create activity --models", err);
    throw err;
  }
};

// get all Activity
const getAllActivity = async ({ name }) => {
  try {
    const regexName = new RegExp(`${name}`);
    const query = {};
    if (name) query.name = regexName;

    const result = await ActivityEntity.find().limit(20).populate("user_ID");
    return result;
  } catch (err) {
    console.log("err get all Activity --models", err);
    throw err;
  }
};

//   get activity by card ID
const getActivityByCardID = async ({ cardID }) => {
  try {
    const result = await ActivityEntity.find({
      card_ID: cardID,
    }).populate("user_ID");
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get activity by cardID --models", err);
    throw err;
  }
};

module.exports = {
  createActivity,
  getAllActivity,
  getActivityByCardID,
};

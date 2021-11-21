const ActivityEntity = require("../entities/card_activities.entity");

//   create activity
const createActivity = async (body) => {
  try {
    const result = await ActivityEntity.create(body);
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

    const result = await ActivityEntity.find(query).limit(20);
    return result;
  } catch (err) {
    console.log("err get all Activity --models", err);
    throw err;
  }
};

//   update Activity
const editActivity = async ({ activity_ID, data }) => {
  try {
    const result = await ActivityEntity.findOneAndUpdate(
      { _id: activity_ID },
      { $set: data }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err update activity --models", err);
    throw err;
  }
};

//   delete Activity
const deleteActivity = async ({ activity_ID }) => {
  try {
    const result = await ActivityEntity.deleteOne({ _id: activity_ID });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete Activity --models", err);
    throw err;
  }
};

module.exports = {
  createActivity,
  getAllActivity,
  editActivity,
  deleteActivity,
};

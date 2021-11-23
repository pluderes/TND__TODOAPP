const modelActivity = require("../models/Card_activity");
const errorMessage = require("../config").errorMessage;

const createActivity = async (newActivity) => {
  try {
    let result = await modelActivity.createActivity(newActivity);
    if (!result)
      res.status(402).json(errorMessage(["err create activity --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err create activity --controller", err]));
  }
};

const getAllActivity = async ({ name }) => {
  try {
    let result = await modelActivity.getAllActivity({ name });
    if (!result)
      res.status(402).json(errorMessage(["err get activity --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err get activity --controller", err]));
  }
};

const getActivityByCardID = async ({ cardID }) => {
  try {
    let result = await modelActivity.getActivityByCardID({
      cardID,
    });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err get activity by cardID  --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err get activity by cardID  --controller", err]));
  }
};

module.exports = {
  createActivity,
  getAllActivity,
  getActivityByCardID,
};

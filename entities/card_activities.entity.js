"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const card_activities = new Schema({
  card_ID: {
    _id: false,
    type: Schema.Types.ObjectId,
    ref: "Cards",
    required: true,
  },
  user_ID: {
    _id: false,
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  activity_info: {
    user_name: { type: String, required: true },
    content: {
      type: String,
      required: true,
    },
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Card_activities = mongoose.model("Card_activities", card_activities);

module.exports = Card_activities;

"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const card_activities = new Schema({
  card_ID: {
    type: String,
  },
  user_ID: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
  },
  activity_desc: {
    type: String,
    required: true,
  },
});

const Card_activities = mongoose.model("Card_activities", card_activities);

module.exports = Card_activities;

"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const card_comments = new Schema({
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
    requied: true,
  },
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Card_comments = mongoose.model("Card_comments", card_comments);

module.exports = Card_comments;

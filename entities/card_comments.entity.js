"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const card_comments = new Schema({
  card_ID: {
    type: String,
    required: true,
  },
  user_ID: {
    type: String,
    required: true,
  },
  comment_content: {
    type: String,
  },
  createAt: {
    type: Date,
  },
});

const Card_comments = mongoose.model("Card_comments", card_comments);

module.exports = Card_comments;

"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cards = new Schema({
  column_ID: {
    _id: false,
    type: Schema.Types.ObjectId,
    ref: "Columns",
  },
  card_name: {
    type: String,
    required: true,
  },
  card_desc: {
    type: String,
  },
  users_in_card: [
    {
      _id: false,
      user_ID: { type: Schema.Types.ObjectId, ref: "Users" },
      user_permission: { type: String, required: true },
    },
  ],
  card_deadline: {
    created_at: { type: Date, default: Date.now },
    deadline: { type: Date },
    done: { type: Boolean },
  },
});

const Cards = mongoose.model("Cards", cards);

module.exports = Cards;

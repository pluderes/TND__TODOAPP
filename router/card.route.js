const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Controller = require("../controllers");
const mongoose = require("mongoose");

const cardRouter = express.Router();

// create new card
cardRouter.post("/addCard", async (req, res) => {
  try {
    const { name, desc, column_ID, user_ID } = req.body;
    let userID = await jwt.verify(userToken, process.env.JWT_KEY);
    const newCard = {
      column_ID: column_ID,
      card_name: name,
      card_desc: desc,
      users_in_card: [
        {
          user_ID: mongoose.Types.ObjectId(userID.id),
          // user_ID: mongoose.Types.ObjectId(user_ID),
          user_permission: "admin",
        },
      ],
    };
    newCard.card_ID = uuidv4();
    const result = await Controller.Card.createCard(newCard);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add card --route",
    });
  }
});

// get all card
cardRouter.get("/", async (req, res, { card_name }) => {
  try {
    const result = await Controller.Card.getAllCard({ card_name });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all card --route",
    });
  }
});

// get card by column_ID
cardRouter.get("/:columnID", async (req, res) => {
  try {
    const { columnID } = req.params;
    const { card_name } = req.body;
    const data = await Controller.Card.getCardByColumnID({
      columnID,
      card_name,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({
      msg: "errors get all card by column ID --route" + err,
    });
  }
});

// edit card
cardRouter.patch("/editCard/:cardID", async (req, res) => {
  try {
    const { cardID } = req.params;
    const dataUpdate = req.body;
    const result = await Controller.Card.editCard({
      cardID,
      data: dataUpdate,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors edit card --router",
    });
  }
});

// add user to card
cardRouter.patch("/addUserCard/:cardID", async (req, res) => {
  try {
    const { cardID } = req.params;
    const userID = req.body;
    const result = await Controller.Card.addUserCard({
      cardID,
      data: userID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors add user card --router",
    });
  }
});

// delete user in Card
cardRouter.patch("/deleteUserCard/:cardID", async (req, res) => {
  try {
    const { cardID } = req.params;
    const userID = req.body;
    const result = await Controller.Card.deleteUserCard({
      cardID,
      data: userID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors delete user Card --router",
    });
  }
});

// delete card by card ID
cardRouter.delete("/deleteCard/:cardID", async (req, res) => {
  try {
    const { cardID } = req.params;
    const result = await Controller.Card.deleteCard({
      cardID,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      msg: "errors delete card --router",
    });
  }
});

module.exports = cardRouter;

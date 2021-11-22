const modelCard = require("../models/Card");
const errorMessage = require("../config").errorMessage;

const createCard = async (newCard) => {
  try {
    let result = await modelCard.createCard(newCard);
    if (!result)
      res.status(402).json(errorMessage(["err create card --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err create card --controller", err]));
  }
};

const getAllCard = async ({ data }) => {
  try {
    let result = await modelCard.getAllCard({ data });
    if (!result)
      res.status(402).json(errorMessage(["err get all card  --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err get card --controller", err]));
  }
};

const getCardByColumnID = async ({ columnID, card_name }) => {
  try {
    let result = await modelCard.getCardByColumnID({ columnID, card_name });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err get card by column_ID  --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err get card by column_ID --controller", err]));
  }
};

const editCard = async ({ cardID, data }) => {
  try {
    let result = await modelCard.editCard({
      cardID,
      data,
    });
    if (!result)
      res.status(402).json(errorMessage(["err edit card --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err edit card --controller", err]));
  }
};

const addUserCard = async ({ cardID, data }) => {
  try {
    let result = await modelCard.addUserCard({
      cardID,
      data,
    });
    if (!result)
      res.status(402).json(errorMessage(["err add user card --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err add user card --controller", err]));
  }
};

const deleteUserCard = async ({ cardID, data }) => {
  try {
    let result = await modelCard.deleteUserCard({
      cardID,
      data,
    });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err delete user in card --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err delete user in card --controller", err]));
  }
};

const deleteCard = async ({ cardID }) => {
  try {
    let result = await modelCard.deleteCard({ cardID });
    if (!result)
      res
        .status(402)
        .json(errorMessage(["err delete card by ID --controller"]));
    else {
      return result;
    }
  } catch (err) {
    res
      .status(402)
      .json(errorMessage(["err delete card by ID --controller", err]));
  }
};

module.exports = {
  createCard,
  getAllCard,
  getCardByColumnID,
  editCard,
  addUserCard,
  deleteUserCard,
  deleteCard,
};

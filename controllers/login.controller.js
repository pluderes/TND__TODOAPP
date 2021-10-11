require("dotenv").config();
const modelUser = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const errorMessage = require("../config").errorMessage;

// -------------------------- bcrypt ---------------------------
const encodePass = (password) => {
  return new Promise((res, rej) => {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        rej(err);
        return err;
      }
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) rej(err);
        return res(hash);
      });
    });
  });
};

const comparePass = (plainPass, hashword) => {
  return new Promise((res, rej) => {
    bcrypt.compare(plainPass, hashword, function (err, isPasswordMatch) {
      return err == null ? res(isPasswordMatch) : rej(err);
    });
  });
};
// -------------------------------------------------------------

const login = async (data) => {
  let { email, password } = data;
  if (undefined === email || undefined === password)
    return res.status(401).json(errorMessage(["email, password is require"]));

  try {
    let user = await modelUser.checkEmail(data);
    if (!user) res.status(402).json(errorMessage(["email or password wrong"]));
    else {
      const hashPass = await encodePass(user.password);
      const checkPass = await comparePass(data.password, hashPass);
      if (checkPass) {
        let token = { id: user._id };
        let key = jwt.sign(token, process.env.JWT_KEY);
        let userSend = { ...user._doc, token: key };
        console.log("token", token);
        console.log("key", key);
        console.log("userSend", userSend);
        return key;
      } else {
        return res.status(402).json(errorMessage(["password wrong"]));
      }
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err in USER LOGIN", err]));
  }
};
module.exports = { login };

const Base = require("./base");
const Model = require("../entities");
const UserEntity = require("../entities/users.entity");

async function checkEmail(data) {
  let query = { email: data.email };
  let userLogin = new Promise((res, rej) => {
    UserEntity.findOne(query).exec((err, data) => {
      if (err) rej(err);
      res(data);
    });
  });
  return userLogin;
}

module.exports = { checkEmail };

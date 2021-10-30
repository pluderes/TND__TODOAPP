// const Model = require('../models/User')

const UserEntity = require("../entities/users.entity");

class User {
  constructor() {}
  async getAllUser({ name }) {
    try {
      // console.log('name', name)
      const regexName = new RegExp(`${name}`);
      const query = {};
      if (name) query.name = regexName;

      const result = await UserEntity.find(query).limit(20);
      return {
        data: result,
        status: 200,
      };
    } catch (err) {}
  }

  async getUserById({ userId }) {
    const result = await UserEntity.findOne({ _id: userId }).populate(
      "workspace_IDs"
    );
    return {
      data: result,
      status: 200,
    };
  }
  async createUser(body) {
    try {
      const result = await UserEntity.create(body);
      return {
        data: result,
        status: 200,
      };
    } catch (err) {
      console.log("err createNewUser", err);
      throw err;
    }
  }
  async editUser({ userId, data }) {
    try {
      const result = await UserEntity.findOneAndUpdate(
        { _id: userId },
        { $set: data }
      );
      return {
        data: result,
        status: 200,
      };
    } catch (err) {
      console.log("err update user", err);
      throw err;
    }
  }
  async deleteUser({ userId }) {
    try {
      const result = await UserEntity.deleteOne({ _id: userId });
      return {
        data: result,
        status: 200,
      };
    } catch (err) {
      console.log("err delete user", err);
      throw err;
    }
  }
  async updateWS_IDs({ userId, data }) {
    try {
      const result = await UserEntity.findOneAndUpdate(
        { _id: userId },
        { $push: { workspace_IDs: data.workspace_IDs } }
      );
      return {
        data: result,
        status: 200,
      };
    } catch (err) {
      console.log("err update user", err);
      throw err;
    }
  }
}

module.exports = new User();

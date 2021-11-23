const TaskListEntity = require("../entities/card_taskList.entity");

//   create card_taskList
const createTaskList = async (newTaskList) => {
  try {
    const result = await TaskListEntity.create(newTaskList);
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create new TaskList --models", err);
    throw err;
  }
};

// get all card_taskList
const getAllTaskList = async ({ name }) => {
  try {
    const regexName = new RegExp(`${name}`);
    const query = {};
    if (name) query.name = regexName;

    const result = await TaskListEntity.find().limit(20);
    return result;
  } catch (err) {
    console.log("err get all TaskList --models", err);
    throw err;
  }
};

const getTaskListByCardID = async ({ cardID }) => {
  try {
    const result = await TaskListEntity.find({
      card_ID: cardID,
    });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get taskList by cardID --models", err);
    throw err;
  }
};

//   update card_taskList
const editTaskList = async ({ taskListID, data }) => {
  try {
    const result = await TaskListEntity.findOneAndUpdate(
      { _id: taskListID },
      { $set: data }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err update TaskList --models", err);
    throw err;
  }
};

//   delete card_taskList
const deleteTaskList = async ({ taskListID }) => {
  try {
    const result = await TaskListEntity.deleteOne({ _id: taskListID });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete TaskList --models", err);
    throw err;
  }
};

module.exports = {
  createTaskList,
  getAllTaskList,
  getTaskListByCardID,
  editTaskList,
  deleteTaskList,
};

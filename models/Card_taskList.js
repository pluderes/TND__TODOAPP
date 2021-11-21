const TaskListEntity = require("../entities/card_taskList.entity");

//   create card_taskList
const createTaskList = async (body) => {
  try {
    const result = await TaskListEntity.create(body);
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

    const result = await TaskListEntity.find(query).limit(20);
    return result;
  } catch (err) {
    console.log("err get all TaskList --models", err);
    throw err;
  }
};

//   update card_taskList
const editTaskList = async ({ taskList_ID, data }) => {
  try {
    const result = await TaskListEntity.findOneAndUpdate(
      { _id: taskList_ID },
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
const deleteTaskList = async ({ taskList_ID }) => {
  try {
    const result = await TaskListEntity.deleteOne({ _id: taskList_ID });
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
  editTaskList,
  deleteTaskList,
};

const TaskListEntity = require("../entities/card_taskList.entity");
const CardEntity = require("../entities/cards.entity");
//   create card_taskList
const createTaskList = async (newTaskList) => {
  try {
    const result = await TaskListEntity.create(newTaskList);
    const result2 = await CardEntity.findOneAndUpdate(
      { _id: newTaskList.card_ID },
      {
        $push: {
          card_taskLists: { taskList_ID: result._id },
        },
      }
    );
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

    const result = await TaskListEntity.find().populate(
      "subTask_IDs.subTask_ID"
    );
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
    }).populate("subTask_IDs.subTask_ID");
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
      { _id: newTaskList.card_ID },
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
const deleteTaskList = async ({ taskListID, cardID }) => {
  try {
    const result = await TaskListEntity.deleteOne({ _id: taskListID });
    const result2 = await CardEntity.findOneAndUpdate(
      { _id: cardID },
      {
        $pull: {
          card_taskLists: { taskList_ID: taskListID },
        },
      }
    );
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

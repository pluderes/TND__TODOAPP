const SubTaskEntity = require("../entities/taskList_subtasks.entity");
const TaskListEntity = require("../entities/card_taskList.entity");
const mongoose = require("mongoose");
const { TaskList } = require("../controllers");

//   create subtask
const createSubTask = async (newSubTask) => {
  try {
    const dataSubTask = {
      taskList_ID: newSubTask.taskList_ID,
      subtask_info: {
        content: newSubTask.content,
      },
      subtask_status: newSubTask.subtask_status,
    };
    const result = await SubTaskEntity.create(dataSubTask);
    const result2 = await TaskListEntity.findOneAndUpdate(
      { _id: newSubTask.taskList_ID },
      {
        $push: {
          subTask_IDs: {
            subTask_ID: mongoose.Types.ObjectId(result._id),
          },
        },
      }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create Subtask --models.", err);
    throw err;
  }
};

// get all Subtask
const getAllSubTask = async ({ name }) => {
  try {
    const regexName = new RegExp(`${name}`);
    const query = {};
    if (name) query.name = regexName;

    const result = await SubTaskEntity.find().limit(20);
    return result;
  } catch (err) {
    console.log("err get all Subtask --models.", err);
    throw err;
  }
};

//   get SubTask by taskListID
const getSubTaskByTaskListID = async ({ taskListID }) => {
  try {
    console.log("taskListID", taskListID);
    const result = await SubTaskEntity.find({
      taskList_ID: taskListID,
    });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err get subtask by taskListID --models", err);
    throw err;
  }
};

//   update Subtask
const editSubTask = async ({ subTaskID, data }) => {
  try {
    if (!data.users || data.users == "") {
      const result = await SubTaskEntity.findOneAndUpdate(
        { _id: subTaskID },
        {
          $set: {
            "subtask_info.content": data.content,
          },
        }
      );
      return {
        data: result,
        status: 200,
      };
    } else {
      const result = await SubTaskEntity.findOneAndUpdate(
        { _id: subTaskID },
        {
          $set: {
            "subtask_info.content": data.content,
          },
          $push: {
            "subtask_info.users": data.users,
          },
        }
      );
      return {
        data: result,
        status: 200,
      };
    }
  } catch (err) {
    console.log("err update Subtask --models.", err);
    throw err;
  }
};

//   delete Subtask
const deleteSubTask = async ({ subTaskID, taskListID }) => {
  try {
    const result = await SubTaskEntity.deleteOne({ _id: subTaskID });
    const redult2 = await TaskListEntity.findOneAndUpdate(
      { _id: taskListID },
      {
        $pull: {
          subTask_IDs: { subTask_ID: subTaskID },
        },
      }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete Subtask --models.", err);
    throw err;
  }
};

module.exports = {
  createSubTask,
  getAllSubTask,
  getSubTaskByTaskListID,
  editSubTask,
  deleteSubTask,
};

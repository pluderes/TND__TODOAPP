const SubtaskEntity = require("../entities/taskList_subtasks.entity");

//   create subtask
const createSubtask = async (body) => {
  try {
    const result = await SubtaskEntity.create(body);
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err create Subtask --models", err);
    throw err;
  }
};

// get all Subtask
const getAllSubtask = async ({ name }) => {
  try {
    const regexName = new RegExp(`${name}`);
    const query = {};
    if (name) query.name = regexName;

    const result = await SubtaskEntity.find(query).limit(20);
    return result;
  } catch (err) {
    console.log("err get all Subtask --models", err);
    throw err;
  }
};

//   update Subtask
const editSubtask = async ({ subtask_ID, data }) => {
  try {
    const result = await SubtaskEntity.findOneAndUpdate(
      { _id: subtask_ID },
      { $set: data }
    );
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err update Subtask --models", err);
    throw err;
  }
};

//   delete Subtask
const deleteSubtask = async ({ subtask_ID }) => {
  try {
    const result = await SubtaskEntity.deleteOne({ _id: subtask_ID });
    return {
      data: result,
      status: 200,
    };
  } catch (err) {
    console.log("err delete Subtask --models", err);
    throw err;
  }
};

module.exports = {
  createSubtask,
  getAllSubtask,
  editSubtask,
  deleteSubtask,
};

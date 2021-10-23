const User = require("./users.entity");
const Workspace = require("./workspace.entity");
const Tables = require("./tables.entity");
const Columns = require("./columns.entity");
const Cards = require("./cards.entity");
const Card_activities = require("./card_activities.entity");
const Card_comments = require("./card_comments.entity");
const Card_taskList = require("./card_taskList.entity");
const TaskList_subtasks = require("./taskList_subtasks.entity");

module.exports = {
  User,
  Workspace,
  Tables,
  Columns,
  Cards,
  Card_activities,
  Card_comments,
  Card_taskList,
  TaskList_subtasks,
};

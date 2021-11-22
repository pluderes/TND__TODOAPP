const User = require("./user.controller");
const Login = require("./login.controller");
const Workspace = require("./workspace.controller");
const Table = require("./table.controller");
const Column = require("./column.controller");
const Card = require("./card.controller");
const Comment = require("./card_comment.controller");
const Activity = require("./card_activity.controller");
const TaskList = require("./card_taskList.controller");
const SubTask = require("./taskList_subTask.controller");

module.exports = {
  User,
  Login,
  Workspace,
  Table,
  Column,
  Card,
  Comment,
  Activity,
  TaskList,
  SubTask,
};

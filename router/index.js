const express = require("express");
const userRoute = require("./user.route");
const loginRoute = require("./login.route");
const workspaceRoute = require("./workspace.route");
const tableRoute = require("./table.route");
const columnRoute = require("./column.route");
const cardRoute = require("./card.route");

const taskListRoute = require("./card_taskList.route");
const commentRoute = require("./card_comment.route");
const activityRoute = require("./card_activity.route");
const subTaskRoute = require("./taskList_subTask.route");

const MDW = require("../middlewares/authToken");
const app = express();

app.use("/user", userRoute);
app.use("/loginToken", MDW.required, loginRoute);
app.use("/login", loginRoute);
app.use("/workspace", workspaceRoute);
app.use("/table", tableRoute);
app.use("/column", columnRoute);
app.use("/card", cardRoute);

app.use("/taskList", taskListRoute);
app.use("/comment", commentRoute);
app.use("/activity", activityRoute);
app.use("/subTask", subTaskRoute);

module.exports = app;

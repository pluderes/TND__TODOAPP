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
app.use("/login", loginRoute);
app.use("/loginToken", MDW.required, loginRoute);
app.use("/workspace", MDW.required, workspaceRoute);
app.use("/table", MDW.required, tableRoute);
app.use("/column", MDW.required, columnRoute);
app.use("/card", MDW.required, cardRoute);

app.use("/taskList", MDW.required, taskListRoute);
app.use("/comment", MDW.required, commentRoute);
app.use("/activity", MDW.required, activityRoute);
app.use("/subTask", MDW.required, subTaskRoute);

module.exports = app;

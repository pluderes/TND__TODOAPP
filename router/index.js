const express = require("express");
const userRoute = require("./user.route");
const loginRoute = require("./login.route");
const workspaceRoute = require("./workspace.route");

const MDW = require("../middlewares/authToken");
const app = express();

app.use("/user", userRoute);
app.use("/login", MDW.required, loginRoute);
app.use("/workspace", workspaceRoute);
module.exports = app;

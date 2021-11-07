const express = require("express");
const userRoute = require("./user.route");
const loginRoute = require("./login.route");
const workspaceRoute = require("./workspace.route");

const MDW = require("../middlewares/authToken");
const app = express();

app.use("/user", userRoute);
app.use("/loginToken", MDW.required, loginRoute);
app.use("/login", loginRoute);
app.use("/workspace", workspaceRoute);
module.exports = app;

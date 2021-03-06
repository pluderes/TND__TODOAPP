require("dotenv").config();
const bodyParser = require("body-parser");
// local module
const { connect } = require("./config/dbConnect");
const Router = require("./router");
const cors = require("cors");
const express = require("express");
const app = express();

const POST = process.env.POST || 5001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connect();

app.use("/", Router);

app.listen(POST, () => console.log("run with mongoo on post " + POST));

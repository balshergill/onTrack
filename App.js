const express = require("express");
const cors = require("cors");
const journeyRouter = require("./routes/journeyRouter");
const getUser = require("./routes/userRouter");

const app = express();

app.use(cors());

app.use("/journey", journeyRouter);
app.use("/user", getUser);

app.use(express.json());

module.exports = app;

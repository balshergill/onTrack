const express = require('express');
const cors = require('cors');
const journeyRouter = require('./routes/journeyRouter');
const userRouter = require('./routes/userRouter');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser());

app.use(cors());

app.use('/journey', journeyRouter);
app.use('/user', userRouter);

app.use(express.json());

module.exports = app;

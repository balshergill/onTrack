const express = require('express');
const cors = require('cors');

const journeyRouter = require('./routes/journeyRouter');

const app = express();

app.use(cors());

app.use('/journey', journeyRouter);

app.use(express.json());

module.exports = app;

const express = require('express');
const userRouter = express.Router();

const { getUser } = require('../controllers/userController');

userRouter.route('/login').post(getUser);

module.exports = userRouter;

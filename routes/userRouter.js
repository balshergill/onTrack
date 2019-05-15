const app = require('express');
const userRouter = app.Router();
const { getUser }  = require('../controllers/userController');

userRouter.route('/user').get(getUser);

module.exports = userRouter;
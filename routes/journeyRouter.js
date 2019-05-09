const express = require('express');
const journeyRouter = express.Router();

const {
  getJourney,
  getFastest,
  getNext
} = require('../controllers/journeyController');

// journeyRouter.route('/f').get(getFastest);
// fastest is not currently working, issue with the callback argument being invoked in the model
journeyRouter.route('/n').get(getNext);
journeyRouter.route('/').get(getJourney);
// .all()

module.exports = journeyRouter;

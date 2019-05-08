const express = require('express');
const journeyRouter = express.Router();

const { getJourney } = require('../controllers/journeyController');

journeyRouter.route('/').get(getJourney);
// .all()

module.exports = { journeyRouter };

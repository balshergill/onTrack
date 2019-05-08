const { fetchLiveJourney } = require('../models/liveModels');

exports.getJourney = (req, res, next) => {
  fetchLiveJourney(req.params, req.query, (err, trains) => {
    if (err) console.log(err);
    // console.log(trains);
    res.status(200).json(trains);
  });
};

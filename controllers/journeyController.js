const { fetchLiveJourney } = require('../models/liveModels');

exports.getJourney = (req, res, next) => {
  fetchLiveJourney(req.params, req.query, (err, data) => {
    if (err) throw err;
    res.status(200).json(data);
  });
};

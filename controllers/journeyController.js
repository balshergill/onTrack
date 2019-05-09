const {
  fetchLiveJourney,
  fetchLiveFastest,
  fetchLiveNext
} = require('../models/liveModels');


exports.getJourney = (req, res, next) => {
  fetchLiveJourney(req.params, req.query, (err, data) => {
    if (err) throw err;
    res.status(200).json(data);
  });
};

exports.getNext = (req, res, next) => {
  fetchLiveNext(req.params, req.query, (err, data) => {
    if (err) throw err;
    res.status(200).json(data);
  });
};

exports.getFastest = (req, res, next) => {
  fetchLiveFastest(req.params, req.query, (err, data) => {
    if (err) throw err;
    res.status(200).json(data);
  });
};

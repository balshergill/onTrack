const {
  fetchLiveJourney,
  fetchLiveFastest,
  fetchLiveNext
} = require('../models/liveModels');

const { displayMinsLate } = require('../models/historicalModels');

exports.getJourney = function(req, res, next) {
  fetchLiveJourney(req.params, req.query).then(liveResult => {
    displayMinsLate(liveResult.trainServices, req.query).then(result => {
      console.log(result, '<<< sql result');
      res.status(200).json({
        liveResult,
        result
      });
    });
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

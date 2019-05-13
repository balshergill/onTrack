const {
  fetchLiveJourney,
  fetchLiveFastest,
  fetchLiveNext
} = require('../models/liveModels');

const { displayMinsLate } = require('../models/historicalModels');

exports.getJourney = function(req, res, next) {
  fetchLiveJourney(req.params, req.query).then(liveResult => {
    displayMinsLate(liveResult.trainServices, req.query).then(result => {
      console.log(result[0].rows, '<<< sql result 0');
      console.log(result[1].rows, '<<< sql result 1');
      console.log(result[2].rows, '<<< sql result 2');
      console.log(result[3].rows, '<<< sql result 3');
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

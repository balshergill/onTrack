const {
  fetchLiveJourney,
  fetchLiveFastest,
  fetchLiveNext
} = require('../models/liveModels');

exports.getJourney = (req, res, next) => {
  fetchLiveJourney(req.params, req.query, (err, data) => {
    if (err) throw err;
    let index = data.trainServices[0].subsequentCallingPoints.findIndex(
      stop => {
        return stop.crs === req.query.to;
      }
    );
    console.log(data.trainServices[0].origin.name);
    console.log(
      data.trainServices[0].subsequentCallingPoints[index].locationName
    );
    console.log(data.trainServices[0].subsequentCallingPoints[index].st);
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

const {
  fetchLiveJourney,
  fetchLiveFastest,
  fetchLiveNext
} = require("../models/liveModels");

const { displayMinsLate } = require("../models/historicalModels");

exports.getJourney = function(req, res, next) {
  console.log(req.params, req.query, "in controller");
  fetchLiveJourney(req.params, req.query).then(liveData => {
    let index = liveData.trainServices[0].subsequentCallingPoints.findIndex(
      stop => {
        return stop.crs === req.query.to;
      }
    );
    const stationFrom = liveData.trainServices[0].origin.name;
    const stationTo =
      liveData.trainServices[0].subsequentCallingPoints[index].locationName;
    const depTime = liveData.trainServices[0].subsequentCallingPoints[index].st;

    // const stationFrom = "Manchester Victoria";
    // const stationTo = "Manchester Oxford Road";
    // const depTime = "09:10:00";
    displayMinsLate(stationFrom, stationTo, depTime).then(historicData => {
      console.log(historicData[0].dep_minutes_late, "historicData");
      console.log({
        liveData: liveData,
        historicData: historicData[0].dep_minutes_late
      });
      res.status(200).json({
        liveData: liveData,
        historicData: historicData[0].dep_minutes_late
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

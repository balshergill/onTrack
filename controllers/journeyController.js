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
    // const stationFrom = liveData.trainServices[0].origin.name;
    // const stationTo =
    //   liveData.trainServices[0].subsequentCallingPoints[index].locationName;
    // const depTime = liveData.trainServices[0].subsequentCallingPoints[index].st;

    const stationFrom = "New Pudsey";
    const stationTo = "Bramley (West Yorkshire)";
    const depTime = "08:09:00";
    displayMinsLate(stationFrom, stationTo, depTime).then(historicData => {
      console.log(historicData[0].dep_minutes_late, "historicData");
      res.status(200).json({
        liveData: liveData,
        historicData: historicData[0].arr_minutes_late
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

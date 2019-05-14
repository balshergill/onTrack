const knex = require('../db/connection');
const { exactSearch } = require('../utils/crsSearch');

exports.displayMinsLate = (liveResult, req) => {
  let qArr = [];
  // console.log(req, 'REQ');
  // console.log(liveResult);
  for (let i = 0; i < liveResult.length; i++) {
    // const stationFrom = 'Hebden Bridge';
    // const stationTo = 'New Pudsey';
    // const depTime = '09:10:00';

    const index = liveResult[i].subsequentCallingPoints.findIndex(
      station => station.crs === req.to
    );

    const prevStop = liveResult[i].subsequentCallingPoints[index - 1];
    const stationFromTime = prevStop ? prevStop.st : liveResult[i].std;
    const stationFrom = prevStop
      ? prevStop.locationName
      : exactSearch(req.from)['Station Name'];
    const stationTo = exactSearch(req.to)['Station Name'];
    const arrTime = formatTime(stationFromTime);

    const qString =
      "SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='" +
      stationFrom +
      "' AND station_to='" +
      stationTo +
      "' AND sch_arr_time='" +
      arrTime +
      "';";
    qArr.push(qString);
  }

  const fullQString = qArr.join(' ');

  return knex.raw(fullQString);
};

const formatTime = time => {
  newTime = [...time];
  newTime[newTime.length] = ':00';
  return newTime.join('');
};

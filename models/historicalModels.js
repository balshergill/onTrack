const knex = require('../db/connection');

exports.displayMinsLate = (liveResult, req) => {
  let qArr = [];
  // console.log(req, 'REQ');

  for (let i = 0; i < liveResult.length; i++) {
    // const stationFrom = 'Hebden Bridge';
    // const stationTo = 'New Pudsey';
    // const depTime = '09:10:00';

    const index = liveResult[i].subsequentCallingPoints.findIndex(
      station => station.crs === req.to
    );

    // console.log(index);
    // console.log(liveResult[i].subsequentCallingPoints[index - 1]);
    // console.log(liveResult[i].subsequentCallingPoints[index]);
    const prevStop = liveResult[i].subsequentCallingPoints[index - 1];

    const stationFrom = prevStop.locationName; //liveResult[i].origin.name;
    const stationTo = liveResult[i].subsequentCallingPoints[index].locationName;
    const depTime = formatDepTime(prevStop.st);
    // console.log(stationFrom);
    // console.log(stationTo);
    // console.log(depTime);
    // const depTime = liveResult[i].std;
    // console.log(reformatDepTime(time));s
    // let reformatDeptime = [...depTime];
    // reformatDeptime[reformatDeptime.length] = ':00';

    const qString =
      "SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='" +
      stationFrom +
      "' AND station_to='" +
      stationTo +
      "' AND sch_arr_time='" +
      depTime +
      "';";
    // console.log(qString);
    qArr.push(qString);
  }

  const fullQString = qArr.join(' ');

  // const lessHardArr = `SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='Manchester Victoria' AND station_to='Manchester Oxford Road' AND sch_dep_time='09:10:00'; SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='Manchester Victoria' AND station_to='Manchester Oxford Road' AND sch_dep_time='09:10:00';`;

  return knex.raw(fullQString);
};

const formatDepTime = time => {
  newTime = [...time];
  newTime[newTime.length] = ':00';
  return newTime.join('');
};

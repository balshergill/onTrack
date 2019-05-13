const knex = require('../db/connection');

exports.displayMinsLate = (liveResult, req) => {
  let qArr = [];

  for (let i = 0; i < liveResult.length; i++) {
    const stationFrom = 'Manchester Victoria';
    const stationTo = 'Manchester Oxford Road';
    const depTime = '09:10:00';

    const index = liveResult[i].subsequentCallingPoints.find(
      station => station.crs === req.to
    );
    // const stationFrom = liveResult[i].origin.name;
    // const stationTo = index.locationName;
    // const depTime = liveResult[i].std;

    // let reformatDeptime = [...depTime];
    // reformatDeptime[reformatDeptime.length] = ':00';

    const qString =
      "SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='" +
      stationFrom +
      "' AND station_to='" +
      stationTo +
      "' AND sch_dep_time='" +
      depTime +
      "';";

    qArr.push(qString);
  }

  const fullQString = qArr.join(' ');

  const lessHardArr = `SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='Manchester Victoria' AND station_to='Manchester Oxford Road' AND sch_dep_time='09:10:00'; SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='Manchester Victoria' AND station_to='Manchester Oxford Road' AND sch_dep_time='09:10:00';`;

  return knex.raw(fullQString);
};

const knex = require('../db/connection');

exports.displayMinsLate = (liveResult, req) => {
  let qArr = [];
  // let qArr2 = [];

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

    // console.log(depTime, '<<< deptime');
    // console.log(stationFrom, '<<< station from');
    // console.log(stationTo, '<<< station to');

    const qString =
      "SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='" +
      stationFrom +
      "' AND station_to='" +
      stationTo +
      "' AND sch_dep_time='" +
      depTime +
      "';";

    qArr.push(qString.replace(/\//g, ''));

    // qArr2.push(
    //   `knex
    //     .select(
    //       knex.raw(
    //         'ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late'
    //       )
    //     )
    //     .from('historical_services')
    //     .where('station_from', '=', '${stationFrom}')
    //     .andWhere('station_to', '=', '${stationTo}')
    //     .andWhere('sch_dep_time', '=', ${depTime})`
    // );
  }

  const fullQString = qArr.join(' ');

  // console.log(fullQString, '<<< qArr'); 

  // console.log(qArr2, '<<< qArr2');

  // const hardArr = [
  //   `SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='Manchester Victoria' AND station_to='Manchester Oxford Road' AND sch_dep_time='09:10:00';`,
  //   `SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='Manchester Victoria' AND station_to='Manchester Oxford Road' AND sch_dep_time='09:10:00';`
  // ];

  const lessHardArr = `SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='Manchester Victoria' AND station_to='Manchester Oxford Road' AND sch_dep_time='09:10:00'; SELECT ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late FROM historical_services WHERE station_from='Manchester Victoria' AND station_to='Manchester Oxford Road' AND sch_dep_time='09:10:00';`;

  return knex.raw(fullQString);
};

const knex = require("../db/connection");

exports.displayMinsLate = (stationFrom, stationTo, scheduledDep) => {
  return knex
    .select(knex.raw("ROUND(AVG(arr_minutes_late),2) AS arr_minutes_late"))
    .from("historical_services")
    .where("station_from", "=", stationFrom)
    .andWhere("station_to", "=", stationTo)
    .andWhere("sch_dep_time", "=", scheduledDep);
};

// SELECT
// SELECT DATEPART(YEAR, Date) as [Year],
//   DATEPART(MONTH, Date) as [Month],
//   SUM(COALESCE(NULLIF(Actual, 0), NULLIF(Estimated, 0), Original)
// FROM YourTable
//

// let service_rate = knex.raw("COALESCE(AVG(service_rate), 0) as service_rate");
//SELECT AVG(COALESCE(arr_minutes_late, 0)) as forced_average

// .select(
//   knex.raw("ROUND(AVG(COALESCE(arr_minutes_late, 0),2) AS arr_minutes_late")
// )

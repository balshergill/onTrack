const knex = require("../db/connection");

exports.displayMinsLate = (stationFrom, stationTo, scheduledDep) => {
  return knex
    .select(
      knex.raw(
        "ROUND(AVG(COALESCE(dep_minutes_late, 0)),2) + ROUND(AVG(COALESCE(cancelled, 0)),2) AS dep_minutes_late"
      )
    )
    .from("historical_services")
    .where("station_from", "=", stationFrom)
    .andWhere("station_to", "=", stationTo)
    .andWhere("sch_dep_time", "=", scheduledDep);
};

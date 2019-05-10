const knex = require("../db/connection");

exports.displayMinsLate = (stationFrom, stationTo, scheduledDep) => {
  return knex
    .select(knex.raw("ROUND(AVG(arr_minutes_late),2) AS arr_minutes_late"))
    .from("historical_services")
    .where("station_from", "=", stationFrom)
    .andWhere("station_to", "=", stationTo)
    .andWhere("sch_dep_time", "=", scheduledDep);
};

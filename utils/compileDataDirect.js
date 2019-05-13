const knex = require('../db/connection');
const axios = require('axios');
const moment = require('moment');
const { RTTuser, RTTpassword } =
  process.env === 'production' ? process.env : require('../keys');

const yesterday = moment().subtract(1, 'day');
const day = yesterday.format('DD');
const month = yesterday.format('MM');
const year = yesterday.format('YYYY');
const service = process.argv[process.argv.length - 1];

// console.log(process.argv[process.argv.length - 1], 'ARGS');
// yesterday.format('YYYY-MM-DD')

// const exists = moment({ year: 2019, month: 3, day: 17 });
// const noExist = moment({ year: 2020, month: 3, day: 17 });
// const exampleData = require('../db/data/raw-data/20190404.json');
// console.log(exampleData);

exports.compileDataDirect = () => {
  console.log('compDataDirect');
  return new Promise(function(resolve, reject) {
    return lastEntry().then(data => {
      if (data.length === 0) {
        axios
          .get(
            `https://api.rtt.io/api/v1/json/service/${service}/${year}/${month}/${day}`,
            {
              auth: { username: RTTuser, password: RTTpassword }
            }
          )
          .then(apiData => {
            return compileData(apiData.data).then(compiledData => {
              return resolve(compiledData);
            });
          });
      } else {
        console.log(
          `data for ${service} on ${day}-${month}-${day} is already in the database.`
        );
      }
    });
  });
};

lastEntry = () => {
  return knex
    .select('*')
    .from('historical_services')
    .where('run_date', '=', yesterday)
    .orderBy('run_date', 'desc')
    .limit(1);
};

compileData = dataToEdit => {
  return new Promise(function(resolve, reject) {
    const data = [];
    for (let i = 0; i < dataToEdit.locations.length; i++) {
      let wantedData;
      if (i < dataToEdit.locations.length - 1) {
        wantedData = {
          service_id: dataToEdit.serviceUid,
          run_date: dataToEdit.runDate,
          station_from: dataToEdit.locations[i].description,
          station_to: dataToEdit.locations[i + 1].description,
          final_station: dataToEdit.locations[i].destination[0].description,
          sch_dep_time: dataToEdit.locations[i].gbttBookedDeparture,
          act_dep_time: dataToEdit.locations[i].realtimeDeparture,
          dep_minutes_late:
            dataToEdit.locations[i].realtimeGbttDepartureLateness,
          sch_arr_time: dataToEdit.locations[i].gbttBookedArrival,
          act_arr_time: dataToEdit.locations[i].realtimeArrival,
          arr_minutes_late: dataToEdit.locations[i].realtimeGbttArrivalLateness,
          cancelled: dataToEdit.locations[i].cancelReasonLongText ? 60 : 0,
          cancelled_reason: dataToEdit.locations[i].cancelReasonLongText
        };
      } else {
        wantedData = {
          service_id: dataToEdit.serviceUid,
          run_date: dataToEdit.runDate,
          station_from: dataToEdit.locations[i].description,
          station_to: dataToEdit.locations[i].description,
          final_station: dataToEdit.locations[i].destination[0].description,
          sch_dep_time: dataToEdit.locations[i].gbttBookedDeparture,
          act_dep_time: dataToEdit.locations[i].realtimeDeparture,
          dep_minutes_late:
            dataToEdit.locations[i].realtimeGbttDepartureLateness,
          sch_arr_time: dataToEdit.locations[i].gbttBookedArrival,
          act_arr_time: dataToEdit.locations[i].realtimeArrival,
          arr_minutes_late: dataToEdit.locations[i].realtimeGbttArrivalLateness,
          cancelled: dataToEdit.locations[i].cancelReasonLongText ? 60 : 0,
          cancelled_reason: dataToEdit.locations[i].cancelReasonLongText
        };
      }
      data.push(wantedData);
    }
    console.log('compiled');
    resolve(data);
  });
};

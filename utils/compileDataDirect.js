const knex = require('../db/connection');
const axios = require('axios');
const moment = require('moment');

const yesterday = moment().subtract(1, 'day');
const day = yesterday.format('DD');
const month = yesterday.format('MM');
const year = yesterday.format('YYYY');
// yesterday.format('YYYY-MM-DD')

const exists = moment({ year: 2019, month: 3, day: 17 });
const noExist = moment({ year: 2020, month: 3, day: 17 });
const exampleData = require('../db/data/raw-data/20190404.json');
// console.log(exampleData);

const lastEntry = () => {
  return knex
    .select('run_date')
    .from('historical_services')
    .where('run_date', '=', noExist);
};

lastEntry().then(data => {
  if (!data[0]) {
    // axios request to:
    console
      .log(
        `https://api.rtt.io/api/v1/json/service/Y52118/${year}/${month}/${day}`
      )
      .then(data => {});
  }
});

compileDataDirect = () => {
  // axios
  //   .get(
  //     // 'https://api.rtt.io/api/v1/json/service/Y52118/${year}/${month}/${day}',
  //     {
  //       auth: basicAuth
  //     }
  //   )
  //   .then(data => {});
};

// return new Promise(function(resolve, reject) {
//   fs.readdir(directoryPath, function(err, files) {
//     const data = [];
//     if (err) return console.log(err);
//     else {
//       files.forEach(function(file) {
//         let contents = fs.readFileSync(`${directoryPath}/${file}`, 'utf8');
//         const dataToEdit = JSON.parse(contents);
//         for (let i = 0; i < dataToEdit.locations.length; i++) {
//           let wantedData;
//           if (i < dataToEdit.locations.length - 2) {
//             wantedData = {
//               service_id: dataToEdit.serviceUid,
//               run_date: dataToEdit.runDate,
//               station_from: dataToEdit.locations[i].description,
//               station_to: dataToEdit.locations[i + 1].description,
//               final_station:
//                 dataToEdit.locations[i].destination[0].description,
//               sch_dep_time: dataToEdit.locations[i].gbttBookedDeparture,
//               act_dep_time: dataToEdit.locations[i].realtimeDeparture,
//               dep_minutes_late:
//                 dataToEdit.locations[i].realtimeGbttDepartureLateness,
//               sch_arr_time: dataToEdit.locations[i].gbttBookedArrival,
//               act_arr_time: dataToEdit.locations[i].realtimeArrival,
//               arr_minutes_late:
//                 dataToEdit.locations[i].realtimeGbttArrivalLateness,
//               cancelled: dataToEdit.locations[i].cancelReasonLongText
//                 ? 60
//                 : 0,
//               cancelled_reason: dataToEdit.locations[i].cancelReasonLongText
//             };
//           } else {
//             wantedData = {
//               service_id: dataToEdit.serviceUid,
//               run_date: dataToEdit.runDate,
//               station_from: dataToEdit.locations[i].description,
//               station_to: dataToEdit.locations[i].description,
//               final_station:
//                 dataToEdit.locations[i].destination[0].description,
//               sch_dep_time: dataToEdit.locations[i].gbttBookedDeparture,
//               act_dep_time: dataToEdit.locations[i].realtimeDeparture,
//               dep_minutes_late:
//                 dataToEdit.locations[i].realtimeGbttDepartureLateness,
//               sch_arr_time: dataToEdit.locations[i].gbttBookedArrival,
//               act_arr_time: dataToEdit.locations[i].realtimeArrival,
//               arr_minutes_late:
//                 dataToEdit.locations[i].realtimeGbttArrivalLateness,
//               cancelled: dataToEdit.locations[i].cancelReasonLongText
//                 ? 60
//                 : 0,
//               cancelled_reason: dataToEdit.locations[i].cancelReasonLongText
//             };
//           }
//           data.push(wantedData);
//         }
//       });
//     }
//     newData = JSON.stringify(data);
//     console.log('compiled');
//     resolve(data);
//   });
// });

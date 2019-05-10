const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "../") + "db/data/raw-data";
console.log(directoryPath);

exports.compileData = () => {
  return new Promise(function(resolve, reject) {
    fs.readdir(directoryPath, function(err, files) {
      const data = [];
      if (err) return console.log(err);
      else {
        console.log(files.length);
        files.forEach(function(file) {
          let contents = fs.readFileSync(`${directoryPath}/${file}`, "utf8");
          const dataToEdit = JSON.parse(contents);
          let wantedData;
          for (let i = 0; i < dataToEdit.locations.length; i++) {
            if (i < dataToEdit.locations.length - 2) {
              wantedData = {
                service_id: dataToEdit.serviceUid,
                run_date: dataToEdit.runDate,
                station_from: dataToEdit.locations[i].description,
                station_to: dataToEdit.locations[i + 1].description,
                final_station:
                  dataToEdit.locations[i].destination[0].description,
                sch_dep_time: dataToEdit.locations[i].gbttBookedDeparture,
                act_dep_time: dataToEdit.locations[i].realtimeDeparture,
                dep_minutes_late:
                  dataToEdit.locations[i].realtimeGbttDepartureLateness,
                sch_arr_time: dataToEdit.locations[i].gbttBookedArrival,
                act_arr_time: dataToEdit.locations[i].realtimeArrival,
                arr_minutes_late:
                  dataToEdit.locations[i].realtimeGbttArrivalLateness,
                cancelled: dataToEdit.locations[i].cancelReasonLongText
                  ? 60
                  : 0,
                cancelled_reason: dataToEdit.locations[i].cancelReasonLongText
              };
            } else {
              wantedData = {
                service_id: dataToEdit.serviceUid,
                run_date: dataToEdit.runDate,
                station_from: dataToEdit.locations[i].description,
                station_to: dataToEdit.locations[i].description,
                final_station:
                  dataToEdit.locations[i].destination[0].description,
                sch_dep_time: dataToEdit.locations[i].gbttBookedDeparture,
                act_dep_time: dataToEdit.locations[i].realtimeDeparture,
                dep_minutes_late:
                  dataToEdit.locations[i].realtimeGbttDepartureLateness,
                sch_arr_time: dataToEdit.locations[i].gbttBookedArrival,
                act_arr_time: dataToEdit.locations[i].realtimeArrival,
                arr_minutes_late:
                  dataToEdit.locations[i].realtimeGbttArrivalLateness,
                cancelled: dataToEdit.locations[i].cancelReasonLongText
                  ? 60
                  : 0,
                cancelled_reason: dataToEdit.locations[i].cancelReasonLongText
              };
            }
          }
          data.push(wantedData);
        });
      }
      newData = JSON.stringify(data);
      resolve(data);
    });
  });
};

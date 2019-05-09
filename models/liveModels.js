const { rail } = require('../keys');
const stations = require('../station_codes.json');

// console.log(stations[0]['CRS Code'] === 'LDS');

const stationInfo = (startCrs, endCrs) => {
  let result = {
    start: null,
    end: null
  };
  let i = 0;
  while (!result.start || !result.end) {
    let stCrs = stations[i]['CRS Code'];
    if (stCrs === startCrs) {
      result.start = stations[i];
    }
    if (stCrs === endCrs) {
      result.end = stations[i];
    }
    i++;
  }
  return result;
};

console.log(stationInfo('LDS', 'YRK'));

exports.fetchLiveJourney = (params, query, callback) => {
  const destination = query.to;
  rail.getDepartureBoard(query.from, { destination }, (err, result) => {
    if (err) throw err;
    callback(null, result);
  });
};

// exports.fetchLiveFastest = (params, query, callback) => {
//   console.log('in model', query.from, query.to);
//   console.log(callback);
//   rail.getDepartureBoard(query.from, query.to, {}, (err, result) => {
//     if (err) throw err;
//     callback(null, result);
//   });
// };

exports.fetchLiveNext = (params, query, callback) => {
  rail.getNextDeparture(query.from, query.to, {}, (err, result) => {
    if (err) throw err;
    callback(null, result);
  });
};

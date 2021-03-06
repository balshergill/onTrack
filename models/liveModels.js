const { TOKEN } =
  process.env.NODE_ENV === 'production' ? process.env : require('../keys');
const stations = require('../station_codes.json');
const Rail = require('national-rail-darwin');
const rail = new Rail(TOKEN);

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

exports.fetchLiveJourney = (params, query) => {
  return new Promise(function(resolve, reject) {
    const destination = query.to;
    rail.getDepartureBoardWithDetails(
      query.from,
      { destination },
      (err, result) => {
        if (err) throw err;
        resolve(result);
      }
    );
  });
};

exports.fetchLiveFastest = (params, query, callback) => {
  console.log('in model', query.from, query.to);
  console.log(callback);
  rail.getDepartureBoard(query.from, query.to, {}, (err, result) => {
    if (err) throw err;
    callback(null, result);
  });
};

exports.fetchLiveNext = (params, query, callback) => {
  rail.getNextDeparture(query.from, query.to, {}, (err, result) => {
    if (err) throw err;
    callback(null, result);
  });
};

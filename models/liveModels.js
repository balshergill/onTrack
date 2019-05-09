const { rail } = require('../keys');

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

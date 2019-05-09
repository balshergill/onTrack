const { rail } = require('../keys');

exports.fetchLiveJourney = (params, query, callback) => {
  const destination = query.to;
  rail.getDepartureBoard(query.from, { destination }, (err, result) => {
    if (err) throw err;
    callback(null, result);
  });
};

const { rail } = require('../keys');

exports.fetchLiveJourney = (params, query, callback) => {
  console.log(params, query);
  rail.getDepartureBoard('LDS', {}, (err, result) => {
    if (err) throw err;
    callback(null, result);
  });
};

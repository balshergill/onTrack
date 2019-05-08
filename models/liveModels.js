const rail = require('../keys');

exports.fetchLiveJourney = (params, query, callback) => {
  // console.log(rail);
  rail.getDepartureBoard('LDS', {}, (err, result) => {
    if (err) throw err;
    callback(null, result);
  });
};

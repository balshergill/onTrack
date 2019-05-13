const { compileData } = require('../../utils/compileData');
const { compileDataDirect } = require('../../utils/compileDataDirect');

exports.seed = function(knex, Promise) {
  if (process.argv[process.argv.length - 1].match(/[A-Z\d]{6}/g)) {
    return compileDataDirect().then(data => {
      return knex
        .insert(data)
        .into('historical_services')
        .returning('*');
    });
  } else {
    return compileData().then(data => {
      return knex
        .insert(data)
        .into('historical_services')
        .returning('*');
    });
  }
};

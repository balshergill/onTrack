const { compileData } = require('../../utils/compileData');

exports.seed = function(knex, Promise) {
  return compileData().then(data => {
    return knex
      .insert(data)
      .into('historical_services')
      .returning('*');
  });
};

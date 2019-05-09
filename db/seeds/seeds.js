const { compileData } = require('../../utils/compileData');

exports.seed = function(knex, Promise) {
  console.log('seed');
  // data = [
  //   {
  //     service_id: 'Y52118',
  //     run_date: '2019-04-17',
  //     station_from: 'Manchester Victoria',
  //     station_to: 'Rochdale',
  //     final_station: 'Leeds',
  //     sch_dep_time: '0655',
  //     act_dep_time: '0655'
  //   }
  // ];
  compileData().then(data => {
    console.log('data');
    return knex
      .insert(data)
      .into('historical_services')
      .returning('*');
  });
};

// compileData().then(data => {
//   return function(knex, Promise) {
//     console.log(data, 'data');
//     return knex
//       .insert(data)
//       .into('historical_services')
//       .returning('*');
//   };
// });

//   console.log('SEED');
//   // console.log(compileData());
//   compileData().then(data => {
//     console.log(data);
//   });
//   // compileData(function(err, result) {
//   //   if (err) console.log(err);
//   //   console.log(result);
//   //   return knex
//   //     .insert(result)
//   //     .into('historical_services')
//   //     .returning('*');
//   // });

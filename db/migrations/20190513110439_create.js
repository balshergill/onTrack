exports.up = function(knex, Promise) {
  return knex.schema.createTable('historical_services', table => {
    table
      .increments('id')
      .primary()
      .notNullable();
    table.string('service_id');
    table.date('run_date');
    table.string('station_from').notNullable();
    table.string('station_to').notNullable();
    table.string('final_station').notNullable();
    table.time('sch_dep_time');
    table.time('act_dep_time');
    table.integer('dep_minutes_late').defaultTo(0);
    table.time('sch_arr_time');
    table.time('act_arr_time');
    table.integer('arr_minutes_late').defaultTo(0);
    table.integer('cancelled').defaultTo(0);
    table.string('cancelled_reason').defaultTo(null);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('historical_services');
};

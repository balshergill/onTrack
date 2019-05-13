// const knex = knex(dbConfig);

const dbConfig =
  process.env.NODE_ENV === 'production'
    ? {
        client: 'pg',
        connection: `${process.env.DATABASE_URL}?ssl=true`,
        multipleStatements: true
      }
    : require('../knexfile');

const connection = require('knex')(dbConfig);
module.exports = connection;

// module.exports = knex;

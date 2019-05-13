## backend dependencies
    - `axios` - 0.18.0
    - `cors` - 2.8.5
    - `express` - 4.16.4
    - `knex` - 0.16.5
    (- `moment` - 2.24.0)
    - `national-rail-darwin` - 1.0.8
    - `pg - 7.10.0`
    
##### testing done with `chai` 4.2.0 and `supertest` 4.0.2

## Keys

A `keys.js` file is needed to make queries to the National Rail Live Departure Board Web Service. It should look like this:

`
const TOKEN = /*token here*/;

const Rail = require('national-rail-darwin');
const rail = new Rail(TOKEN);

module.exports = { rail };
`

You can register for an account to access the LDB web service [here](https://www.nationalrail.co.uk/100296.aspx), along with the four other data feeds.

## Database

A `knexfile.js` is needed to use the database once you have set it up (see the scripts below). It should look like this:

`
const ENV = process.env.NODE_ENV || 'development';
const { DATABASE_URL } = process.env;

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

const customConfigs = {
  development: {
    connection: {
      database: 'historical_trains',
      username: /*username */,
      password: /*password */
    }
  },
  test: {
    connection: {
      database: 'historical_trains',
      username: /*username */,
      password: /*password */
    }
  },
  production: {
    connection: `${DATABASE_URL}?ssl=true`
  }
};

module.exports = {
  ...baseConfig,
  ...customConfigs[ENV]
};
`
The `username` and `password` strings will be the username and password you provided when setting up PostgreSQL.

### scripts:

    - "setup-db": "psql -f ./db/setup.sql && NODE_ENV=test knex seed:run" // do not run with argument
    - "create-db": "psql -f ./db/setup.sql"
    - "seed-service": "NODE_ENV=test knex seed:run" // takes argument of serviceid (eg: npm run seed-service -- Y52118 )

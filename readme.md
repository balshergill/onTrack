# onTrack - A rail service reliability app

Designed to help rail users make better decisions when planning their journeys.

Gives a visual indication of reliability on a particular service, based on historic records. 

Allows users to:
 - search for and see future train times,
 - see an indication of the reliability of each service
 - purchase tickets

Reliability is assessed by taking the average number of minutes that particular journey has been late over the past 20 working days - also takes into account cancellations. 

Please see the presentation and demo video included in the root of the repo for more information.

## backend dependencies

- `axios` - 0.18.0
- `cors` - 2.8.5
- `express` - 4.16.4
- `knex` - 0.16.5
- `moment` - 2.24.0
- `national-rail-darwin` - 1.0.8
- `pg - 7.10.0`

testing done with `chai` 4.2.0 and `supertest` 4.0.2

## Keys

A `keys.js` file is needed to make queries to the National Rail Live Departure Board Web Service. It should look like this:

```javascript

const TOKEN = /*national-rail-darwin token here*/;
const RTTuser = /*username for realtimetrains.co.uk*/;
const RTTpassword = /*password for realtimetrains.co.uk*/;

module.exports = { TOKEN, RTTuser, RTTpassword };
```

You can register for an account to access the LDB web service [here](https://www.nationalrail.co.uk/100296.aspx), along with the four other data feeds. You can register for realTimeTrains [here](http://www.realtimetrains.co.uk/about/developer).

## Database

A `knexfile.js` is needed to query the database once you have set it up (see the scripts below). It should look like this:

```javascript
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

```

The `username` and `password` strings will be the username and password you provided when setting up PostgreSQL.

## scripts:

run:
- ```npm run setup-db``` to reset the DB and seed with the data in ```db/data/raw-data```
- ```npm run create-db``` to drop and recreate the empty database
- ```npm run seed-service --/*serviceID*/``` (e.g. `Y52118` ) to seed the database with the data from the previous day
- ```npm run seed:prod``` to seed the production database

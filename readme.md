#scripts:

    - "setup-db": "psql -f ./db/setup.sql && NODE_ENV=test knex seed:run" // do not run with argument
    - "create-db": "psql -f ./db/setup.sql"
    - "seed-service": "NODE_ENV=test knex seed:run" // takes argument of serviceid (eg: npm run seed-service -- Y52118 )

import knex from 'knex';
import configuration from '../../knexfile'

let connection:knex;

if (process.env.NODE_ENV === "test") {
    connection = knex(configuration.test)
  } else {
    connection = knex(configuration.development)
  }

export {connection}
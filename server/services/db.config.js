const env = require('../core/helpers/env');

module.exports = {
  client: env('DB_CLIENT'),
  connection: {
    host: env('DB_HOST'),
    user: env('DB_USER'),
    password: env('DB_PASS'),
    database: env('DB_NAME')
  },
  migrations: {
    directory: './migrations/'
  },
  seeds: {
    directory: './seeds/'
  }
}
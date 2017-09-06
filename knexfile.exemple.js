// Update with your config settings.

module.exports = {

  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
  },
  migrations: {
    directory: './server/migrations/'
  },
  seeds: {
    directory: './server/seeds/'
  }

};

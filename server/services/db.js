const knex = require('knex');
const knexConfig = require('./db.config');

module.exports = knex(knexConfig);
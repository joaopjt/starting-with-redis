const knex = require('knex');
const env = require('./core/helpers/env');
const knexConfig = ('./knex.config');

let appGlobals = {
  server: {
    host: env('SERVER_HOST'),
    port: env('SERVER_PORT'),
    routes: {
      files: {
        relativeTo: process.cwd() + '/public'
      }
    }
  },
  https: {
    enable: false,
    options: {}
  }
}

global.env = env;
global.App = appGlobals;
global.DB = knex(knexConfig);
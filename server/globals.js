const env = require('./core/helpers/env');

// Services Load
const DB = require('./services/db');
const Cache = require('./services/cache');

let appConfig = {
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
  },
  redis: {
    enable: true,
    config: {
      host: env('REDIS_HOST'),
      port: env('REDIS_PORT')
    }
  }
}

// Set methods and objects in global scope
global.env = env;
global.App = appConfig;
global.DB = DB;
global.CACHE = Cache;
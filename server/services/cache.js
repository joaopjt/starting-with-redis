const env = require('../core/helpers/env');
const redis = require('redis');
let cache = null;

if (env('REDIS_ENABLE')) {
  var config = {
    host: env('REDIS_HOST'),
    port: env('REDIS_PORT')
  };

  cache = redis.createClient(config);

  setListeners(cache);
}

module.exports = cache;

function setListeners(client) {
  client.on("ready", function() {
    console.log("REDIS SERVICE IS READY");  
  });

  client.on("error", function (err) {
    console.log("REDIS SERVICE ERROR: " + err);
  }); 
}




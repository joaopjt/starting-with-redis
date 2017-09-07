const Inert = require('inert');

module.exports = function(server) {
  server.register({ register: Inert })
    .catch(function(err) {
      console.log(err);
    });
}
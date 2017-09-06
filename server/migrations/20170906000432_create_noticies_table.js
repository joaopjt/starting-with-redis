
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('noticies', function(t) {
    t.increments();
    t.string('title');
    t.string('subtitle');
    t.string('content');
    t.string('image');
    t.timestamps(true, true);
  })
    .then(function() {
      console.log("CREATED 'noticies' table with success!");
    })
    .catch(function(err) {
      console.log("ERROR at try to create 'noticies' table! ", err);
    });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('noticies')
    .then(function() {
      console.log("DROPPED 'noticies' table with success!");
    })
    .catch(function(err) {
      console.log("ERROR at try to drop 'noticies' table! ", err);
    });
};

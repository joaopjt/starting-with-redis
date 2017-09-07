const redis = require('redis');
const cacheKey = 'notices';

module.exports = {
  getNotices: function(req, res) {
    hasCache(cacheKey)
      .then(function(cached) {
        var cachedNotices = JSON.parse(cached);
        res(cachedNotices);
      })
      .catch(function(err) {
        if (!err) {
         
          DB('noticies')
            .select()
            .then(function(result) {
              if (result.length >= 1) {
                var notices = JSON.stringify(result);
                CACHE.set(cacheKey, notices);

                res(result);
              }
            });

        } else {
          res(err).code(501);
        }
      });
  },

  deleteNotice: function(req, res) {
    const params = req.params;

    console.log(params);

    DB('noticies')
      .where({
        id: params.id
      })
      .delete()
      .then(function() {
        
        cleanCache(cacheKey)
          .then(function() {
            res().code(204);
          })
          .catch(function(err) {
            res(err).code(500);
          });

      })
      .catch(function(err) {
        res(err).code(500);
      });
  } 
}

function hasCache(key) {
  return new Promise(function(resolve, reject) {
    CACHE.get(key, function(err, cached) {
      if (!err && cached !== null) {
        resolve(cached);
      } else {
        reject(err);
      }
    })
  });
}

function cleanCache(key) {
  return new Promise(function(resolve, reject) {
    CACHE.del(key, function(err, reply) {
      console.log(reply);
      (!err) ? resolve() : reject(err);
    });
  })
}
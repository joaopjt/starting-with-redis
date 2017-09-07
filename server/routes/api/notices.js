const Joi = require('joi');
const notices = require('../../controllers/api/notices');

module.exports = function(app) {
  app.route({
    method: 'GET',
    path: '/notices',
    handler: notices.getNotices
  });

  app.route({
    method: 'DELETE',
    path: '/notices/{id}',
    handler: notices.deleteNotice,
    config: {
      validate: {
        params: {
          id: Joi.number().integer().required()
        }
      }
    }
  })
}
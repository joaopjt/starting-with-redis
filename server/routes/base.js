module.exports = function(app) {

  app.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: function(req, res) {
      res('').type('image/x-icon').code(200);
    }
  });

  app.route({
    method: 'GET',
    path: '/createNoticies',
    handler: function(req, res) {
      let noticies = [];

      for (var i = 3; i < 100; i++) {
        noticies.push({ 
          title: `Notice ${i}`,
          subtitle: `Subtitle of notice ${i}`,
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint cumque nesciunt corporis et perferendis dolorum nulla dicta voluptatem repudiandae? Earum eaque omnis vero, quibusdam, praesentium distinctio placeat asperiores quas aut?',
          image: 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        });

        console.log(i);
      }

      DB('noticies')
        .insert(noticies)
        .then(function() {
          console.log('ADDED NEW NOTIICES IN DATABSE');
          res().code(204);
        });
      
    }
  });
  
}
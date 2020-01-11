const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy(['/sample/helloworld'], { target: 'http://localhost:5000' }));
};

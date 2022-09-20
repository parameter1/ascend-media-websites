const template = require('@ascend-media/package-daily/templates/search');

module.exports = (app) => {
  app.get('/search', (_, res) => { res.marko(template); });
};

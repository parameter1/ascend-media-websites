const template = require('@ascend-media/package-global/templates/search');

module.exports = (app) => {
  app.get('/search', (_, res) => { res.marko(template); });
};

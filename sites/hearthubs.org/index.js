const newrelic = require('newrelic');
const cleanResponse = require('@parameter1/base-cms-marko-core/middleware/clean-marko-response');
const { startServer } = require('@parameter1/base-cms-marko-web');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');
const document = require('./server/components/document');
const errorTemplate = require('./server/templates/error');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  errorTemplate,
  routes,
  document,
  onStart: async (app) => {
    app.set('trust proxy', 'loopback, linklocal, uniquelocal');
    app.use(cleanResponse());
  },
  onAsyncBlockError: newrelic.noticeError.bind(newrelic),
}).then(() => log('Website started!')).catch((e) => setImmediate(() => { throw e; }));

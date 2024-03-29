const startServer = require('@ascend-media/package-daily/start-server');
const errorTemplate = require('@ascend-media/package-daily/templates/error');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  errorTemplate,
}).then(() => log('Website started!')).catch((e) => setImmediate(() => { throw e; }));

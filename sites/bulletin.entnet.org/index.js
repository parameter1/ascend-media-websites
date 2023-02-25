const startServer = require('@ascend-media/package-daily/start-server');
const document = require('@ascend-media/package-bulletin/components/document');
const components = require('@ascend-media/package-bulletin/components');
const fragments = require('@ascend-media/package-bulletin/fragments');
const errorTemplate = require('@ascend-media/package-bulletin/templates/error');

const pkg = require('./package.json');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  website: pkg.website,
  coreConfig,
  siteConfig,
  document,
  components,
  fragments,
  errorTemplate,
  routes,
}).then(() => log('Website started!')).catch((e) => setImmediate(() => { throw e; }));

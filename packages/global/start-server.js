const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const cleanResponse = require('@parameter1/base-cms-marko-core/middleware/clean-marko-response');
const RSSFeedRoute = require('./routes/feed');
const nativeStoriesRoute = require('./routes/native-x');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');

const buildNativeXConfig = require('./native-x/build-config');

const pushdownCookieFinder = require('./middleware/pushdown-cookie-finder');

const routes = (siteRoutes) => (app) => {
  nativeStoriesRoute(app);
  // Load RSS Feed Redirect route
  RSSFeedRoute(app);
  // Load site routes.
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  return startServer({
    ...options,
    routes: routes(options.routes),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    ...(options.errorTemplate && { errorTemplate: options.errorTemplate }),
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      if (gamConfig) set(app.locals, 'GAM', gamConfig);

      // Setup NativeX.
      const nativeXConfig = getAsObject(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', buildNativeXConfig(nativeXConfig));

      // Clean all response bodies.
      app.use(cleanResponse());

      // Use cookieFinder middleware
      app.use(pushdownCookieFinder());
    },
    onAsyncBlockError: (e) => newrelic.noticeError(e),
  });
};

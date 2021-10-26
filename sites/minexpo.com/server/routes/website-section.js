const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const MarkoWebSearchConfig = require('@parameter1/base-cms-marko-web-search/config');
const MarkoWebSearch = require('@parameter1/base-cms-marko-web-search');
const leadersFragment = require('@ascend-media/package-common/graphql/fragments/leaders-section');
const directory = require('@ascend-media/package-minexpo/templates/website-section/directory');
const section = require('../templates/website-section');
const contactUs = require('../templates/website-section/contact-us');
const leaders = require('../templates/website-section/leaders');
const queryFragment = require('../graphql/fragments/website-section-page');

module.exports = (app) => {
  const searchMiddleware = config => (req, res, next) => {
    res.locals.$markoWebSearch = new MarkoWebSearch({
      config: new MarkoWebSearchConfig(config || {
        resultsPerPage: { default: 18 },
        contentTypes: ['Company'],
      }),
      query: {
        ...req.query,
      },
    });
    next();
  };
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(directory)', searchMiddleware(), withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(directory/[a-z0-9-/]+)', searchMiddleware(), withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(export-directory)', searchMiddleware(), withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(export-directory/[a-z0-9-/]+)', searchMiddleware(), withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};

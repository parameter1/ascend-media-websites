const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ascend-media/package-daily/graphql/fragments/website-section-page');
const section = require('@ascend-media/package-daily/templates/website-section');
const exhibitors = require('@ascend-media/package-daily/templates/website-section/exhibitors');

module.exports = (app) => {
  app.get('/:alias(featured-exhibitors)', withWebsiteSection({
    template: exhibitors,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};

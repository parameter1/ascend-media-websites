const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ascend-media/package-global/graphql/fragments/website-section-page');
const section = require('@ascend-media/package-global/templates/website-section');
const nativeX = require('@ascend-media/package-global/templates/website-section/native-x');
const exhibitors = require('../../templates/website-section/featured-exhibitors');

module.exports = (app) => {
  app.get('/:alias(featured-exhibitors)', withWebsiteSection({
    template: exhibitors,
    queryFragment,
  }));

  app.get('/:alias(industry-highlights)', withWebsiteSection({
    template: nativeX,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};

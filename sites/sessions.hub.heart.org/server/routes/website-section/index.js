const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ascend-media/package-global/graphql/fragments/website-section-page');
const section = require('@ascend-media/package-global/templates/website-section');

module.exports = (app) => {
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};

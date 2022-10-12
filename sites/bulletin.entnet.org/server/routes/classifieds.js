const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ascend-media/package-daily/graphql/fragments/website-section-page');
const classifieds = require('../templates/website-section/classifieds');

module.exports = (app) => {
  app.get('/:alias(classifieds)', withWebsiteSection({
    template: classifieds,
    queryFragment,
  }));
};

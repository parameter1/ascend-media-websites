const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ascend-media/package-daily/graphql/fragments/content-list');
const aboutTheBulletin = require('../templates/website-section/about-the-bulletin');

module.exports = (app) => {
  app.get('/:alias(about-the-bulletin)', withWebsiteSection({
    template: aboutTheBulletin,
    queryFragment,
  }));
};

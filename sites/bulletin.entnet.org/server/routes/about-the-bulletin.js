const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('../graphql/fragments/content-page');
const aboutTheBulletin = require('../templates/website-section/about-the-bulletin');

module.exports = (app) => {
  app.get('/:alias(about-the-bulletin)', withWebsiteSection({
    template: aboutTheBulletin,
    queryFragment,
  }));
};

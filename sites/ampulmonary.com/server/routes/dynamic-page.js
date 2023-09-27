const { withDynamicPage } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/dynamic-page');
const galleryStyleQueryFragment = require('@ascend-media/package-global-monorail/graphql/fragments/gallery-style-page');
const contactUs = require('@ascend-media/package-global-monorail/templates/content/contact-us');
const page = require('@ascend-media/package-global-monorail/templates/dynamic-page');
const galleryStyle = require('@ascend-media/package-global-monorail/templates/dynamic-page/gallery-style');

module.exports = (app) => {
  app.get('/page/:alias(contact-us)', withDynamicPage({
    template: contactUs,
    queryFragment,
  }));
  app.get(/^\/page\/(awards.+)/, withDynamicPage({
    template: galleryStyle,
    queryFragment: galleryStyleQueryFragment,
    aliasResolver: (req) => (req.params[0]),
  }));
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};

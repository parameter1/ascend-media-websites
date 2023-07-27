const { withDynamicPage } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ascend-media/package-global/graphql/fragments/dynamic-page');
const galleryStyleQueryFragment = require('@ascend-media/package-global/graphql/fragments/gallery-style-page');
const page = require('@ascend-media/package-global/templates/dynamic-page');
const galleryStyle = require('@ascend-media/package-global/templates/dynamic-page/gallery-style');

module.exports = (app) => {
  app.get('/page/:alias(award-winners-test)', withDynamicPage({
    template: galleryStyle,
    queryFragment: galleryStyleQueryFragment,
  }));
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};

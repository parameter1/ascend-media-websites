const { withDynamicPage } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ascend-media/package-global/graphql/fragments/dynamic-page');
const page = require('@ascend-media/package-global/templates/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};

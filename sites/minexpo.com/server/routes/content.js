const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ascend-media/package-minexpo/graphql/fragments/content-page');
const companyQueryFragment = require('@ascend-media/package-minexpo/graphql/fragments/content-company');
const contactQueryFragment = require('@ascend-media/package-minexpo/graphql/fragments/content-contact');
const company = require('@ascend-media/package-minexpo/templates/content/company');
const content = require('@ascend-media/package-minexpo/templates/content');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment,
  }));
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: content,
    queryFragment: contactQueryFragment,
  }));
  app.get('/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)', withContent({
    template: content,
    queryFragment,
  }));
};

const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const companyFragment = require('@ascend-media/package-daily/graphql/fragments/company-page');
const queryFragment = require('@ascend-media/package-daily/graphql/fragments/content-page');
const company = require('@ascend-media/package-daily/templates/content/company');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};

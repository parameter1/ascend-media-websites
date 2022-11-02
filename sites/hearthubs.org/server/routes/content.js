const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('../graphql/fragments/content-page');
const companyFragment = require('../graphql/fragments/company-page');
const content = require('../templates/content');
const company = require('../templates/content/company');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyFragment,
  }));
  app.get('/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)', withContent({
    template: content,
    queryFragment,
  }));
};

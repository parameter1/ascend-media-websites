const contactUsHandler = require('@parameter1/base-cms-marko-web-contact-us');
const inquiryHandler = require('@ascend-media/package-minexpo/inquiry-handler');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
// const magazine = require('./magazine');
const publishedContent = require('./published-content');
const search = require('./search');
const subscribe = require('./subscribe');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Handle contact is submissions on /__contact-us
  // @todo This should be removed once contact-us is moved to core.
  contactUsHandler(app);
  inquiryHandler(app);

  // Homepage
  home(app);

  // Magazine Pages
  // magazine(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Published Content Pages
  publishedContent(app);

  // Search
  search(app);

  // Subscription Pages
  subscribe(app);

  // Website Sections
  websiteSections(app);
};

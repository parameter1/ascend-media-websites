const home = require('./home');
const content = require('./content');
const magazine = require('./magazine');
const search = require('./search');
const classifieds = require('./classifieds');
const aboutTheBulletin = require('./about-the-bulletin');

module.exports = (app) => {
  // Homepage
  home(app);

  // Classifieds
  classifieds(app);

  // Search Pages
  search(app);

  // Content Pages
  magazine(app);

  // Content Pages
  content(app);

  // Content Pages
  aboutTheBulletin(app);
};

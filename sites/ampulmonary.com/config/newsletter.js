const privacyPolicy = require('./privacy-policy');

const baseConfig = {
  action: '/',
};

const defaults = {
  name: 'amPulmonary Insights',
  description: 'amPulmonary enewsletter is the hub of news and cutting-edge information for pulmonary clinicians, researchers, and medical professionals interested in the latest developments.',
  privacyPolicy,
};

module.exports = {
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/smg/all/image/static/newsletter-pushdown/sab-full.png',
  },
  pushdown: {
    ...defaults,
    imagePath: 'files/base/smg/all/image/static/newsletter-pushdown/sab-half.png',
    description: 'amPulmonary enewsletter is the hub of news and cutting-edge information for pulmonary clinicians, researchers, and medical professionals interested in the latest developments.',
  },

  signupBannerLarge: {
    ...baseConfig,
    name: 'amPulmonary Insights',
    description: 'amPulmonary enewsletter is the hub of news and cutting-edge information for pulmonary clinicians, researchers, and medical professionals interested in the latest developments.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Newsletter for Professionals',
    description: 'amPulmonary enewsletter is the hub of news and cutting-edge information for pulmonary clinicians, researchers, and medical professionals interested in the latest developments.',
  },
};

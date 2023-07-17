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
    imagePath: 'files/base/ascend/hh/image/static/pulmonary/pulmonary-newsletter-full.png',
  },
  pushdown: {
    ...defaults,
    imagePath: 'files/base/ascend/hh/image/static/pulmonary/pulmonary-newsletter-half.png',
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

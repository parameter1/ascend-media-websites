const privacyPolicy = require('./privacy-policy');

const baseConfig = {
  action: '/',
};

const defaults = {
  name: 'amPulmonary Insights',
  description: 'The eNewsletter for Pulmonary Professionals.',
  defaultNewsletter: {
    deploymentTypeId: 29,
    name: 'Daily Report',
    eventCategory: 'Daily Newsletter Subscription',
  },
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
  },

  signupBannerLarge: {
    ...baseConfig,
    name: 'amPulmonary Insights',
    description: 'The eNewsletter for Pulmonary Professionals.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'amPulmonary Insights',
    description: 'The eNewsletter for Pulmonary Professionals.',
  },
};

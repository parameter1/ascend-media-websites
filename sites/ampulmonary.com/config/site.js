const gam = require('./gam');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const newsletter = require('./newsletter');
const search = require('./search');

module.exports = {
  // Module configs
  gam,
  nativeX,
  navigation,
  newsletter,
  search,
  // Site configs
  company: 'Ascend Integrated Media',
  p1events: {
    tenant: 'ascend',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'ampulmonary.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/pulmonary/Am_Pulmonary_Insights.png?h=45&auto=format,compress',
      srcset: [
        'https://img.ascendmedia.com/files/base/ascend/hh/image/static/pulmonary/Am_Pulmonary_Insights.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/pulmonary/Am_Pulmonary_Insights.png?h=60&auto=format,compress',
      srcset: [
        'https://img.ascendmedia.com/files/base/ascend/hh/image/static/pulmonary/Am_Pulmonary_Insights.png?h=120&auto=format,compress 2x',
      ],
    },
    corporate: {
      alt: 'Ascend Integrated Media Logo',
      href: 'https://ascendintegratedmedia.com',
      src: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/ascend-media-corporate-logo.png?w=200&auto=format,compress',
      srcset: [
        'https://img.ascendmedia.com/files/base/ascend/hh/image/static/ascend-media-corporate-logo.png?w=200&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
    // { provider: 'facebook', href: 'https://www.facebook.com/LabPulse', target: '_blank' },
    // { provider: 'twitter', href: 'https://twitter.com/LabPulse1', target: '_blank' },
    // { provider: 'linkedin', href: 'https://www.linkedin.com/company/labpulse/', target: '_blank' },
  ],
  podcastLinks: [],
  gcse: {
    id: 'NOT_SET',
  },
  gtm: {
    containerId: 'GTM-NJCRJGG',
  },
  inquiry: {
    enabled: false,
    directSend: false,
    sendTo: 'support@parameter1.com',
    sendFrom: 'ampulmonary.com <noreply@ascendintegratedmedia.com>',
    logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/pulmonary/Am_Pulmonary_Insights.png?h=45&auto=format,compress&bg=000000&pad=5',
    bgColor: '#000000',
  },
  setSearchSortFieldToScore: true,
};

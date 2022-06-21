const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const nativeX = require('./native-x');

module.exports = {
  nativeXBlock: Boolean(process.env.NATIVE_X_BLOCK),
  restrictRightRailDisplay: Boolean(process.env.RESTRICT_RIGHT_RAIL_DISPLAY),
  contentPageLoadMore: Boolean(process.env.CONTENT_PAGE_LOAD_MORE),
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  copyrightNotice: '',
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ASHPofficial/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ashpofficial', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/ashp/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/ashpofficial/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-5R53C42',
  },
  twitterFeed: {
    href: 'https://twitter.com/ashpofficial',
    tagline: 'Tweets from ASHP Official',
  },
  gcse: {
    id: '88fa7953f74c0807d',
  },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: '',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'AAD <noreply@ascendintegratedmedia.com>',
    logo: '',
    bgColor: '#ffffff',
  },
};

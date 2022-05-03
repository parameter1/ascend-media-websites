const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const nativeX = require('./native-x');

module.exports = {
  nativeXBlock: process.env.NATIVE_X_BLOCK || false,
  restrictRightRailDisplay: process.env.RESTRICT_RIGHT_RAIL_DISPLAY || false,
  contentPageLoadMore: process.env.CONTENT_PAGE_LOAD_MORE || false,
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  copyrightNotice: '',
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ACEPFan', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/acepnow', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCXJmNBwfRY-qyj0CIpVH-WA', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-college-of-emergency-physicians/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-WLZHFLX',
  },
  twitterFeed: {
    href: 'https://twitter.com/acepnow',
    tagline: 'Tweets from ACEP Now',
  },
  gcse: {
    id: '',
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

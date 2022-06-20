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
  showCopyright: false,
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AmericanSocietyofAnesthesiologists/' },
    { provider: 'twitter', href: 'https://twitter.com/ASALifeline' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-society-of-anesthesiologists/' },
    { provider: 'instagram', href: 'https://www.instagram.com/asa_hq/?hl=en' },
  ],
  gtm: {
    containerId: 'GTM-NGJTG3G',
  },
  twitterFeed: {
    href: 'https://twitter.com/ASALifeline',
    tagline: 'Tweets from ASA LifeLine',
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

const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const nativeX = require('./native-x');

module.exports = {
  nativeXBlock: Boolean(process.env.NATIVE_X_BLOCK),
  restrictRightRailDisplay: Boolean(process.env.RESTRICT_RIGHT_RAIL_DISPLAY),
  contentPageLoadMore: Boolean(process.env.CONTENT_PAGE_LOAD_MORE),
  searchTitle: 'Search Annual Meeting Daily News',
  nativeXBlockTitle: 'From The ASA Monitor',
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  copyrightNotice: '© 2022 American Society of Anesthesiologists (ASA)<br/>1061 American Lane | Schaumburg, IL 60173',
  showCopyright: false,
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AmericanSocietyofAnesthesiologists/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ASALifeline', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-society-of-anesthesiologists/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/asa_hq/?hl=en', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-NGJTG3G',
  },
  twitterFeed: {
    href: 'https://twitter.com/ASALifeline',
    tagline: 'Tweets from ASA LifeLine',
  },
  gcse: {
    id: '1982758490b24cc96',
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
  p1events: {
    tenant: 'ascend',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'asameetingnewscentral.org' : '',
  },
  useFooterOverride: true,
};

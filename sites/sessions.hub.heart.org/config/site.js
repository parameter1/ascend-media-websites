const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const blocks = require('./blocks');
const nativeX = require('./native-x');

module.exports = {
  nativeXBlock: Boolean(process.env.NATIVE_X_BLOCK),
  restrictRightRailDisplay: Boolean(process.env.RESTRICT_RIGHT_RAIL_DISPLAY),
  contentPageLoadMore: Boolean(process.env.CONTENT_PAGE_LOAD_MORE),
  blocks,
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/AHAMeetings', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/ahameetings', target: '_blank' },
    { provider: 'instagram', href: 'https://instagram.com/american_heart', target: '_blank' },
    { provider: 'youtube', href: 'https://youtube.com/user/AHASessions', target: '_blank' },
    { provider: 'pinterest', href: 'https://www.pinterest.com/americanheart/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-heart-association', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-TXG3S5L',
  },
  twitterFeed: {
    href: ' https://twitter.com/AHAMeetings',
    tagline: 'Tweets by AHAMeetings',
  },
  gcse: {
    id: '3b6a89459a586ff54',
  },
  wufoo: {
    userName: 'notset',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: 'https://img.hub.heart.org/files/base/ascend/hearthub/AHA_icon.svg?h=60',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'HeartHubs <reply@hearthubs.org>',
    logo: 'https://img.hub.heart.org/files/base/ascend/hearthub/image/static/footer.svg?h=90',
    bgColor: '#ffffff',
  },
  p1events: {
    tenant: 'ascend',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'sessions.hub.heart.org' : '',
  },
  ahaFooter: true,
  noticePushdown: true,
};

const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const nativeX = require('./native-x');

module.exports = {
  nativeXBlock: true,
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  copyrightNotice: '',
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'facebook', href: '#', target: '_blank' },
    { provider: 'twitter', href: '#', target: '_blank' },
    { provider: 'linkedin', href: '#', target: '_blank' },
    { provider: 'instagram', href: '#', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-NJCRJGG',
  },
  twitterFeed: {
    href: '',
    tagline: '',
  },
  gcse: {
    id: '',
  },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/thoracic/am-thor-header.png?h=50',
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

const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const nativeX = require('./native-x');

module.exports = {
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  copyrightNotice: '',
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AAOHNS', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/aaohns/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/AAOHNS', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/aaohns', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-PWX9TTJ',
  },
  twitterFeed: {
    href: 'https://twitter.com/AAOHNS',
    tagline: 'Tweets from AAOHNS',
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

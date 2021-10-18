const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');

module.exports = {
  logos,
  navigation,
  gam,
  company: 'Ascend Media',
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'twitter', href: '', target: '_blank' },
    { provider: 'facebook', href: '', target: '_blank' },
    { provider: 'instagram', href: '', target: '_blank' },
    { provider: 'youtube', href: '', target: '_blank' },
    { provider: 'linkedin', href: '', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-TBD',
  },
  twitterFeed: {
    href: '',
    tagline: 'Tweets by ',
  },
  gcse: {
    id: '2d2e730087c2bd49e',
  },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aua/site_logo.png?h=50',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'AUA <noreply@ascendintegratedmedia.com>',
    logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aua/site_logo.png?h=50',
    bgColor: '#ffffff',
  },
};

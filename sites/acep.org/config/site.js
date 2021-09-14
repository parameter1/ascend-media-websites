const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');

module.exports = {
  logos,
  navigation,
  gam,
  company: 'Ascend Media',
  copyrightNotice: '',
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ACEPFan', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/acepnow', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCXJmNBwfRY-qyj0CIpVH-WA', target: '_blank' },
    { provider: 'instagram', href: '#', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-WLZHFLX',
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

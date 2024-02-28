const navigation = require('./navigation');
const nativeX = require('./native-x');
const gam = require('./gam');
const logos = require('./logos');
const blocks = require('./blocks');

module.exports = {
  blocks,
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/imex_group', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/IMEXGroup/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/imex_group', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCfis5mhkdeEh4IQS_-AKusw', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/imex/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-W26R4PV',
  },
  gcse: {
    id: 'e9e520d07eec82710',
  },
  wufoo: {
    userName: 'NOT-SET',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: 'https://img.ascendmedia.com/files/base/ascend/hearthub/AHA_icon.svg?h=60',
    },
    support: {
      email: 'reply@hearthubs.org',
    },

    notificationDefaults: {
      branding: {
        bgColor: '#000',
        logo: 'https://img.ascendmedia.com/files/base/ascend/hearthub/AHA_icon.svg?h=60',
      },
      to: 'DSanford@ascendintegratedmedia.com',
      sendFrom: 'Ascend Media <noreply@parameter1.com>',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'IMEX <noreply@ascendintegratedmedia.com>',
    logo: 'https://img.ascendmedia.com/files/base/ascend/hearthub/image/static/planet-imex-logo.png?h=90',
    bgColor: '#ffffff',
  },
  p1events: {
    tenant: 'ascend',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'imexfrankfurst.ascendmedia.org' : '',
  },
  civicComputing: {
    apiKey: undefined, // '592b99ebdf88c091dad9b556b6d8de236ac97687',
    product: undefined, // 'PRO_MULTISITE',
  },
};

const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const blocks = require('./blocks');

module.exports = {
  blocks,
  logos,
  navigation,
  gam,
  company: 'Ascend Media',
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/imex_group', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/IMEXGroup/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/imex_group', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCfis5mhkdeEh4IQS_-AKusw', target: '_blank' },
    // { provider: 'pinterest', href: 'https://www.pinterest.com/americanheart/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/imex/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-T2DKCX7',
  },
  gcse: {
    id: 'fd935a2199580a49c',
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
  },
  inquiry: {
    enabled: false,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'IMEX <noreply@ascendintegratedmedia.com>',
    logo: 'https://img.ascendmedia.com/files/base/ascend/hearthub/image/static/planet-imex-logo.png?h=90',
    bgColor: '#ffffff',
  },
};

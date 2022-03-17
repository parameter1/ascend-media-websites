const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  // { href: '/page/privacy-policy', label: 'Privacy Policy' },
  // { href: '/page/terms-conditions', label: 'Terms & Conditions' },
];

const topics = [
  { href: 'http://www.entnet.org/', label: 'www.entnet.org', target: '_blank' },
  { href: '/', label: 'Current Issue' },
  { href: '/magazine/6001dfb8a982a33b138b4589', label: 'Archives' },
  { href: 'http://www.entnet.org/annual_meeting', label: 'Annual Meeting', target: '_blank' },
  { href: 'https://ratecards.ascendeventmedia.com/aao-hnsbulletin2022/', label: 'Advertise with the Bulletin', target: '_blank' },
  { href: 'http://entconnect.entnet.org/home', label: 'ENTConnect' },
];

const secondary = [
  // { href: 'https://AHAsessions.heart.org', label: 'Virtual Experience Access', target: '_blank' },
  // { href: 'https://aha.apprisor.org/epsWelcome.cfm?CFID=7614838&CFTOKEN=f427dce13daa111b-374EED08-CF40-A033-D6066C65AA7B755D', label: 'Posters Access', target: '_blank' },
];

module.exports = {

  primary: {
    items: [...topics],
  },
  secondary: {
    items: [...secondary],
  },
  tertiary: {
    items: [searchItem],
  },
  menu: [
    {
      label: 'Topics',
      items: [...topics],
    },
    {
      label: 'Resources',
      items: [...secondary],
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};

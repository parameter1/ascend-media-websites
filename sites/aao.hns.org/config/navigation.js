const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  // { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
  // { href: '/page/terms-conditions', label: 'Terms & Conditions' },
];

const topics = [
  { href: '/meeting-coverage', label: 'Meeting Coverage' },
  { href: 'https://www.entnet.org/events/annual-meeting/program/schedule/', label: 'Conference Agenda', target: '_blank' },
  { href: '/oto-experience', label: 'OTO Experience' },
  { href: 'https://www.entnet.org/events/annual-meeting/program/cme-information/', label: 'How to Claim CME', target: '_blank' },
];

const secondary = [
  // { href: 'https://otomtg21.junolive.co/Welcome', label: 'Virtual Platform', target: '_blank' },
  { href: 'https://www.eventscribe.net/2022/aaohnsf22amposters/index.asp?launcher=1', label: 'Posters', target: '_blank' },
  // { href: '#', label: 'Abstracts', target: '_blank' },
  // { href: '#', label: 'Claim CME', target: '_blank' },
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

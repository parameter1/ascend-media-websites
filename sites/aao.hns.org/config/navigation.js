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
  { href: '/', label: 'Conference Agenda', target: '_blank' }, // Need URL
  { href: '/', label: 'OTO Experience', target: '_blank' }, // Need URL
  { href: '/125th-anniversary', label: '125th Anniversary' },
  { href: '/', label: 'Claim CMR', target: '_blank' }, // Need URL
];

const secondary = [
  { href: '/', label: 'Virtual Platform', target: '_blank' }, // Need URL
  { href: '/', label: 'Posters', target: '_blank' }, // Need URL
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

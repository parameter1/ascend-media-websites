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
  { href: '/day-1', label: 'Day 1' },
  { href: '/day-2', label: 'Day 2' },
  { href: '/day-3', label: 'Day 3' },
  { href: '/day-4', label: 'Day 4' },
  { href: '/day-5', label: 'Day 5' },
];

const resources = [
  { href: 'https://www.abstractsonline.com/pp8/#!/9323', label: 'Program', target: '_blank' },
  { href: 'https://www.asahq.org/', label: 'On-Demand', target: '_blank' }, // Will be different offsite link when given
];

const secondary = [
  { href: 'https://www.asahq.org/', label: 'asahq.org', target: '_blank' },
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
      items: [...resources],
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};

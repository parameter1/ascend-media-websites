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
  { href: '/career', label: 'Career' },
  { href: '/exhibit-hall', label: 'Exhibit Hall' },
  { href: '/', label: 'Program', target: '_blank' }, // NEED URL
  { href: '/', label: 'Claim CME', target: '_blank' }, // NEED URL
  { href: '/previews', label: 'Previews' },
];

const secondary = [
  { href: '/', label: 'Virtual', target: '_blank' }, // NEED URL
  { href: '/', label: 'Posters', target: '_blank' }, // NEED URL
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

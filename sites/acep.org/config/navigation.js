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
  { href: 'https://www.acep.org/sa/education/courses/', label: 'Program', target: '_blank' },
  { href: 'https://www.acep.org/sa/education/cme-credit-statement/', label: 'Claim CME', target: '_blank' },
  { href: '/previews', label: 'Previews' },
];

const secondary = [
  // { href: '/', label: 'Virtual', target: '_blank' }, // NEED URL
  // { href: '/', label: 'Posters', target: '_blank' }, // NEED URL
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

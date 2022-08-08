const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const items = [
  { href: '/asthma', label: 'Asthma' },
  { href: '/copd', label: 'COPD' },
  { href: '/critical-care', label: 'Critical Care' },
  { href: '/pediatrics-sleep', label: 'Pediatrics/Sleep' },
];

const secondary = [];

module.exports = {

  primary: { items },
  secondary: {
    items: [...secondary],
  },
  tertiary: {
    items: [searchItem],
  },
  menu: [
    {
      label: 'Topics',
      items,
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

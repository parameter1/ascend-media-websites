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
  { href: '/section-1', label: 'Section 1' },
  { href: '/section-2', label: 'Section 2' },
  { href: '/section-3', label: 'Section 3' },
  { href: '/section-4', label: 'Section 4' },
  { href: '/section-5', label: 'Section 5' },
  { href: '/section-6', label: 'Section 6' },
];

const secondary = [
  { href: 'https://midyear.ashp.org/register', label: 'Registration', target: '_blank' },
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

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
  { href: '/ashp-news', label: 'ASHP News' },
  { href: '/meeting-coverage', label: 'Meeting Coverage' },
  { href: '/', label: 'Program' },
  { href: '/awards-events', label: 'Awards and Events' },
  { href: '/ashp-marketplace', label: 'ASHP Marketplace' },
  { href: '/previews', label: 'Previews' },
];

const secondary = [
  { href: '/secondary-1', label: 'Secondary 1' },
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

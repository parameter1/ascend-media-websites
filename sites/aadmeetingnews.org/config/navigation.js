const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/daily-coverage', label: 'Daily Coverage' },
  { href: '/industry-highlights', label: 'Industry Highlights' },
  { href: '/product-samples', label: 'Product Samples' },
  // REMOVE FOR SUMMER
  // { href: '/small-exhibit-spotlight', label: 'Small Exhibit Spotlight' },
  { href: 'https://am2023.aad.org/sessions', label: 'Program', target: '_blank' },
  { href: '/photo-gallery', label: 'Photo Gallery' },
];

const secondary = [
  { href: 'https://www.aad.org/member/meetings-education/ia23/registration', label: 'Registration', target: '_blank' },
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

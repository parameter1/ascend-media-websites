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
  { href: '/destinations', label: 'Destinations' },
  { href: '/accommodations-venues', label: 'Accommodations & Venues' },
  // { href: '/associations', label: 'Associations' },
  { href: '/More', label: 'More' },
  { href: 'https://www.imexamerica.com/whats-on/schedule-at-a-glance', label: 'Program', target: '_blank' },
  { href: 'https://www.imexamerica.com/', label: 'IMEX America', target: '_blank' },
];

const secondary = [
  // { href: 'https://www.imexexhibitions.com', label: 'IMEX Group', target: '_blank' },
  // { href: 'https://planetimex.com', label: 'PlanetIMEX', target: '_blank' },
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

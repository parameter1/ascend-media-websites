const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/accommodations-venues', label: 'Accommodations & Venues' },
  { href: '/associations', label: 'Associations' },
  { href: '/featured-exhibitors', label: 'Featured Exhibitors' },
  { href: '/happenings', label: 'Happenings' },
  { href: 'https://www.imexamerica.com/whats-on/schedule-at-a-glance', label: 'Program', target: '_blank' },
  { href: 'https://www.imexamerica.com/', label: 'IMEX America', target: '_blank' },
];

const secondary = [];

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

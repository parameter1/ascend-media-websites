const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/daily-news', label: 'Daily News' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/accommodations-venues', label: 'Accommodation & Venues' },
  { href: '/happenings', label: 'Happenings' },
  { href: '/featured-exhibitors', label: 'Featured Exhibitors' },
  { href: 'https://www.imex-frankfurt.com', label: 'IMEX in Frankfurt', target: '_blank' },

];

const secondary = [
  { href: 'https://www.imex-frankfurt.com/schedule-at-a-glance', label: 'Programme', target: '_blank' },
  { href: 'https://imex.ascendmedia.com/', label: 'IMEX America', target: '_blank' },
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

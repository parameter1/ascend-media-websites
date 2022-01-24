const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/meeting-coverage', label: 'Meeting Coverage' },
  { href: 'https://www.eventscribe.net/2022/AUA2022/', label: 'Program', target: '_blank' },
  { href: '/industry-highlights', label: 'Industry Highlights' },
  { href: '/science-technology-hall', label: 'Science & Technology Hall' },
];

const secondary = [
  // { href: 'https://www.eventscribe.net/2022/AUA2022/', label: 'Virtual AUA2022', target: '_blank' }, "Will hide until later"
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

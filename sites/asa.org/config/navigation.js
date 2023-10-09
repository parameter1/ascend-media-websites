const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/friday', label: 'Friday' },
  { href: '/saturday', label: 'Saturday' },
  { href: '/sunday', label: 'Sunday' },
  { href: '/monday', label: 'Monday' },
  { href: '/tuesday', label: 'Tuesday' },
];

const resources = [
  { href: 'https://www.asahq.org/annualmeeting', label: 'Meeting Info' },
  { href: 'https://www.abstractsonline.com/pp8/#!/10809', label: 'Sessions' },
  { href: 'https://www.abstractsonline.com/pp8/#!/10809/credits', label: 'Claim CME' },
  { href: '/', label: 'Archive' },
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
      label: 'Resources',
      items: resources,
    },
    {
      label: 'By Day',
      items: topics,
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};

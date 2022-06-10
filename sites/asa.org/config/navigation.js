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
  { href: 'https://www.asahq.org/annualmeeting', label: 'Meeting Info' },

];

const resources = [
  { href: 'https://www.abstractsonline.com/pp8/#!/9323', label: 'Sessions' },
  { href: 'https://asa.ondemand.org/', label: 'On-Demand' },
];

const secondary = [
  { href: 'https://www.asahq.org/annualmeeting/attend/health', label: 'Health & Safety' },
  { href: 'https://asa-365.ascendeventmedia.com/', label: 'Archives' },
  { href: 'https://www.abstractsonline.com/pp8/#!/9323/credits', label: 'Claim CME' },
];

module.exports = {

  primary: {
    items: [...topics, ...resources],
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
      items: [...resources],
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};

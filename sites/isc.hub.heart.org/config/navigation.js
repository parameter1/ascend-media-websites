const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  { href: '/page/privacy-policy', label: 'Privacy Policy' },
  { href: '/page/terms-conditions', label: 'Terms & Conditions' },
  { href: '/page/accessibility-statement', label: 'Accessibility Statement', target: '_blank' },
];

const topics = [
  { href: '/late-breaking-science', label: 'Late-Breaking Science' },
  { href: '/daily-coverage', label: 'Daily Coverage' },
  { href: '/industry-highlights', label: 'Industry Highlights' },
  { href: 'https://eventpilotadmin.com/web/planner.php?id=ISC22', label: 'Program' },
];

const secondary = [
  { href: 'https://twitter.com/search?q=%23ISC22&src=typed_query', label: '#ISC23', target: '_blank' },
  { href: 'https://isc23.heart.org/', label: 'Access Virtual Experience', target: '_blank' },
  { href: 'https://asa.apprisor.org/epsWelcome.cfm?CFID=1335453&CFTOKEN=d5596cdbf0141878-1C52E3F4-B8FF-86F5-423FA43422D0A1CF', label: 'Access ePosters', target: '_blank' },
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

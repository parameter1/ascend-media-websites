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
  { href: 'https://eppro02.ativ.me/src/EventPilot/php/express/web/planner.php?id=ISC23&proof=false', label: 'Program' },
];

const secondary = [
  { href: 'https://twitter.com/search?q=%23ISC22&src=typed_query', label: '#ISC23', target: '_blank' },
  { href: 'https://isc23.heart.org/', label: 'Access Virtual Experience', target: '_blank' },
  { href: 'https://asa.apprisor.org/epsWelcome.cfm', label: 'Access ePosters', target: '_blank' },
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

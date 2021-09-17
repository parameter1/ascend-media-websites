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
  { href: '/isc-news', label: 'ISC News' },
  { href: '/exhibit-hall', label: 'Exhibit Hall' },
  { href: 'https://eventpilotadmin.com/web/planner.php?id=ISC21', label: 'Program' },
  // { href: '#', label: 'Claim CME', target: '_blank' },
  // { href: '#', label: 'OnDemand' },
  { href: '/previews', label: 'Previews' },
  // { href: '/archives', label: 'Archives' },
];

const secondary = [
  { href: 'https://isc.heart.org', label: 'Virtual Experience Access', target: '_blank' },
  { href: ' https://asa.apprisor.org', label: 'Posters Access', target: '_blank' },
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

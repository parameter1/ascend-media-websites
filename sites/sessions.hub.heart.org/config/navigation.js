const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  { href: 'https://www.heart.org/en/about-us/statements-and-policies/privacy-statement', label: 'Privacy Policy', target: '_blank' },
  { href: '/page/terms-conditions', label: 'Terms & Conditions' },
  { href: '/21723089', label: 'Accessibility Statement', target: '_blank' },
];

const topics = [
  { href: '/late-breaking-science', label: 'Late-Breaking Science' },
  { href: '/daily-coverage', label: 'Daily Coverage' },
  { href: '/industry-highlights', label: 'Industry Highlights' },
  { href: '/featured-exhibitors', label: 'Featured Exhibitors' },
  { href: 'https://eventpilotadmin.com/web/planner.php?id=AHA21', label: 'Program', target: '_blank' },
  { href: '/previews', label: 'Previews' },
];

const secondary = [
  { href: 'https://twitter.com/search?q=%23AHA21&src=typed_query', label: '#AHA22' },
  { href: 'https://twitter.com/hashtag/ReSS21?src=hashtag_click', label: '#ReSS22' },
  { href: 'https://AHAsessions.heart.org', label: 'Virtual Experience Access', target: '_blank' },
  { href: 'https://aha.apprisor.org', label: 'Sessions Posters', target: '_blank' },
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

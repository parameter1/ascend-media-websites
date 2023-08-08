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
  { href: '/photo-gallery', label: 'Photo Gallery' },
  { href: 'https://eppro02.ativ.me/src/EventPilot/php/express/web/planner.php?id=AHA22', label: 'Program', target: '_blank' },
  // { href: '/previews', label: 'Previews' },
];

const secondary = [
  { href: 'https://twitter.com/search?q=%23AHA21&src=typed_query', label: '#AHA23' },
  { href: '/', label: 'Virtual Experience Access' },
  { href: '/', label: 'Sessions Posters' },
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

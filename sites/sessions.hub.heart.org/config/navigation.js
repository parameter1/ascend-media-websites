const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  { href: 'https://www.heart.org/en/about-us/statements-and-policies/privacy-statement', label: 'Privacy Policy', target: '_blank' },
  { href: '/page/terms-conditions', label: 'Terms & Conditions' },
];

const topics = [
  { href: '/late-breaking-science', label: 'Late-Breaking Science' },
  { href: '/daily-coverage', label: 'Daily Coverage' },
  { href: '/science-technology-hall', label: 'Science & Technology Hall' },
  { href: 'https://eventpilotadmin.com/web/planner.php?id=AHA20', label: 'Program' },
  { href: '/previews', label: 'Previews' },
  { href: '/archives', label: 'Archives' },
];

const secondary = [
  { href: 'https://twitter.com/search?q=%23AHA21&src=typed_query', label: '#AHA21' },
  { href: 'https://twitter.com/hashtag/ReSS21?src=hashtag_click', label: '#ReSS21' },
  { href: 'https://twitter.com/search?q=%23QCOR21&src=typed_query', label: '#QCOR21' },
  { href: 'https://AHAsessions.heart.org', label: 'Virtual Experience Access', target: '_blank' },
  { href: '/', label: 'Posters Access', target: '_blank' },
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

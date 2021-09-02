const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  // { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
  // { href: '/page/terms-conditions', label: 'Terms & Conditions' },
];

const topics = [
  { href: '/late-breaking-science', label: 'Late-Breaking Science' },
  { href: '/meeting-coverage', label: 'Meeting Coverage' },
  { href: 'https://aua2021.app.swapcard.com/event/aua-2021-annual-meeting-1', label: 'Program', target: '_blank' },
  { href: '/industry-events', label: 'Industry Events' },
  { href: '/science-technology-hall', label: 'Science & Technology Hall' },
  { href: '/previews', label: 'Previews' },
];

const secondary = [
  { href: 'https://aua2021.app.swapcard.com/event/aua-2021-annual-meeting-1', label: 'Virtual AUA2021', target: '_blank' },
  // { href: '#', label: 'Abstracts', target: '_blank' },
  // { href: '#', label: 'Claim CME', target: '_blank' },
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

const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/daily-coverage', label: 'Daily Coverage' },
  { href: 'https://shmconverge.hospitalmedicine.org/interactive-schedule/', label: 'Program', target: '_blank' },
  { href: '/engagement-arena', label: 'Engagement Arena' },
  { href: '/awards-events', label: 'Awards and Events' },
  { href: '/previews', label: 'Previews' },
];

module.exports = {

  primary: {
    items: [...topics],
  },
  secondary: {
    items: [{ href: 'https://twitter.com/societyhospmed', label: '#SHMConverge', target: '_blank' }],
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
      items: [
        { href: '/22080995', label: 'Conference FAQs' },
        { href: '/22056481', label: 'COVID and Safety Protocols' },
        { href: '/22056721', label: 'How to claim CME and other educational credits' },
        { href: '/22081005', label: 'SHM Converge 2023' },
      ],
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};

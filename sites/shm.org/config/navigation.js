const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/daily-coverage', label: 'Daily Coverage' },
  { href: '#', label: 'Program' }, // NEED LINK
  { href: '/engagement-arena', label: 'Engagement Arena' },
  { href: '/awards-events', label: 'Awards and Events' },
  { href: '/industry-highlights', label: 'Industry Highlights' },
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
      items: [ // NEEDS LINKS
        { href: '#', label: 'Conference FAQs' },
        { href: '#', label: 'COVID and Safety Protocols' },
        { href: '#', label: 'How to claim CME and other educational credits' },
        { href: '#', label: 'SHM Converge 2023' },
        { href: '#', label: 'Other SHM Events' },
      ],
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};

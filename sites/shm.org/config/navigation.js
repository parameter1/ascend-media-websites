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
    items: [
      { href: 'https://www.hospitalmedicine.org/', label: 'hospitalmedicine.org', target: '_blank' },
      { href: '#', label: '#SHMConverge24' },
    ],
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
        { href: '/22671158', label: 'Special events' },
        { href: 'https://shmconverge.hospitalmedicine.org/faq/', label: 'Conference FAQs', target: '_blank' },
        { href: '/22711263', label: 'Claiming CME and Other Credits' },
        { href: '/22671101', label: 'SHM Converge 2024' },
      ],
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};

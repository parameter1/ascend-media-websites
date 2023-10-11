const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/meeting-coverage', label: 'Meeting Coverage' },
  { href: 'https://www.entnet.org/events/annual-meeting/program/schedule/', label: 'Annual Meeting Program', target: '_blank' },
  { href: '/oto-experience', label: 'OTO Experience' },
  { href: 'https://www.entnet.org/events/annual-meeting/program/cme-information/', label: 'How to Claim CME', target: '_blank' },
];

const secondary = [
  { href: 'https://show.jspargo.com/aao_hnsf23/reg/', label: 'Register Now', target: '_blank' },
  { href: 'https://otomtg23.eventscribe.net/PosterTitles.asp?pfp=Browse%20by%20Title', label: 'Posters', target: '_blank' },
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

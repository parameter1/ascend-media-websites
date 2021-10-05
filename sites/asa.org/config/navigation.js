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
  { href: '/friday', label: 'Friday' },
  { href: '/saturday', label: 'Saturday' },
  { href: '/sunday', label: 'Sunday' },
  { href: '/monday', label: 'Monday' },
  { href: '/tuesday', label: 'Tuesday' },
  { href: 'https://www.asahq.org/annualmeeting', label: 'Meeting Info', target: '_blank' },

];

const resources = [
  { href: 'https://www.abstractsonline.com/pp8/#!/9323', label: 'Sessions', target: '_blank' },
  { href: 'https://www.asahq.org/', label: 'On-Demand', target: '_blank' }, // Will be different offsite link when given
];

const secondary = [
  { href: 'https://www.asahq.org/annualmeeting/attend/health', label: 'Health & Safety', target: '_blank' },
  { href: 'https://reliancegraphics.tuosystems.com/shopping/1399737?store_catalog_id=90680', label: 'Swag Store', target: '_blank' },
  { href: 'https://www.abstractsonline.com/pp8/#!/9323/credits', label: 'Claim CME', target: '_blank' },
];

module.exports = {

  primary: {
    items: [...topics, ...resources],
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
      items: [...resources],
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};

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
  { href: '/late-breaking-science', label: 'Late-Breaking Science', target: '_blank' },
  { href: '/daily-coverage', label: 'Daily Coverage', target: '_blank' },
  { href: '/exhibit-hall', label: 'Exhibit Hall', target: '_blank' },
  { href: 'https://eventpilotadmin.com/web/planner.php?id=AHA20', label: 'Program', target: '_blank' },
  { href: 'https://professional.heart.org/en/meetings/scientific-sessions/programming/cme-ce-credit', label: 'Claim CME', target: '_blank' },
  { href: 'https://AHASessions.heart.org/sessions/on-demand', label: 'OnDemand', target: '_blank' },
  { href: '/previews', label: 'Previews', target: '_blank' },
];

const secondary = [
  { href: 'https://AHAsessions.heart.org', label: 'Virtual Experience Access', target: '_blank' },
  { href: 'https://aha.apprisor.org/epsWelcome.cfm?CFID=7614838&CFTOKEN=f427dce13daa111b-374EED08-CF40-A033-D6066C65AA7B755D', label: 'Posters Access', target: '_blank' },
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

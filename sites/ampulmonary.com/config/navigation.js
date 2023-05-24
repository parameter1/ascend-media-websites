const sortNavItems = require('@ascend-media/package-global-monorail/utils/sort-nav-items');

const subscribe = require('./subscribe');
const privacyPolicy = require('./privacy-policy');

const topics = [
  { href: '/asthma', label: 'Asthma' },
  { href: '/copd', label: 'COPD' },
  { href: '/pulmonary', label: 'Pulmonary' },
];

const secondary = [
];

const resources = [
  { href: '#', label: 'Subscribe' },
  { href: '/page/about-us', label: 'About Us' },
  { href: '/page/contact-us', label: 'Contact Us' },
];

const mobileMenu = {
  primary: sortNavItems([
    ...topics,
  ]),
  secondary: sortNavItems([
    ...secondary,
    subscribe,
  ]),
};

module.exports = {
  type: 'navbar-c',
  user: {
    items: [
      {
        href: '/login',
        label: 'Sign In',
        when: 'logged-out',
        modifiers: ['user'],
      },
      {
        href: '/logout',
        label: 'Sign Out',
        when: 'logged-in',
        modifiers: ['user'],
      },
    ],
  },
  mobileMenu,
  topics,
  primary: {
    items: sortNavItems([
      ...topics,
    ]),
  },
  secondary: {
    items: [
      ...secondary,
    ],
  },
  tertiary: {
    items: [],
  },
  toggleMenu: {
    col1: {
      label: 'Topics',
      items: [
        ...sortNavItems(topics),
      ],
    },
    // col2: {
    //   label: 'TBD',
    //   items: [
    //   ],
    // },
    // col3: {
    //   label: 'TBD',
    //   items: [
    //   ],
    // },
    col4: {
      label: 'Resources',
      items: [
        ...resources,
      ],
    },
  },
  footer: {
    col3: {
      label: 'Topics',
      items: [
        { href: '/asthma', label: 'Asthma' },
        { href: '/copd', label: 'COPD' },
        { href: '/pulmonary', label: 'Pulmonary' },
      ],
    },
    // col2: {
    //   label: 'Resources',
    //   items: [
    //     ...resources,
    //     { href: '#', label: 'TBD' },
    //     { href: '#', label: 'TBD' },
    //   ],
    // },
    // col3: {
    //   label: 'More',
    //   items: [
    //     { href: '#', label: 'TBD' },
    //     { href: '#', label: 'TBD' },
    //   ],
    // },
    items: [
      privacyPolicy,
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};

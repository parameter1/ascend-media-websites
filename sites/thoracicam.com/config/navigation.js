const sortNavItems = require('@ascend-media/package-global-monorail/utils/sort-nav-items');

const subscribe = require('./subscribe');
const privacyPolicy = require('./privacy-policy');

const topics = [
  { href: '/asthma', label: 'Asthma' },
  { href: '/copd', label: 'COPD' },
  { href: '/pulmonary', label: 'Pulmonary' },
  { href: '/resources', label: 'Resources' },
];

const secondary = [
];

const resources = [
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
    col2: {
      label: 'TBD',
      items: [
      ],
    },
    col3: {
      label: 'TBD',
      items: [
      ],
    },
    col4: {
      label: 'Resources',
      items: [
        ...resources,
      ],
    },
  },
  footer: {
    col1: {
      label: 'Topics',
      items: [
        { href: '/business-insights', label: 'Business Insights' },
        { href: '/diagnostic-technologies', label: 'Diagnostic Technologies' },
        { href: '/diseases', label: 'Diseases' },
      ],
    },
    col2: {
      label: 'Resources',
      items: [
        ...resources,
        { href: '#', label: 'TBD' },
        { href: '#', label: 'TBD' },
      ],
    },
    col3: {
      label: 'More',
      items: [
        { href: '#', label: 'TBD' },
        { href: '#', label: 'TBD' },
      ],
    },
    items: [
      privacyPolicy,
      { href: '/page/copyright-information', label: 'Copyright Information' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};

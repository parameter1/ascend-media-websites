const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  { href: '/page/privacy-policy', label: 'Privacy Policy' },
  { href: '/page/terms-conditions', label: 'Terms & Conditions' },
];

const vascularTopics = [
  { href: '/vascular/2020-program', label: '2020 Schedule' },
  { href: '/vascular/exhibitors', label: 'Exhibits' },
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/ATVBPVD/UCM_506015_Science-News-for-Vascular-Discovery-2020.jsp', label: 'Science News', target: '_blank' },
  { href: 'https://www.ahajournals.org/vascular-discovery', label: 'Journals', target: '_blank' },
  { href: '/vascular/membership', label: 'Membership' },
  { href: 'https://learn.heart.org', label: 'Claim CME', target: '_blank' },
];

const vascularSecondary = [
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/ATVBPVD/UCM_316902_Vascular-Discovery-From-Genes-to-Medicine.jsp', label: 'Virtual Sessions Access', target: '_blank' },
  { href: 'https://atvb.apprisor.org', label: 'ePosters Access', target: '_blank' },
];

const qcorTopics = [
  { href: '/qcor/2020-program', label: '2020 Schedule' },
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/QCOR/UCM_503971_QCOR-2020-Science-News.jsp', label: 'Science News', target: '_blank' },
  { href: 'https://www.ahajournals.org/qcor', label: 'Journals', target: '_blank' },
  { href: '/qcor/membership', label: 'Membership' },
  { href: 'https://learn.heart.org', label: 'Claim CME', target: '_blank' },
];

const qcorSecondary = [
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/QCOR/UCM_316906_QCOR-Scientific-Sessions.jsp', label: 'Virtual Sessions Access', target: '_blank' },
  { href: 'https://qcor.apprisor.org', label: 'ePosters Access', target: '_blank' },
];

const bcvsTopics = [
  { href: '/bcvs/2020-program', label: '2020 Schedule' },
  { href: '/bcvs/exhibitors', label: 'Exhibits' },
  { href: 'https://professional.heart.org/professional/EducationMeetings/EducationMeetings/UCM_505357_Science-News-for-BCVS-2020.jsp', label: 'Science News', target: '_blank' },
  { href: 'https://www.ahajournals.org', label: 'Journals', target: '_blank' },
  { href: '/bcvs/membership', label: 'Membership' },
  { href: 'https://learn.heart.org', label: 'Claim CME', target: '_blank' },
];

const bcvsSecondary = [
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/BCVS/UCM_316903_BCVS-Scientific-Sessions.jsp', label: 'Virtual Sessions Access', target: '_blank' },
  { href: 'https://bcvs.apprisor.org/epsWelcome.cfm?CFID=7409211&CFTOKEN=adb08ae7478bc8e5-186A09A9-ECE6-5163-C70E450D52629833', label: 'ePosters Access', target: '_blank' },
];

const hypertensionTopics = [
  { href: '/hypertension/2020-program', label: '2020 Schedule' },
  { href: '/', label: 'Science News', target: '_blank' },
  { href: 'https://www.ahajournals.org', label: 'Journals', target: '_blank' },
  { href: '/hypertension/membership', label: 'Membership' },
  { href: 'https://learn.heart.org', label: 'Claim CME', target: '_blank' },
];

const hypertensionSecondary = [
  { href: '/', label: 'Virtual Sessions Access', target: '_blank' },
  { href: '/', label: 'ePosters Access', target: '_blank' },
];

module.exports = {
  /**
   * Default!
   */
  default: {
    primary: {
      items: [...vascularTopics],
    },
    secondary: {
      items: [...vascularSecondary],
    },
    tertiary: {
      items: [searchItem],
    },
    menu: [
      {
        label: 'Topics',
        items: [...vascularTopics],
      },
      {
        label: 'Resources',
        items: [...vascularSecondary],
      },
      {
        label: 'User Tools',
        items: [...userTools],
      },
    ],
  },

  contexts: [
    /**
     * Vascular
     */
    {
      when: ['/vascular'],
      primary: {
        items: [...vascularTopics],
      },
      secondary: {
        items: [...vascularSecondary],
      },
      tertiary: {
        items: [searchItem],
      },
      menu: [
        {
          label: 'Topics',
          items: [...vascularTopics],
        },
        {
          label: 'Resources',
          items: [...vascularSecondary],
        },
        {
          label: 'User Tools',
          items: [...userTools],
        },
      ],
    },

    /**
     * QCOR
     */
    {
      when: ['/qcor'],
      primary: {
        items: [...qcorTopics],
      },
      secondary: {
        items: [...qcorSecondary],
      },
      tertiary: {
        items: [searchItem],
      },
      menu: [
        {
          label: 'Topics',
          items: [...qcorTopics],
        },
        {
          label: 'Resources',
          items: [...qcorSecondary],
        },
        {
          label: 'User Tools',
          items: [...userTools],
        },
      ],
    },

    /**
     * BCVS
     */
    {
      when: ['/bcvs'],
      primary: {
        items: [...bcvsTopics],
      },
      secondary: {
        items: [...bcvsSecondary],
      },
      tertiary: {
        items: [searchItem],
      },
      menu: [
        {
          label: 'Topics',
          items: [...bcvsTopics],
        },
        {
          label: 'Resources',
          items: [...bcvsSecondary],
        },
        {
          label: 'User Tools',
          items: [...userTools],
        },
      ],
    },

    /**
     * Hypertension
     */
    {
      when: ['/hypertension'],
      primary: {
        items: [...hypertensionTopics],
      },
      secondary: {
        items: [...hypertensionSecondary],
      },
      tertiary: {
        items: [searchItem],
      },
      menu: [
        {
          label: 'Topics',
          items: [...hypertensionTopics],
        },
        {
          label: 'Resources',
          items: [...hypertensionSecondary],
        },
        {
          label: 'User Tools',
          items: [...userTools],
        },
      ],
    },
  ],
};

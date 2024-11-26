export const FOOTER_DATA = {
  logo: '/images/footer/logo.png',
  logoLink: '/',
  trustPilotImage: '/images/footer/social-icons/TrustPilot2.svg',
  trustPilotLink:
    'https://www.trustpilot.com/review/esparktalent.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector',
  description:
    'Our guaranteed top-tier service and industry-leading worldwide coverage provides peace of mind for any global team. With eSpark Talent next-level automation and in-house infrastructure, quality always comes first for our customers.',
  copyRight: '© 2024 eSpark Talent. All Rights Reserved.',
  copyRightLinks: [
    { text: 'Privacy Policy', link: '/privacy-policy' },
    { text: 'Term & Conditions', link: '/terms-and-conditions' },
  ],
  pages: [
    {
      item: [
        {
          label: 'Our Company',
          pages: [
            { pgName: 'Why eSpark Talent', pgLink: '/what-we-do' },
            { pgName: 'How it Works', pgLink: '/how-it-works' },
          ],
        },
        {
          label: 'Solutions',
          pages: [
            { pgName: 'For Start-Ups', pgLink: '/solutions/business-startup' },
            { pgName: 'For Enterprise', pgLink: '/solutions/enterprises' },
          ],
        },
      ],
    },
    {
      item: [
        {
          label: 'Resource',
          pages: [
            { pgName: 'Blogs', pgLink: '/blogs' },
            { pgName: 'eSparkWiki', pgLink: '/esparkwiki' },
            { pgName: 'Career', pgLink: '/careers' },
          ],
        },
        {
          label: 'Partnership',
          pages: [
            { pgName: 'Partnership Program', pgLink: '/partnership-program' },
          ],
        },
      ],
    },
    {
      item: [
        {
          label: 'Contact Us',
          info: [
            { icon: '/images/footer/flag.png', value: 'USA' },
            {
              icon: '/images/footer/location.png',
              value: '6001 W Parmer Lane Ste 370 #977 Austin, TX 78727',
            },
            { value: 'Have questions about <span>our features</span>?' },
            {
              icon: '/images/footer/email.png',
              value: 'sales@esparktalent.com',
              link: 'mailto:sales@esparktalent.com',
            },
            {
              icon: '/images/footer/phone.png',
              value: '+1 (323) 790-6035',
              link: 'tel:+1 (323) 790-6035',
            },
          ],
        },
      ],
    },
  ],
  socialMedia: [
    {
      img: '/images/footer/social-icons/facebook.svg',
      link: 'https://www.facebook.com/people/eSpark-Talent/61550048738610/',
      alt: 'facebook',
    },
    {
      img: '/images/footer/social-icons/twitter.svg',
      link: 'https://www.twitter.com/eSparkTalent',
      alt: 'twitter',
    },
    {
      img: '/images/footer/social-icons/linkedin.svg',
      link: 'https://www.linkedin.com/company/espark-talent/',
      alt: 'linkedIn',
    },
    {
      img: '/images/footer/social-icons/instagram.svg',
      link: 'https://www.instagram.com/esparktalent/',
      alt: 'instagram',
    },
  ],
};

export const FOOTER_STYLE = {
  mainBoxStyle: { width: '100%', height: '100%', backgroundColor: '#ECECED' },
  innerBoxStyle: {
    width: '100%',
    height: '100%',
    mx: 'auto',
    maxWidth: { lg: '1300px', xl: '1400px' },
    maxHeight: { xs: '100%', lg: '380px' },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: { xs: 'space-between', md: 'center' },
    px: { xs: 1, md: 2.5 },
    py: { xs: 2.5, lg: 3.5 },
    flexWrap: 'nowrap',
    '@media(min-width:768px) and (max-width: 1399px)': {
      maxWidth: '1350px',
      justifyContent: 'start',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'start',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      flexDirection: 'column',
      alignItems: 'start',
    },
  },
  logoSectionBoxStyle: {
    width: {
      xs: '100%',
      lg: `calc(100% - 800px)`,
      '@media(min-width:1024px) and (max-width: 1399px)': {
        width: 'calc(100% - 700px)',
      },
      '@media(min-width:768px) and (max-width: 1023px)': {
        width: 'calc(100% - 530px)',
      },
    },
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    p: { xs: 0, md: 1 },
  },
  imageBoxStyle: {
    position: 'relative',
    width: { lg: '174px' },
    height: { lg: '85px' },
    '@media(min-width:768px) and (max-width: 1399px)': {
      width: '154px',
      height: '65px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      width: '134px',
      height: '45px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      width: '100px',
      height: '45px',
    },
  },
  imageStyle: { objectFit: 'contain' },
  descriptionStyle: {
    fontSize: { xs: '8px', sm: '10px', md: '13px', lg: '15px' },
    fontWeight: 400,
    lineHeight: { xs: '24px' },
    color: '#001C63',
    pl: { md: 1.6, lg: 0 },
    pr: { md: 3, lg: 3 },
    '@media(min-width:768px) and (max-width: 1023px)': {
      pl: 1.6,
      pr: 3,
      fontSize: '13px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      pl: 2,
      pr: 2,
      fontSize: '13px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      pl: 1,
      pr: 1,
      fontSize: '11px',
    },
  },
  socialMediaIconBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    gap: 2.5,
    ml: { xs: 1.5, sm: 2, md: 1 },
    my: 1.5,
  },
  socialLinkBoxStyle: {
    position: 'relative',
    width: { lg: '18px' },
    height: { lg: '18px' },
    '@media(min-width:768px) and (max-width: 1399px)': {
      width: '16px',
      height: '16px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      width: '16px',
      height: '16px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      width: '15px',
      height: '15px',
    },
  },
  iconStyle: { objectFit: 'contain' },
  pagesBoxStyle: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  pageBoxStyle: (index) => ({
    width: { lg: index === 2 ? '300px' : '250px' },
    '@media(min-width:1024px) and (max-width: 1399px)': {
      width: index === 2 ? '340px' : '180px',
    },
    '@media(min-width:768px) and (max-width: 1023px)': {
      width: '170px',
    },
    '@media(min-width:530px) and (max-width: 767px)': {
      width: index === 2 ? '40%' : '30%',
      px: 2,
    },
    '@media(min-width:425px) and (max-width: 529px)': {
      width: index === 2 ? 'auto' : '50%',
      px: 2,
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      width: index === 2 ? 'auto' : '50%',
      px: 1,
    },
  }),
  labelAndUlBoxStyle: (mpIndex) => ({
    mt: mpIndex === 0 ? 0 : 2,
    '@media(max-width: 767px)': {
      my: 1,
    },
  }),
  lebelStyle: {
    fontSize: { md: '18px', lg: '24px' },
    fontWeight: 600,
    color: '#001C63',
    '@media(min-width:768px) and (max-width: 1023px)': {
      fontSize: '18px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      fontSize: '16px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '14px',
    },
  },
  ulStyle: { pl: 0, listStyle: 'none', pt: 1 },
  textIconAndValueBoxStyle: {
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    gap: 1.5,
  },
  iconBoxStyle: (_textIndex) => ({
    position: 'relative',
    width: { lg: '25px' },
    height: { lg: '23px' },
    mt: _textIndex === 0 ? 0 : 1,
    '@media(min-width:768px) and (max-width: 1399px)': {
      width: '25px',
      height: '22px',
      pr: 1,
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      width: '25px',
      height: '22px',
      pr: 1,
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      width: '20px',
      height: '20px',
      pr: 1,
    },
  }),
  pageLinkIconStyle: { objectFit: 'contain' },
  valueStyle: (_textIndex) => ({
    width: _textIndex === 5 ? 'auto' : 'calc(100% - 25px)',
    fontSize: { md: '13px', lg: '15px' },
    fontWeight: 400,
    color: '#000000',
    mt: _textIndex === 0 ? 0 : 1,
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    '@media(min-width:768px) and (max-width: 1023px)': {
      fontSize: '13px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      fontSize: '12px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  }),
  trustPilotImageBoxStyle: {
    position: 'relative',
    width: { lg: '200px' },
    height: { lg: '55px' },
    mt: 1,
    '@media(min-width:768px) and (max-width: 1399px)': {
      width: '170px',
      height: '55px',
      pr: 2.5,
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      width: '150px',
      height: '45px',
      pr: 2.5,
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      width: '120px',
      height: '35px',
      pr: 2.5,
    },
  },
  trustPilotImageStyle: { objectFit: 'contain' },
  pageNameStyle: (_pIndex) => ({
    fontSize: { md: '13px', lg: '15px' },
    fontWeight: 400,
    color: '#001C63',
    mt: _pIndex === 0 ? 0 : 1,
    '@media(min-width:768px) and (max-width: 1023px)': {
      fontSize: '13px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      fontSize: '12px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  }),
  horizontalLineStyle: {
    mx: 'auto',
    width: '90%',
    height: '2px',
    backgroundColor: '#001C63',
    opacity: 0.17,
  },
  copyRightBoxStyle: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyRightTextStyle: {
    fontSize: {
      lg: '15px',
    },
    fontWeight: 400,
    color: '#0E0F1D',
    py: 2.3,
    textAlign: 'center',
    '@media(min-width:768px) and (max-width: 1399px)': {
      fontSize: '13px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      fontSize: '10px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '8px',
    },
  },
  termsAndConditionBoxStyle: (linkIndex) => ({
    ml: {
      xs: linkIndex === 0 ? 1.5 : 0.5,
      sm: linkIndex === 0 ? 4 : 3,
    },
  }),
  termsAndConditionLinkStyle: { color: '#001C63' },
  termsAndConditionTextStyle: {
    color: '#001C63',
    fontSize: { lg: '15px' },
    fontWeight: 400,
    '@media(min-width:768px) and (max-width: 1399px)': {
      fontSize: '13px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      fontSize: '10px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '8px',
    },
  },
};
export const CAREERS_FOOTER_DATA = {
  contactUs: {
    label: 'Have questions about <span>our features</span>?',
    topSection: [
      {
        icon: '/images/footer/flag.png',
        text: '<span style="font-weight:500;color:#001C63 !important;">USA</span>',
        link: '',
      },
      {
        icon: '/images/footer/location.png',
        text: '6001 W Parmer Lane Ste 370 #977 Austin, TX 78727',
        link: '',
      },
    ],
    bottomSection: [
      {
        icon: '',
        text: 'Have questions about <span>our features</span>?',
        link: '',
        pr: '20px',
      },
      {
        icon: '/images/footer/email.png',
        text: 'sales@esparktalent.com',
        target: '_top',
        link: 'mailto:sales@esparktalent.com',
      },
      {
        icon: '/images/footer/email.png',
        text: 'career@esparktalent.com',
        target: '_top',
        link: 'mailto:career@esparktalent.com',
      },
      {
        icon: '/images/footer/phone.png',
        text: '+1 (323) 790-6035',
        link: 'tel:+1 (323) 790-6035',
      },
    ],
  },
};

export const HIDDEN_PATHS = ['/book-a-demo'];

export const FOOTER_DATA = {
  logo: '/images/thankyou/ThankyouPageLogo.webp',
  logoLink: '/',
  trustPilotImage: '/images/footer/social-icons/TrustPilot2.svg',
  trustPilotLink:
    'https://www.trustpilot.com/review/esparktalent.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector',
  description:
    'Our guaranteed top-tier service and industry-leading worldwide coverage provides peace of mind for any global team. With eSpark Talent next-level automation and in-house infrastructure, quality always comes first for our customers.',
  copyRight: 'eSpark Talent. All Rights Reserved.',
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
            { value: 'Have questions about our features ?' },
            {
              value: 'sales@esparktalent.com',
              link: 'mailto:sales@esparktalent.com',
            },
            {
              value: 'Already using our service and need some help?',
            },
            {
              value: 'info@esparktalent.com',
              link: 'mailto:info@esparktalent.com',
            },
          ],
        },
      ],
    },
  ],
  socialMedia: [
    {
      img: '/images/footer/social-icons/facebook.png',
      link: 'https://www.facebook.com/people/eSpark-Talent/61550048738610/',
      alt: 'facebook',
    },
    {
      img: '/images/footer/social-icons/twitter.png',
      link: 'https://www.twitter.com/eSparkTalent',
      alt: 'twitter',
    },
    {
      img: '/images/footer/social-icons/linkedin.png',
      link: 'https://www.linkedin.com/company/espark-talent/',
      alt: 'linkedIn',
    },
    {
      img: '/images/footer/social-icons/instagram.png',
      link: 'https://www.instagram.com/esparktalent/',
      alt: 'instagram',
    },
  ],
};

export const ORGANIZE_TEAM_DATA = {
  title_1: 'Organise your Team',
  title_2: 'with eSpark Talent',
  text: 'Build your dream tech team with experts, ready when you are.',
  buttonText: 'Schedule a Call',
  link: '/book-a-demo',
  images: [
    {
      img: '/images/new-home/organize-team/01.png',
      alt: '01.png',
    },
    {
      img: '/images/new-home/organize-team/02.jpg',
      alt: '02.jpg',
    },
    {
      img: '/images/new-home/organize-team/03.png',
      alt: '03.png',
    },
    {
      img: '/images/new-home/organize-team/04.png',
      alt: '04.png',
    },
  ],

  // styles
  styles: {
    mainBoxStyle: {
      mx: 'auto',
      px: 2,
      gap: 2,
      width: '95%',
      height: '100%',
      py: { xs: 3, md: 0, lg: 0 },
      minHeight: { xs: 'auto', md: '350px', lg: '360px' },
      maxWidth: { xs: '1100px', lg: '1100px' },
      backgroundImage: 'url(/images/new-home/organize-team/ok.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: { xs: '31px', sm: '41px', md: '71px' },
      backdropFilter: 'blur(63.2px)',
      WebkitBackdropFilter: 'blur(63.2px)',
      boxShadow: '0px 0px 72px rgba(27, 232, 208, 0.1)',
      border: '1px solid #1BE8D0',
      '@media(min-width: 1920px)': {
        maxWidth: '1438px',
        minHeight: '453px',
      },
      '@media(min-width: 1441px) and (max-width: 1919px)': {
        maxWidth: '75%',
        minHeight: 'clamp(360px, 10vw + 250px, 453px)',
      },
    },
    titleStyle: {
      fontSize: {
        xs: '5.73vw',
        md: '4.49vw',
        lg: '4.49vw',
      },
      fontWeight: 500,
      color: '#ffff',
      textAlign: 'center',
      textWrap: { md: 'nowrap' },
      '@media(min-width:1920px)': {
        fontSize: '85px',
      },
    },
    titleAndImagesBoxStyle: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      gap: { xs: 1.5, lg: 2.5 },
      flexWrap: 'nowrap',
      mt: { xs: 0.5, lg: 0 },
    },
    imagesBoxStyle: {
      width: 'auto',
      maxWidth: { xs: '165px', sm: '185px', md: '200px', lg: '229px' },
      maxHeight: '94px',
      border: '1px solid #fff',
      borderRadius: '50px',
      backgroundColor: '#D9D9D95E',
      p: 0.8,
      px: 1,
      display: 'flex',
      justifyContent: 'center',
      order: { xs: 1, md: 0 },
    },
    imageStyle: (index) => ({
      width: { xs: '31%', sm: '28%' },
      maxWidth: '78px',
      height: 'auto',
      ml: index === 0 ? 0 : -1.5,
    }),
    textStyle: {
      fontSize: {
        xs: '12.5px',
        sm: '14.5px',
        md: '16px',
        lg: 'clamp(20px, 2.5vw, 21px)',
      },
      fontWeight: 400,
      color: '#ffff',
      textAlign: 'center',
      maxWidth: { xs: '300px', md: '65%', lg: '100%' },
      px: 1.5,
      '@media(min-width:1441px)': {
        fontSize: 'clamp(21px, calc(3vw - 25px), 29px)',
      },
    },
    buttonStyle: {
      mb: 1,
      width: '100%',
      maxWidth: { xs: '184px', sm: '204px' },
      height: { xs: '41px', md: '45px', lg: '51px' },
      fontSize: { xs: '14px', sm: '16px', lg: '21px' },
      fontWeight: 400,
      textWrap: 'nowrap',
      backgroundColor: '#001C63',
      color: '#fff',
      borderRadius: '14px',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        backgroundColor: '#001C63',
        boxShadow: `
            0 4px 12px rgba(0, 0, 0, 0.3),         /* outer shadow */
            inset -2px 2.5px 5px 2px rgba(27, 232, 208, 1)  /* inner shadow */
          `,
      },
    },
  },
};

export const FOOTER_STYLE = {
  mainBoxStyle: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, #001C63, #04102C)',
  },
  innerBoxStyle: {
    width: '100%',
    height: '100%',
    mx: 'auto',
    maxWidth: { xs: '1080px', xl: '1438px' },
    maxHeight: { xs: '100%', lg: '380px' },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: { xs: 'space-between', md: 'space-between' },
    px: { xs: 1, md: 0.5 },
    py: { xs: 2.5, lg: 3.5 },
    flexWrap: 'nowrap',
    '@media(min-width:1441px) and (max-width: 1920px)': {
      maxWidth: '75%',
    },
    '@media(min-width:768px) and (max-width: 1399px)': {
      maxWidth: '1080px',
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
      lg: `calc(100% - 750px)`,
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
    width: { lg: '135px' },
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
    fontSize: { xs: '12px', md: '13px' },
    fontWeight: 400,
    lineHeight: { xs: '24px' },
    color: '#FFFFFF',
    pl: { md: 1.6, lg: 0 },
    pr: { md: 3, lg: 3 },
    '@media(min-width:768px) and (max-width: 1023px)': {
      pl: 1.6,
      pr: 3,
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      pl: 2,
      pr: 2,
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      pl: 1,
      pr: 1,
      fontSize: '10px',
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
    width: { lg: index === 2 ? '280px' : '200px' },
    '@media(min-width:1024px) and (max-width: 1399px)': {
      width: index === 2 ? '280px' : '180px',
    },
    '@media(min-width:768px) and (max-width: 1023px)': {
      width: index === 2 ? '190px' : '150px',
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
    minHeight: '110px',
    '@media(max-width: 767px)': {
      my: 1,
    },
  }),
  lebelStyle: {
    fontSize: { xs: '14px', lg: '18px' },
    fontWeight: 700,
    color: '#FFFFFF',
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
    fontSize: { xs: '12px', md: '13px' },
    fontWeight: 400,
    color: '#fff',
    mt: {
      xs: _textIndex === 0 ? 0 : _textIndex === 2 ? 3 : 1,
      md: _textIndex === 0 ? 0 : _textIndex === 2 ? 5.5 : 1,
    },
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    '@media(min-width:768px) and (max-width: 1023px)': {
      mt: _textIndex === 0 ? 0 : _textIndex === 2 ? 1.5 : 1,
    },
    '@media(min-width:530px) and (max-width: 767px)': {
      mt: _textIndex === 0 ? 0 : _textIndex === 2 ? 3 : 1,
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
    fontSize: { xs: '12px', lg: '13px' },
    fontWeight: 400,
    color: '#FFFFFF',
    mt: _pIndex === 0 ? 0 : 1,
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  }),
  horizontalLineStyle: {
    mx: 'auto',
    width: '90%',
    height: '2px',
    backgroundColor: '#FFFFFF',
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
    color: '#FFFFFF',
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
  termsAndConditionLinkStyle: { color: '#FFFFFF' },
  termsAndConditionTextStyle: {
    color: '#FFFFFF',
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
        text: '<span style="font-weight:500;color:#FFFFFF !important;">USA</span>',
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

export const PRICING_DATA = {
  heading: 'Ditch the Drama, Hire Top Talent.',
  subHeading: 'The Future of Global Hiring is Here',
  paragraph: `We believe in transparency. That's why we offer clear, smooth pricing models so you can budget for your global expansion with confidence.`,
  bgImage: '/images/pricing/heroBG.svg',
  heroCards: [
    {
      id: 1,
      title: 'Salary Based<br/>Employees',
      btnText: 'Book a demo',
      btnLink: '/book-a-demo',
      cardImage: '/images/pricing/pricing-hero/salary.svg',
      featured: [
        `Collaborative Work Environment`,
        `Instant Contracts and Agreements`,
        `Monthly Payroll Management`,
        `Zero employment liability on you`,
        `Perks, benefits, time-off and expenses`,
        `Multi-channel support and guidance`,
        `24/5 support from local HR and legal experts`,
      ],
    },
    {
      id: 2,
      title: 'Hourly Based<br/>Employees',
      btnText: 'Book a demo',
      btnLink: '/book-a-demo',
      cardImage: '/images/pricing/pricing-hero/hourly.svg',
      featured: [
        `Collaborative work environment`,
        `Hire and pay contractors globally`,
        `Simple Hourly Billing`,
        `Flexibility in time scheduling`,
        `Perks, benefits, time-off and expenses`,
        `Multi-channel support and guidance`,
        `24/5 support from local HR and legal experts`,
      ],
    },
    {
      id: 3,
      title: 'Dedicated<br/>Team',
      btnText: 'Book a demo',
      btnLink: '/book-a-demo',
      cardImage: '/images/pricing/pricing-hero/team.svg',
      featured: [
        `Collaborative Work Environment`,
        `Dedicated experts and project manager`,
        `Milestone or fixed invoicing`,
        `Customized systems integrations`,
        `Benefits, time-off, expenses and bonuses`,
        `Multi-channel support and guidance`,
        `24/5 support from local HR and legal experts`,
      ],
    },
  ],
  benifits: {
    heading: `Want more? We'll get you more.`,
    paragraph: `We’re on a mission to simplify every aspect of building and managing a global team.`,
    featured: [
      {
        title: 'Office space management',
        description:
          'Managing office space and related requirements for  employees',
        icon: '/images/pricing/benifits/office-space-management.png',
      },
      {
        title: 'Localized benefits and perks.',
        description:
          'We handle all aspects of employee management, including payroll, perks, and benefits.',
        icon: '/images/pricing/benifits/localized-benefits.svg',
      },
      {
        title: 'Employee replacement',
        description:
          'In case an employee leaves, we swiftly arrange for a replacement',
        icon: '/images/pricing/benifits/employee-replacement.png',
      },
      {
        title: 'Equipment to new hires',
        description:
          'Equipping new hires with laptops, software, and ergonomic furniture ensures effective work from day one.',
        icon: '/images/pricing/benifits/equipment-new-hire.svg',
      },
    ],
  },
  cta: {
    heading: 'eSpark Talent is the best solution to hire and expand globally.',
    paragraph:
      "Connect with skilled interviewers who will help you find the right people for your company's growth.",
  },
  howItWorks: {
    title: 'How It Works?',
    description:
      'Discover how eSpark talent can help you streamline onboarding, compliance, and payroll for your international team in just a few steps',
    cards: [
      {
        id: 1,
        image: '/images/pricing/pricing-work/img-2.png',
        image_res: '/images/pricing/pricing-work/img-2.png',
        heading: 'What We Do',
        rightBorder: 'true',
        desktopListItem: [
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Rapid Talent Sourcing',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Affordable Top Talent',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Candidate Interviews Handling',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Office Space Provide',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Efficient Payroll Handling',
          },
        ],
        responsiveListItem: [
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Rapid Talent Sourcing',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Affordable Top Talent',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Office Space Provide',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Efficient Payroll Handling',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Candidate Interviews Handling',
          },
        ],
      },
      {
        id: 2,
        image: '/images/pricing/pricing-work/img-1.png',
        image_res: '/images/pricing/pricing-work/img-1.png',
        heading: 'What We Handle',
        desktopListItem: [
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Streamlined Onboarding',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Full HR Management',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Swift Replacement Solutions',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Employee Benefits Management',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Performance Monitoring',
          },
        ],
        responsiveListItem: [
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Streamlined Onboarding',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Performance Monitoring',
          },

          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Full HR Management',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Swift Replacement Solutions',
          },
          {
            icon: '/images/grow-your-team/trueIcon.svg',
            item: 'Employee Benefits Management',
          },
        ],
      },
    ],
  },
};

// pricing card
export const pricingCardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  pt: 8,
  '@media(max-width: 783px)': {
    pb: 8,
  },
};

export const pricingCardHeaderContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '10px',
  width: '100%',
  mt: 4,
};

export const pricingCardDividerStyle = {
  display: 'block',
  width: '100%',
  maxWidth: { md: '410px', lg: '620px' },
  height: '1px',
  backgroundColor: '#fff',
  '@media(max-width: 783px)': {
    display: 'none',
  },
};

export const typographyBox = {
  maxWidth: { xs: '100%', sm: '580px', md: '700px', lg: '1050px' },
  px: { xs: 2.5, sm: 5, md: 0 },
};

export const headingStyle = {
  fontSize: {
    xs: '24.33px',
    sm: '29.33px',
    md: '41.33px',
    lg: '52.33px',
    xl: '61.33px',
  },
  fontWeight: 700,
  lineHeight: 1.2,
  display: { xs: 'none', lg: 'inline-flex' },
};

export const subHeadingStyle = {
  fontSize: {
    xs: '24px',
    sm: '29px',
    md: '40px',
    lg: '45px',
    xl: '50px',
  },
  fontWeight: 700,
  lineHeight: 1.2,
  display: { xs: 'none', lg: 'inline-flex' },
};

export const bothHeadingsStyle = {
  fontSize: {
    xs: '24px',
    sm: '29px',
    md: '40px',
    lg: '45px',
    xl: '50px',
  },
  fontWeight: 700,
  lineHeight: 1.2,
  display: { xs: 'flex', lg: 'none' },
};

export const paragraphStyle = {
  fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '22px' },
  fontWeight: 400,
  lineHeight: 1.5,
  mx: { xs: 2, md: 5, lg: 15 },
  mt: 0.8,
  mb: 1,
};

export const blueCardMainContainerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  py: { xs: 0, md: 3 },
  '@media (max-width:319px)': {
    pb: 2,
  },
};

export const blueCardContainerStyle = {
  '@media(max-width: 783px)': {
    display: 'none',
  },
};

export const blueCardContainer = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  mb: -9,
  '@media(max-width: 783px)': {
    mb: 0,
  },
};

export const cardStyle = {
  width: '90%',
  maxWidth: { xs: '280px', md: '300px', lg: '358px' },
  minHeight: { xs: '160px', sm: '200px', md: '459px' },
  backgroundColor: '#ffffff',
  boxShadow: '0px 4.21px 6.32px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '9px',
};

export const titleAndButtonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  position: 'relative',
  width: '100%',
  height: { xs: '135px', sm: '171px' },
  backgroundColor: '#001C63',
  borderTopRightRadius: '7px',
  borderTopLeftRadius: '7px',
  pt: 3,
  px: 3,
};

export const titleStyle = {
  position: 'relative',
  fontSize: {
    xs: '17px',
    sm: '22px',
    md: '25px',
    lg: '27px',
  },
  fontWeight: 500,
  color: '#fff',
  '@media (max-width:319px)': {
    fontSize: '17px',
  },
};

export const buttonStyle = {
  width: { xs: '100px', sm: '131px' },
  height: '31px',
  backgroundColor: '#fff',
  borderRadius: '7.04px',
  p: 1,
  color: '#001C63',
  fontSize: { xs: '10.5px', sm: '14px' },
  fontWeight: 600,
  '&:hover': {
    color: '#001C63',
    backgroundColor: '#fff',
  },
};

export const sideImageStyle = {
  width: {
    xs: '69px',
    sm: '70px',
    md: '70px',
    lg: '98px',
  },
  right: '0px',
  bottom: '0px',
  position: 'absolute',
  mr: 0,
};

export const listItemTitle = {
  fontSize: {
    xs: '15px',
    sm: '17px',
    md: '19px',
    lg: '21px',
  },
  fontWeight: 500,
  font: 'Gilroy-SemiBold',
  color: '#001C63',
  textTransform: 'capitalize',
  ml: 0.3,
  mb: 1,
};

export const listItemStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: 0.8,
  mb: 1,
  alignItems: 'start',
};

export const listItemTextStyle = {
  fontSize: {
    xs: '12px',
    sm: '13px',
    md: '14px',
    lg: '15px',
  },
  fontWeight: 500,
  font: 'Mulish',
  color: '#38383A',
};

// Pricing Benifits

export const BenifitsContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  py: 7,
  px: 1,
};

export const pricingBenifitsHeading = {
  fontSize: { xs: '25px', sm: '30px', md: '34px', lg: '39px' },
  fontWeight: 600,
  textAlign: 'center',
  mb: '5px',
};

export const pricingBenifitsSubHeading = {
  fontSize: {
    xs: '12px',
    sm: '15px',
    md: '17px',
    lg: '21px',
  },
  fontWeight: 300,
  textAlign: 'center',
  mb: '20px',
  mx: { xs: 2, md: 'auto' },
  maxWidth: { xs: '100%', md: '600px', lg: '100%' },
};

export const pricingStripe = (index) => {
  const pricingStripStackStyle = {
    width: '100%',
    maxWidth: {
      xs: index === 0 || index === 1 ? '571px' : '625px',
    },
    padding: '10px',
    boxShadow: '0px 4px 25.2px 0px #0000001F',
    borderRadius: '5px',
    position: 'relative',
    minHeight: { xs: '60px', sm: '90px', md: '110px', lg: '115px' },
    maxHeight: { xs: '90px', sm: 'auto', md: '110px', lg: '115px' },
    flexDirection: {
      xs: index % 2 === 0 ? 'row-reverse' : 'row',
    },
    ':after': {
      content: '" "',
      width: { xs: '5px', md: '5px' },
      height: '100%',
      position: 'absolute',
      top: '0px',
      backgroundColor: '#029894',
      borderRadius: '5px',
      py: 2,
    },
    '@media (max-width: 899px)': {
      mx: index === 0 || (index === 2 && 'auto'),
      mr: index !== 3 ? 'auto' : null,
      ml: index !== 1 ? 'auto' : null,
      maxWidth: index === 0 || index === 2 ? '82%' : '91%',
      flexDirection: (index === 1 && 'row-reverse') || (index === 2 && 'row'),
      ':after': {
        [index === 2 || index === 3 ? 'left' : 'right']: '0px !important',
      },
    },
    '@media (min-width: 900px)': {
      ':after': {
        content: '" "',
        width: { xs: '5px', md: '5px' },
        height: '100%',
        position: 'absolute',
        top: '0px',
        [index % 2 !== 0 ? 'left' : 'right']: '0px',
        backgroundColor: '#029894',
        borderRadius: '5px',
        py: 2,
      },
    },
  };
  const pricingStripGrid = {
    width: '100%',
    justifyContent: 'flex-end',
    display: { sm: 'inline-block', md: index === 0 && 'flex' },
    '@media (max-width: 899px)': {
      order: (index === 1 && 3) || (index === 3 && 3),
      flexBasis: '100%',
      maxWidth: '100%',
      justifyContent: 'center',
      display: 'flex',
    },
  };

  const stripImageStyle = {
    width: { xs: '24px', sm: '33px', md: '44px', lg: '55px' },
    mx: { xs: 0.5, sm: 1.5 },
    height: 'auto',
  };

  const stripeTypographyBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    pl: { xs: 0, lg: index % 2 !== 0 ? 0 : 3 },
  };

  const stripeTitleStyle = {
    '@media (min-width: 900px)': {
      textAlign: index % 2 !== 0 ? 'left' : 'right',
    },
    '@media (max-width: 899px)': {
      textAlign: index === 2 || index === 3 ? 'left' : 'right',
    },
  };

  const stripeDiscriptionStyle = {
    '@media (min-width: 900px)': {
      textAlign: index % 2 !== 0 ? 'left' : 'right',
    },
    '@media (max-width: 899px)': {
      textAlign: index === 2 || index === 3 ? 'left' : 'right',
    },
  };

  return {
    pricingStripStackStyle,
    pricingStripGrid,
    stripImageStyle,
    stripeTypographyBoxStyle,
    stripeTitleStyle,
    stripeDiscriptionStyle,
  };
};

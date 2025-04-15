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
    title: 'eSpark Talent is the best solution to hire and expand globally.',
    description:
      "Connect with skilled interviewers who will help you find the right people for your company's growth.",
    bgImage: '/images/footer/bg-img.png',
    buttonLabel: 'Book a Demo',
    buttonLink: '/book-a-demo',
    styles: {
      mainBoxStyle: {
        width: '100%',
        height: { xs: 'auto', lg: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: { xs: 'auto', lg: '457px' },
        backgroundColor: '#029894',
        '@media(min-width: 1024px) and (max-width: 1399px)': {
          maxHeight: '350px',
        },
        '@media(min-width: 768px) and (max-width: 1023px)': {
          maxHeight: '320px',
        },
        '@media(min-width: 460px) and (max-width: 767px)': {
          maxHeight: 'auto',
        },
        '@media(min-width: 360px) and (max-width: 459px)': {
          maxHeight: '200px',
        },
        '@media(min-width: 280px) and (max-width: 359px)': {
          maxHeight: 'auto',
        },
      },
      innerBoxStyle: {
        width: '94%',
        maxWidth: '1250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media(min-width: 768px) and (max-width: 1023px)': {
          width: '92%',
        },
        '@media(min-width: 460px) and (max-width: 767px)': {
          width: '92%',
        },
        '@media(min-width: 280px) and (max-width: 459px)': {
          width: '92%',
        },
      },
      contentBoxStyle: {
        width: { xs: '90%', lg: '80%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 1.5,
        maxWidth: { xs: '600px', lg: '80%' },
        py: { xs: 3, lg: 0 },
        '@media(min-width: 1024px) and (max-width: 1399px)': {
          maxWidth: '730px',
        },
      },
      titleStyle: {
        textAlign: 'center',
        fontSize: {
          lg: '54px',
        },
        fontWeight: 700,
        lineHeight: { lg: '73px' },
        color: '#ECECED',
        '@media(min-width: 1024px) and (max-width: 1399px)': {
          fontSize: '40px',
          lineHeight: '53px',
          maxWidth: '800px',
        },
        '@media(min-width: 768px) and (max-width: 1023px)': {
          fontSize: '32px',
          lineHeight: '40px',
        },
        '@media(min-width: 460px) and (max-width: 767px)': {
          fontSize: '19px',
          lineHeight: '30px',
          maxWidth: '380px',
        },
        '@media(min-width: 360px) and (max-width: 459px)': {
          fontSize: '15px',
          lineHeight: '25px',
        },
        '@media(min-width: 280px) and (max-width: 359px)': {
          fontSize: '16px',
          lineHeight: '25px',
        },
      },
      descriptionStyle: {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: 'auto',
        color: '#ECECED',
        '@media(min-width: 1024px) and (max-width: 1399px)': {
          fontSize: '20px',
        },
        '@media(min-width: 768px) and (max-width: 1023px)': {
          fontSize: '18px',
        },
        '@media(min-width: 460px) and (max-width: 767px)': {
          fontSize: '14px',
          maxWidth: '380px',
        },
        '@media(min-width: 360px) and (max-width: 459px)': {
          fontSize: '11px',
        },
        '@media(min-width: 280px) and (max-width: 359px)': {
          fontSize: '12px',
          maxWidth: '280px',
          mx: 'auto',
        },
      },
      buttonStyle: {
        mt: 1.8,
        width: '225px',
        height: '58px',
        fontSize: '16px',
        fontWeight: 700,
        backgroundColor: '#FFFFFF',
        color: '#09114A',
        ':hover': {
          backgroundColor: '#FFFFFF',
          color: '#09114A',
        },
        '@media(min-width: 1024px) and (max-width: 1399px)': {
          width: '180px',
          height: '54px',
          fontSize: '14px',
        },
        '@media(min-width: 768px) and (max-width: 1023px)': {
          width: '160px',
          height: '44px',
          fontSize: '13px',
        },
        '@media(min-width: 460px) and (max-width: 767px)': {
          width: '110px',
          height: '25px',
          fontSize: '9px',
          mt: 1,
        },
        '@media(min-width: 360px) and (max-width: 459px)': {
          width: '100px',
          height: '25px',
          fontSize: '9px',
          mt: 1,
        },
        '@media(min-width: 280px) and (max-width: 359px)': {
          width: '100px',
          height: '25px',
          fontSize: '9px',
          mt: 1,
          mx: 'auto',
        },
      },
    },
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

export const HERO_DATA = {
  subTitle: 'Need to Grow Your Team?',
  title: `Hire Top Talent On-Demand In`,
  animateText: 'Just 48 Hours.',
  description: `Scale your business worldwide with eSpark Talent’s advanced global recruitment and onboarding solutions.`,
  bgImage: '/images/homepage/hero/hero.png',
  responsiveImage: '/images/homepage/hero/hero-img-res.png',
  btnTitle: `Book A Demo`,
  btnLink: `/book-a-demo`,
};

export const DIFFERENCE_DATA = {
  title: `Why eSpark Talent Outsourcing Model is Different`,
  items: [
    {
      id: 1,
      title: `Reduce costs`,
      description: `eSpark Talent Outsourcing allows your organization to be more competitive, sustainable and profitable with 70% employee cost savings.`,
      icon: `images/new-home/differnce/icon1.svg`,
    },
    {
      id: 2,
      title: `Increase quality`,
      description: `eSpark Talent remote staffing solutions rectify skills shortages and improve internal processes by accessing expert talent pools.`,
      icon: `images/new-home/differnce/icon2.svg`,
    },
    {
      id: 3,
      title: `Scale faster`,
      description: `eSpark Talent offers offshore operations to help scale quickly, meet demand, combat rising labor costs and access specialty talent all without the overheads.`,
      icon: `images/new-home/differnce/icon3.svg`,
    },
  ],
};

export const WORKS_DATA = {
  title: `How offshoring works`,
  items: [
    {
      step: `Step 01`,
      title: `Tell us your needs`,
      description: `We discuss your requirements, budget and job details.`,
      image: `images/new-home/process/icon1.png`,
    },
    {
      step: `Step 02`,
      title: `Meet top candidates`,
      description: `Connect directly with your best matches, fully vetted and highly responsive.`,
      image: `images/new-home/process/icon2.png`,
    },
    {
      step: `Step 03`,
      title: `Hire and Onboarding`,
      description: `Decide who to hire, and we'll take care of the rest.`,
      image: `images/new-home/process/icon3.png`,
    },
  ],
};
export const EXPERT_TEAM_DATA = {
  title: `Build A World-Class Experts Team For Your Business`,
  btnTitle: `Book your demo`,
  btnLink: `/book-a-demo`,
  dapartment: [
    {
      post: 'Designer',
      icon: '/images/homepage/expert-team/designer-icon.svg',
      employees: [
        {
          name: `Ahmed Naseem`,
          link: `#`,
          position: `Sr. UI/UX Designer`,
          image: `/images/homepage/expert-team/designer-1.svg`,
        },
        {
          name: `Sam Jorden`,
          link: `#`,
          position: `UI/UX Designer`,
          image: `/images/homepage/expert-team/designer-2.svg`,
        },
        {
          name: `Miriam Sik`,
          link: `#`,
          position: `Graphic Designer`,
          image: `/images/homepage/expert-team/designer-3.svg`,
        },
      ],
    },
    {
      post: 'Developer',
      icon: '/images/homepage/expert-team/developer-icon.svg',
      employees: [
        {
          name: `Rohail Zafar`,
          link: `#`,
          position: `Full Stack Developer`,
          image: `/images/homepage/expert-team/developer-1.svg`,
        },
        {
          name: `Thomas`,
          link: `#`,
          position: `Front End Developer`,
          image: `/images/homepage/expert-team/developer-2.svg`,
        },
        {
          name: `Miller`,
          link: `/`,
          position: `Back End Developer`,
          image: `/images/homepage/expert-team/developer-3.svg`,
        },
      ],
    },
    {
      post: 'Marketers',
      icon: '/images/homepage/expert-team/marketer-icon.svg',
      employees: [
        {
          name: `Kashif Hussain`,
          link: `#`,
          position: `Digital Marketer`,
          image: `/images/homepage/expert-team/marketer-1.svg`,
        },
        {
          name: `Moryan`,
          link: `#`,
          position: `Digital Marketer`,
          image: `/images/homepage/expert-team/marketer-2.svg`,
        },
        {
          name: `Zoe`,
          link: `#`,
          position: `Social Media Executive`,
          image: `/images/homepage/expert-team/marketer-3.svg`,
        },
      ],
    },
  ],
  styles: {
    containerStyle: {
      width: '100%',
      maxWidth: '1250px',
      maxHeight: 400,
      margin: 'auto',
      position: 'relative',
    },
    slideStyle: (isMin, isMax) => ({
      paddingTop: isMin ? '30px' : '0',
      paddingBottom: isMin ? '30px' : '0' || (isMax && '0'),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      maxHeight: '400px',
    }),
    cardContainerStyle: (index) => ({
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2.2,
      alignItems: 'center',
      '@media (min-width: 1024px)': {
        mt: index == 0 || index == 2 ? 2.2 : 0,
        mb: -6.5,
      },
    }),
    typographyBoxStyle: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      gap: 1,
      ml: -2,
    },
    postTypographyStyle: {
      fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '26px' },
      fontWeight: 700,
    },
    employeeBoxStyle: (index) => ({
      width: '100%',
      minHeight: '80.83px',
      display: 'flex',
      alignItems: 'center',
      mx: 2,
      gap: 1,
      px: 2.8,
      borderRadius: '5px',
      color: `rgba(255, 255, 255, ${index === 0 ? 1 : index === 1 ? 0.6 : 0.4})`,
      background: `rgba(217, 217, 217, ${index === 0 ? 0.2 : index === 1 ? 0.1 : 0.05})`,
      maxWidth: {
        xs: '240px',
        sm: '330px',
        md: '85%',
        lg: '335px',
      },
      '@media (min-width: 1024px)': {
        maxWidth: '80%',
      },
      '@media (max-width: 374px)': {
        maxWidth: '65%',
      },
    }),
    imageStyle: (empIndex) => ({
      opacity: empIndex === 0 ? 1 : empIndex === 1 ? 0.6 : 0.4,
    }),
    nameTypogrphyStyle: {
      fontSize: {
        xs: '13px',
        sm: '15px',
        md: '16px',
        lg: '20px',
      },
      fontWeight: 700,
    },
    positionTypographyStyle: {
      fontSize: { xs: '12px', md: '13px', lg: '14px' },
      fontWeight: 500,
    },
    mainLayoutStyle: {
      width: '100%',
      color: '#fff',
      py: 6,
      background: 'linear-gradient(180deg, #029894 21.1%, #023A39 158.47%)',
      '@media (min-width: 1024px)': { gap: 10, pb: 0 },
    },
    headerBoxStyle: {
      mx: 'auto',
      maxWidth: { xs: '460px', sm: '600px', md: '700px', lg: '1100px' },
      textAlign: 'center',
      px: 3,
    },
    titleTypographyStyle: {
      fontSize: { xs: '18px', sm: '30px', md: '45px', lg: '65px' },
      fontWeight: 600,
      lineHeight: { xs: 'auto', lg: '78.66px' },
    },
    btnStyle: {
      backgroundColor: 'transparent',
      border: '1px solid #fff',
      color: '#fff',
      fontWeight: 600,
      fontSize: { xs: '15px', sm: '20px' },
      '&:hover': {
        color: '#fff',
        backgroundColor: '#029894',
        borderColor: '#029894',
      },
    },
  },
};

export const HIRING_DATA = {
  title: 'Choose from Our Flexible Hiring Models',
  btnTitle: 'Book a Demo',
  btnLink: '/book-a-demo',
  items: [
    {
      title: `Hire Hourly Based`,
      image: '/images/homepage/hiring-modals/hourly_based.svg',
      points: [
        { icon: '/images/homepage/hiring-modals/tick.svg', text: 'Pay hourly' },
        {
          icon: '/images/homepage/hiring-modals/tick.svg',
          text: 'Top 2% of talent, fully vetted',
        },
        {
          icon: '/images/homepage/hiring-modals/tick.svg',
          text: 'Flexibility in time scheduling',
        },
      ],
    },
    {
      title: `Hire Salary Based`,
      image: '/images/homepage/hiring-modals/salary_based.svg',
      points: [
        {
          icon: '/images/homepage/hiring-modals/tick.svg',
          text: 'Pay per hire',
        },
        {
          icon: '/images/homepage/hiring-modals/tick.svg',
          text: 'Vetted and ready interview',
        },
        {
          icon: '/images/homepage/hiring-modals/tick.svg',
          text: 'Zero employment liability on you',
        },
      ],
    },
    {
      title: `Hire Dedicated Team`,
      image: '/images/homepage/hiring-modals/dedicated_team.svg',
      points: [
        {
          icon: '/images/homepage/hiring-modals/tick.svg',
          text: 'Milestone or fixed invoicing',
        },
        {
          icon: '/images/homepage/hiring-modals/tick.svg',
          text: 'Dedicated experts',
        },
        {
          icon: '/images/homepage/hiring-modals/tick.svg',
          text: 'Dedicated PM for support',
        },
      ],
    },
  ],
};

export const EXPERTIES_DATA = {
  title: 'Which Experts Will Drive Your Business?',
  services: [
    {
      id: 2,
      icon: 'images/new-home/experties/icon2.svg',
      activeIcon: 'images/new-home/experties/activeIcon2.svg',
      heading: 'Front-End Developers',
      listItems: [
        {
          title: 'AngularJS Developer',
          link: '/hire-angular-developers',
        },
        {
          title: 'ReactJS Developer',
          link: '/hire-reactjs-developers',
        },
        {
          title: 'JavaScript Developer',
          link: '/hire-javascript-developers',
        },
        {
          title: 'NextJS Developer',
          link: '/hire-nextjs-developers',
        },
      ],
    },
    {
      id: 3,
      icon: 'images/new-home/experties/icon3.svg',
      activeIcon: 'images/new-home/experties/activeIcon3.svg',
      heading: 'Back-End Developers',
      listItems: [
        {
          title: 'ASP .NET Developer',
          link: '/hire-asp-dot-net-developers',
        },
        { title: 'PHP Developer', link: '/hire-php-developers' },
        { title: 'Python Developer', link: '/hire-python-developers' },
        { title: 'NodeJS Developer', link: '/hire-nodejs-developers' },
      ],
    },
    {
      id: 4,
      icon: 'images/new-home/experties/icon4.svg',
      activeIcon: 'images/new-home/experties/activeIcon4.svg',
      heading: 'Digital Marketer',
      listItems: [
        {
          title: 'Social Media Expert',
          link: '/hire-social-media-experts',
        },
        { title: 'PPC Specialist', link: '/hire-ppc-specialists' },
        { title: 'SEO Expert', link: '/hire-seo-experts' },
        {
          title: 'Performance Marketer',
          link: '/hire-performance-marketers',
        },
      ],
    },
    {
      id: 5,
      icon: 'images/new-home/experties/icon5.svg',
      activeIcon: 'images/new-home/experties/activeIcon5.svg',
      heading: 'Embedded Developers',
      listItems: [
        {
          title: 'Firmware Developer',
          link: '/hire-firmware-developers',
        },
        { title: 'PCB Designer', link: '/hire-pcb-designers' },
        {
          title: 'Embedded System Engineer',
          link: '/hire-embedded-system-engineers',
        },
      ],
    },
    {
      id: 6,
      icon: 'images/new-home/experties/icon6.svg',
      activeIcon: 'images/new-home/experties/activeIcon6.svg',
      heading: 'Ecommerce Developers',
      listItems: [
        {
          title: 'WordPress Developer',
          link: '/hire-wordpress-developers',
        },
        {
          title: 'Shopify Developer',
          link: '/hire-shopify-developers',
        },
      ],
    },
    {
      id: 7,
      icon: 'images/new-home/experties/icon7.svg',
      activeIcon: 'images/new-home/experties/activeIcon7.svg',
      heading: 'Mobile App Developers',
      listItems: [
        {
          title: 'Android Developer',
          link: '/hire-android-developers',
        },
        {
          title: 'Flutter Developer',
          link: '/hire-flutter-developers',
        },
        {
          title: 'React Native Developer',
          link: '/hire-react-native-developers',
        },
      ],
    },
    {
      id: 1,
      icon: 'images/new-home/experties/icon1.svg',
      activeIcon: 'images/new-home/experties/activeIcon1.svg',
      heading: 'Trending',
      listItems: [
        { title: 'UI UX Designer', link: '/hire-ui-ux-designers' },
        {
          title: 'Full Stack Developer',
          link: '/hire-full-stack-developers',
        },
        {
          title: 'MEAN Stack Developer',
          link: '/hire-mean-stack-developers',
        },
        {
          title: 'MERN Stack Developer',
          link: '/hire-mern-stack-developers',
        },
        { title: 'DevOps Engineer', link: '/hire-devops-engineers' },
        {
          title: 'Fintech Developer',
          link: '/hire-fintech-developers',
        },
        {
          title: 'Software Developer',
          link: '/hire-software-developers',
        },
        { title: 'QA Engineer', link: '/hire-qa-engineers' },
      ],
    },
  ],
  styles: {
    containerStyle: { py: { xs: '50px', sm: '75px' } },
    accordionStyle: { border: '1px solid #6A6565', boxShadow: 'none' },
    accrodionSummaryStyle: {
      display: 'flex',
      gap: '10px',
    },
    imageStyle: { width: '25px', height: '25px' },
    serviceTypographyStyle: (expandedAccordion, index) => ({
      px: '10px',
      fontSize: {
        xs: '16px',
        sm: '17px',
        md: '18px',
      },
      fontWeight: 400,
      color: expandedAccordion === index ? '#354899' : '#029894',
    }),
    titleStyle: (hire_remote_developers) => ({
      fontSize: {
        xs: '11.91px',
        sm: '11.91px',
        md: '16px',
        lg: '14.28px',
        xl: '14.28px',
      },
      fontWeight: 400,
      lineHeight: 2.5,
      color: '#000000',
      my: hire_remote_developers ? 0.5 : 0,
    }),
  },
};

export const OFFSHORE_DATA = {
  title: `How offshoring works`,
  bgImage: `/images/new-home/offshore-works/bg.png`,
  bgImageInvert: `/images/new-home/offshore-works/bg-invert.png`,
  items: [
    {
      invert: false,
      icon: '/images/new-home/offshore-works/no1.png',
      title: 'Tell us your needs',
      description: 'We discuss your requirments, budget and job details.',
    },
    {
      invert: true,
      icon: '/images/new-home/offshore-works/no2.png',
      title: 'Meet top candidates',
      description:
        'Connect directly with your best matches, fully vetted and highly responsive.',
    },
    {
      invert: false,
      icon: '/images/new-home/offshore-works/no3.png',
      title: 'Hire and Onboarding',
      description: "Decide who to hire, and we'll take care of the rest.",
    },
  ],
};

// pricing Defference

export const containerStyle = {
  width: '100%',
  maxWidth: 1210,
  margin: 'auto',
  padding: '8px 0',
  position: 'relative',
  py: { xs: 2, md: 4, lg: 7 },
  // mb: { xs: 3, md: 4, lg: 7 },
};

export const headingStyle = {
  width: '100%',
  mx: 'auto',
  maxWidth: { xs: '75%', sm: '70%', md: '60%', lg: '65%' },
  display: 'flex',
  justifyContent: 'center',
  pb: { xs: 2, sm: 3, md: 4, lg: 5 },
};

export const headingTextStyle = {
  color: '#001C63',
  textAlign: 'center',
  fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '32px' },
  fontWeight: 700,
  lineHeight: { xs: '30px', md: '48px' },
};

export const slideStyle = {
  paddingTop: '30px',
  paddingBottom: '30px',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  maxHeight: '400px',
};

export const cardStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  mx: { xs: 2, md: 1.5, lg: 1.5 },
  height: '100%',
  minHeight: { xs: '147px', sm: '180px', md: '243px', lg: '243px' },
  width: '100%',
  maxWidth: '400px',
  backgroundColor: '#F7F8FB',
  borderRadius: '15px',
  border: '0.9px solid rgba(0, 0, 0, 0.5)',
  '@media(min-width:1024px) and (max-width:1123px)': {
    mx: 1.4,
    maxWidth: '100%',
    minHeight: '270px',
    maxHeight: '100%',
  },
  '@media(min-width:952px) and (max-width:1023px)': {
    mx: 1,
    maxWidth: '100%',
    minHeight: '200px',
  },
  '@media(min-width:900px) and (max-width:951px)': {
    mx: 1,
    maxWidth: '100%',
    minHeight: '220px',
  },
  '@media(min-width:480px) and (max-width:768px)': {
    mx: 1,
    maxWidth: '350px',
  },
  '@media(min-width:320px) and (max-width:479px)': {
    mx: 1,
    maxWidth: '271px',
  },
  '&:hover': {
    backgroundColor: 'rgb(255, 255, 255)',
  },
};

export const avatarStyle = {
  width: { xs: '33px', sm: '40px', lg: '50px' },
  height: { xs: '33px', sm: '40px', lg: '43px' },
};

export const titleStyle = {
  color: '#001C63',
  fontSize: {
    xs: '19.27px',
    sm: '24px',
    md: '28px',
    lg: '28.83px',
  },
  fontWeight: 600,
  lineHeight: { md: 'auto', lg: 1.8 },
};

export const contentStyle = {
  textAlign: { xs: 'center', lg: 'left' },
  mx: 'auto',
  pt: 0,
};

export const paragraphStyle = {
  color: '#001C63',
  fontSize: {
    xs: '12px',
    sm: '12px',
    md: '17px',
    lg: '18px',
  },
  fontWeight: 400,
  lineHeight: 1.4,
};

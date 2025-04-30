import { borderRadius, maxWidth } from '@mui/system';

export const HERO_DATA = {
  subTitle: 'Need to Grow Your Team?',
  title: `Hire Top Talent On-Demand In`,
  animateText: 'Just 48 Hours.',
  description: `Scale your business worldwide with eSpark Talent’s advanced global recruitment and onboarding solutions.`,
  bgImage: '/images/homepage/hero/hero.png',
  responsiveImage: '/images/homepage/hero/hero-img-res.png',
  btnTitle: `Book A Demo`,
  btnLink: `/book-a-demo`,
  styles: {
    mainBoxStyle: {
      width: '100%',
      color: '#fff',
      background: 'linear-gradient(180deg, #029894 21.1%, #023A39 158.47%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerBoxStyle: {
      width: '100%',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'flex-end',
      py: { xs: 3, sm: 4, md: 0 },
      pl: 3,
      '@media (min-width: 1650px) and (max-width: 1920px)': {
        py: 6,
        pl: 6,
      },
      '@media(min-width:1921px)': {
        justifyContent: 'space-between',
        py: 6,
        pl: 16,
      },
      '@media(min-width:1300px) and (max-width:1649px)': { py: 5 },
    },
    contentBoxStyle: {
      height: '100%',
      pr: { xs: 3.5, sm: 2 },
      width: { xs: 'auto', md: '850px', lg: '900px' },
      '@media(min-width:1921px)': { mx: 'auto' },
    },
    topHorizontalLineStyle: { width: { xs: '90%', sm: '62%' }, mt: 4, mb: 1 },
    subTitleStyle: {
      fontSize: { xs: '22px', sm: '28px', md: '30px', lg: `42px` },
      fontWeight: 400,
      '@media (min-width: 1650px)': { fontSize: '61px' },
    },
    titleStyle: {
      fontSize: { xs: '27px', sm: '30px', md: '40px' },
      lineHeight: {
        xs: 'calc(1.3 * 27px)',
        sm: 'calc(1.3 * 30px)',
        md: 'calc(1.3 * 32px)',
      },
      fontWeight: 'bold',
      '@media (min-width: 1440px)': {
        fontSize: '49px',
        lineHeight: 'calc(1.3 * 49px)',
      },
      '@media (min-width: 1650px)': {
        fontSize: '55px',
        lineHeight: 'calc(1.3 * 55px)',
      },
    },
    animationTextStyle: {
      display: 'inline-block',
      fontSize: {
        xs: '27px',
        sm: '30px',
        md: '40px',
        lg: '49px',
        xl: '55px',
      },
    },
    descriptionBoxStyle: { maxWidth: '700px', pr: 2, pt: 1.2 },
    descriptionTextStyle: {
      fontSize: { xs: '16px', sm: '18px', md: '18px', lg: '22px' },
      fontWeight: 300,
      '@media (min-width: 1650px)': { fontSize: '18px' },
      '@media (min-width: 1920px)': { fontSize: '22px' },
    },
    buttonBoxStyle: { width: 'auto', mt: 2.5 },
    buttonStyle: {
      backgroundColor: 'transparent',
      border: '1px solid #fff',
      color: '#fff',
      fontWeight: 600,
      fontSize: { xs: '18px', sm: '20px' },
      '&:hover': {
        color: '#fff',
        backgroundColor: '#029894',
        borderColor: '#029894',
      },
    },
    bottomHorizontalLineStyle: { width: { xs: '90%', sm: '100%' }, my: 2.5 },
    bgImageStyle: (bgImage) => ({
      width: { sm: '500px', md: '726px' },
      height: { sm: '400px', md: '639px' },
      display: { xs: 'none', md: 'flex' },
      background: `url(${bgImage || ''})`,
      backgroundSize: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }),
    responsiveImageStyle: {
      display: { xs: 'flex', md: 'none' },
      mt: 4,
      ml: 'auto',
      mr: 0,
    },
  },
};
export const EMPLOYEE_HERO_DATA = {
  subTitle: `75% of <span style="color: #029894">Employers</span> Face Talent Shortages`,
  title: `Hire Top Talent Now`,
  description: `Connect with top-tier talent through our technical recruiting services. Struggling with HR tasks and finding tech talent? We’ve got you covered! Our HR outsourcing handles processes, and our specialized recruiters find exceptional top talents.`,
  bgImage: '/images/homepage/hero/emp-hero.png',
  textureImage: '/images/homepage/hero/texture-img.png',
  animatedGif: '/images/homepage/hero/65.gif',
  animatedVideo: '/images/homepage/hero/eSpark-New.webm',
  btnTitle: `Request Candidate`,
  btnLink: `/book-a-demo`,
  styles: {
    mainBoxStyle: (bgImage) => ({
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundPosition: 'top',
      position: 'relative',
      zIndex: 5,
      '@media(min-width:1024px) and (max-width:1399px)': {
        pt: 2.5,
      },
      '@media(min-width:1024px)': {
        backgroundImage: `url(${bgImage})`,
      },

      '@media(max-width:1023px)': {
        pt: 5.5,
      },
    }),
    innerBoxStyle: {
      mx: 'auto',
      maxWidth: '1400px',
      display: 'flex',
      gap: { xs: 3, md: 8, lg: 0 },
      '@media (min-width: 1024px)': {
        justifyContent: 'center',
        alignItems: 'center',
      },
      '@media (max-width: 1023px)': {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '100%',
      },
      '@media (min-width: 600px) and (max-width: 1023px)': {
        px: 6,
        pb: 0,
      },
    },
    contentBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      color: '#101828',
      maxWidth: {
        md: 'calc(100% - 620px)',
        lg: `calc(100% - 715px)`,
        xl: `calc(100% - 615px)`,
      },
      pl: { sm: 5, lg: 6, xl: 0 },
      '@media (min-width: 600px) and (max-width: 1023px)': {
        maxWidth: '550px',
        textAlign: 'center',
        alignItems: 'center',
        pl: 0,
      },
      '@media (min-width: 280px) and (max-width: 599px)': {
        maxWidth: '100%',
        textAlign: 'center',
        alignItems: 'center',
        px: 2,
      },
    },
    subTitleBoxStyle: {
      '@media (max-width: 1023px)': {
        width: '100%',
        maxWidth: '400px',
        mx: 'auto',
      },
    },
    subTitleStyle: {
      mb: 0.5,
      color: '#0B395A',
      fontSize: {
        xs: '17px',
        sm: '20px',
        md: '21px',
        lg: '24px',
        xl: '29px',
      },
      fontWeight: 600,
      lineHeight: {
        xs: 1.2,
      },
    },
    titleStyle: {
      color: '#0B395A',
      fontSize: {
        xs: '30px',
        sm: '40px',
        md: '55px',
        lg: '58px',
        xl: '70px',
      },
      fontWeight: 600,
      lineHeight: {
        xs: '40px',
        sm: '55px',
        md: '65px',
        lg: '85px',
        xl: '85px',
      },
      maxWidth: '785px',
    },
    descriptionStyle: {
      fontSize: { xs: '10px', sm: '14px', md: '15px', lg: '18px' },
      lineHeight: { xs: '19px', sm: '24px', md: '28px' },
      fontWeight: 400,
      color: '#1D2939',
      mt: { xs: 1.3, lg: 1 },
      pr: { xs: 3, lg: 5, xl: 9 },
      '@media (min-width: 280px) and (max-width: 599px)': {
        px: 2,
      },
    },
    btnStyle: {
      width: '246px',
      height: '44px',
      background: '#029894',
      justifyContent: 'space-between',
      color: '#fff',
      pl: 3,
      pr: 1.5,
      mt: 3,
      fontSize: '17px',
      borderRadius: '36px',
      '&:hover': {
        backgroundColor: '#029894',
        background: '#029894',
        color: '#fff',
      },
      '@media(min-width:0) and (max-width:1249px)': {
        fontSize: '12px',
        width: '190px',
      },
    },
    endIconStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 0.5,
      backgroundColor: '#175A59',
      borderRadius: '100%',
      '@media(min-width:1024px) and (max-width:1249px)': {
        width: '30px',
        height: '30px',
      },
    },
    imageBoxStyle: {
      width: '100%',
      maxWidth: {
        xs: '80%',
        md: '50%',
        lg: 'auto',
        xl: 'auto',
      },
      '@media (min-width: 600px) and (max-width: 1023px)': {
        maxWidth: '400px',
        mx: 'auto',
      },
    },
    imageStyle: {
      position: 'relative',
      objectFit: 'contain',
      width: { xs: 'auto', md: '580px', lg: '650px', xl: '704px' },
      height: { xs: 'auto', lg: 'auto', xl: '650px' },
    },
  },
};

export const DIFFERENCE_DATA = {
  title: `Why eSpark Talent Outsourcing Model is Different`,
  items: [
    {
      id: 1,
      title: `Scale faster`,
      description: `eSpark Talent offers offshore operations to help scale quickly, meet demand, combat rising labor costs and access specialty talent all without the overheads.`,
      icon: `images/new-home/differnce/scale_faster.svg`,
    },
    {
      id: 2,
      title: `Increase Quality & Efficiency`,
      description: `eSpark Talent remote staffing solutions rectify skills shortages and improve internal processes by accessing expert talent pools.`,
      icon: `images/new-home/differnce/increase_quality.svg`,
    },
    {
      id: 3,
      title: `Reduce costs`,
      description: `eSpark Talent Outsourcing allows your organization to be more competitive, sustainable and profitable with 70% employee cost savings.`,
      icon: `images/new-home/differnce/reduce_costs.svg`,
    },
  ],
};
export const DIFFERENCE_DATA_FOR_REMOTE = {
  title: `Why eSpark Talent Outsourcing Model is Different`,
  items: [
    {
      id: 1,
      title: `Scale faster`,
      description: `eSpark Talent offers offshore operations to help scale quickly, meet demand, combat rising labor costs and access specialty talent all without the overheads.`,
      icon: `images/new-home/differnce/scale_faster.svg`,
    },
    {
      id: 2,
      title: `Increase quality`,
      description: `eSpark Talent remote staffing solutions rectify skills shortages and improve internal processes by accessing expert talent pools.`,
      icon: `images/new-home/differnce/increase_quality.svg`,
    },

    {
      id: 3,
      title: `Reduce costs`,
      description: `eSpark Talent Outsourcing allows your organization to be more competitive, sustainable and profitable with 70% employee cost savings.`,
      icon: `images/new-home/differnce/reduce_costs.svg`,
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
      post: 'Designers',
      icon: '/images/homepage/expert-team/designer-icon.svg',
      employees: [
        {
          name: `Mubbshir Shahid`,
          link: `#`,
          position: `Sr. UI/UX Designer`,
          image: `/images/homepage/expert-team/designer-1.png`,
        },
        {
          name: `Sam Jorden`,
          link: `#`,
          position: `UI/UX Designer`,
          image: `/images/homepage/expert-team/designer-2.png`,
        },
        {
          name: `Miriam Sik`,
          link: `#`,
          position: `Graphic Designer`,
          image: `/images/homepage/expert-team/designer-3.png`,
        },
      ],
    },
    {
      post: 'Developers',
      icon: '/images/homepage/expert-team/developer-icon.svg',
      employees: [
        {
          name: `Rohail Zafar`,
          link: `#`,
          position: `Full Stack Developer`,
          image: `/images/homepage/expert-team/developer-1.png`,
        },
        {
          name: `Thomas`,
          link: `#`,
          position: `Front End Developer`,
          image: `/images/homepage/expert-team/developer-2.png`,
        },
        {
          name: `Miller`,
          link: `/`,
          position: `Back End Developer`,
          image: `/images/homepage/expert-team/developer-3.png`,
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
          image: `/images/homepage/expert-team/marketer-1.png`,
        },
        {
          name: `Moryan`,
          link: `#`,
          position: `Digital Marketer`,
          image: `/images/homepage/expert-team/marketer-2.png`,
        },
        {
          name: `Zoe`,
          link: `#`,
          position: `Social Media Executive`,
          image: `/images/homepage/expert-team/marketer-3.png`,
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
        xs: '230px',
        sm: '300px',
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
      width: { xs: '95%', md: '96.2%' },
      mx: 'auto',
      maxWidth: '1646px',
      borderRadius: '33px',
      color: '#fff',
      py: { xs: 5, sm: 6 },
      background: 'linear-gradient(180deg, #0B1B61 20%, #020B21 100%)',
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
  styles: {
    mainBoxStyle: {
      '@media(min-width:768px)': { px: 3 },
    },
    innerBoxStyle: {
      width: '100%',
      maxWidth: 1210,
      margin: 'auto',
      position: 'relative',
    },
    titleBoxStyle: { pb: 4, px: 3 },
    titleStyle: {
      fontSize: { xs: '26px', sm: '28px', md: '30px', lg: '32px' },
      fontWeight: 600,
      color: '#001C63',
      textAlign: 'center',
    },
    buttonBoxStyle: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    buttonStyle: {
      mt: 1.5,
      mx: 'auto',
      width: '152px',
      height: '48px',
      color: '#001C63',
      backgroundColor: '#fff',
      border: '1px solid #001C63',
      textWrap: 'nowrap',
      borderRadius: '5px',
      fontSize: '19px',
      fontWeight: 600,
      '&:hover': {
        backgroundColor: '#fff',
        color: '#001C63',
      },
    },
    slideStyle: {
      backgroundColor: '#fff',
      borderRadius: '9px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    cardStyle: {
      width: '100%',
      maxWidth: { sm: '376px', lg: '376.38px' },
      minHeight: { xs: '160px', sm: '200px', md: '245.1px' },
      border: '1px solid #029894',
      borderRadius: '9px',
      mx: 'auto',
      '@media(min-width:0px) and (max-width:480px)': {
        maxWidth: '80%',
      },
    },
    cardHeaderStyle: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      width: 'auto',
      height: { xs: 'auto', sm: '82', md: '82px', lg: '92px' },
      backgroundColor: '#029894',
      borderTopRightRadius: '7px',
      borderTopLeftRadius: '7px',
      px: 2,
      py: { xs: 2, sm: 2.5, md: 0 },
    },
    cardBodyStyle: { p: 3 },
    ulStyle: { pl: 0 },
    liStyle: {
      display: 'flex',
      gap: 1,
      mb: 1,
      alignItems: 'start',
    },
    cardImageStyle: { mt: 0.7 },
    itemTextStyle: {
      fontSize: {
        xs: '15px',
        sm: '16px',
        md: '16px',
        lg: '18px',
      },
      fontWeight: 500,
      color: '#354899',
    },
  },
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
    containerStyle: { py: { xs: 5.5, sm: 6, md: 7, lg: 10 } },
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
  styles: {
    mainBoxStyle: { backgroundColor: '#F7F8FB' },
    titleAndSwiperBoxStyle: {
      width: '100%',
      maxWidth: 1250,
      margin: 'auto',
      padding: '8px 0',
      position: 'relative',
      py: { xs: 5, sm: 6, md: 7, lg: 10 },
      px: 2,
    },
    titleStyle: {
      textAlign: 'center',
      fontSize: { xs: '22px', sm: '25px', md: '28px', lg: '32px' },
      lineHeight: 1.5,
    },
    slideStyle: {
      paddingTop: '30px',
      paddingBottom: '40px',
      display: 'flex',
      justifyContent: 'center',
      height: 'auto',
    },
    cardStyle: (index, bgImage, bgImageInvert) => ({
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      backgroundImage: {
        xs: `url(${bgImage})`,
        md: `url(${index % 2 == 1 ? bgImageInvert : bgImage})`,
      },
      backgroundRepeat: 'no-repeat',
      zIndex: 0,
      px: 3,
      py: 2.5,
      backgroundPosition: {
        xs: 'bottom',
        md: index % 2 == 1 ? 'top' : 'bottom',
      },
      backgroundSize: '100% 100%',
      borderRadius: '25px',
      my: 3,
      '@media(min-width: 768px) and (max-width: 1023px) ': {
        backgroundSize: '90% 100%',
        backgroundImage: `url(${index % 2 == 1 ? bgImageInvert : bgImage})`,
      },
      '@media(min-width: 481px) and (max-width: 767px) ': {
        backgroundSize: '100% 100%',
        backgroundImage: `url(${bgImage})`,
      },
      '@media(min-width: 280px) and (max-width: 480px) ': {
        py: 4,
      },
    }),
    imageStyle: (index) => ({
      zIndex: 3,
      width: { xs: 70, sm: 70, md: 80, lg: 100 },
      height: 'auto',
      position: 'absolute',
      top: index % 2 == 1 ? 'auto' : -30,
      bottom: index % 2 == 1 ? -30 : 'auto',
      left: '50%',
      transform: 'translate(-50%)',
      boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)',
      borderRadius: '100%',
      '@media (min-width: 481px) and (max-width: 767px)': {
        top: -10,
        bottom: 'auto',
      },
      '@media (max-width: 480px)': {
        top: -8,
        bottom: 'auto',
      },
    }),
    innerCardStyle: (index) => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: `#fff`,
      zIndex: 1,
      maxWidth: '100%',
      height: '100%',
      px: 2,
      '@media(min-width: 1400px)': {
        maxWidth: '361px',
        pt: index % 2 == 0 ? 1.5 : 0,
        pb: index % 2 == 1 ? 2 : 0,
        minHeight: index % 2 == 0 ? '209px' : '205px',
        maxHeight: '197px',
      },
      '@media(min-width: 1024px) and (max-width:1399px)': {
        maxWidth: '361px',
        pt: index % 2 == 0 ? 1.5 : 0,
        pb: index % 2 == 1 ? 2 : 0,
        minHeight: index % 2 == 0 ? '200px' : '180px',
        maxHeight: '197px',
      },
      '@media(min-width: 768px) and (max-width:1023px)': {
        maxWidth: '80%',
        pt: index % 2 == 0 ? 1.5 : 0,
        pb: index % 2 == 1 ? 2 : 0,
        minHeight: index % 2 == 0 ? '195px' : '170px',
        maxHeight: '197px',
      },
      '@media(min-width: 481px) and (max-width:767px)': {
        maxWidth: '320px',
        pt: 1.5,
        pb: 0,
        minHeight: index % 2 == 0 ? '195px' : '170px',
        maxHeight: '197px',
      },
      '@media(min-width: 360px) and (max-width:480px)': {
        maxWidth: '320px',
        pt: 1.5,
        pb: 0,
        minHeight: '170px',
        maxHeight: 'auto',
      },
      '@media(min-width: 280px) and (max-width:359px)': {
        maxWidth: '320px',
        pt: 1.5,
        pb: 0,
        minHeight: '210px',
        maxHeight: 'auto',
      },
      boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
      borderRadius: '25px',
    }),
    cardTitleStyle: {
      color: '#001C63',
      fontSize: {
        xs: '18px',
        sm: '20px',
        md: '22.71px',
        lg: '28.71px',
      },
      lineHeight: '26px',
      fontWeight: 700,
      textAlign: 'center',
    },
    dividerStyle: {
      mt: 1,
      width: '80%',
      color: '#f00',
    },
    descriptionStyle: {
      color: '#001C63',
      fontSize: { xs: '13px', sm: '14.95px' },
      fontWeight: 500,
      lineHeight: '26.32px',
      textAlign: 'center',
      px: 1.5,
    },
  },
};

// pricing Defference

export const containerStyle = {
  width: '100%',
  maxWidth: 1210,
  margin: 'auto',
  padding: '8px 0',
  position: 'relative',
  py: { xs: 2, md: 4, lg: 7 },
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

export const cardStyleForHomePage = {
  ...cardStyle,
  boxShadow: '0',
  border: '1px solid #F7F8FB',
  '&:hover': {
    backgroundColor: '#fff',
    boxShadow: '0px 0px 11px 0 rgba(0,0,0,0.17)',
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
    lg: '28.83px',
  },
  fontWeight: 600,
  lineHeight: { md: 'auto', lg: 1.5 },
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
    sm: '14px',
    lg: '16px',
  },
  fontWeight: 400,
  lineHeight: '27px',
};

export const PricingDefferenceStyles = {
  containerStyle: {
    width: '100%',
    maxWidth: 1460,
    margin: 'auto',
    padding: '8px 0',
    position: 'relative',
    py: { xs: 2, md: 4, lg: 7 },
  },
  mainTitleStyle: {
    textAlign: 'center',
    fontSize: { xs: '22px', sm: '25px', md: '28px', lg: '32px' },
    lineHeight: 1.5,
  },
  cardStyle: {
    width: '100%',
    height: '100%',
    maxWidth: '467px',
    minHeight: { xs: '215px', md: '250px', lg: '280px' },
    backgroundColor: '#FFFFFF',
    border: '0.9px solid #DEDCDC',
    boxShadow: '0px 4px 25.4px rgba(0, 0, 0, 0.08)',
    borderRadius: '14px',
    mx: 1.8,
    px: 2.2,
    py: { xs: 1.5, sm: 1 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageStyle: {
    width: { xs: '45px', sm: '55px', lg: '80px' },
    height: 'auto',
    mb: 1,
  },
  typoBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 1, lg: 0 },
    minHeight: { md: '170px', lg: '150px' },
  },
};

export const EMPLOYEE_SLIDER_DATA = {
  slides: [
    {
      id: 1,
      videoUrl:
        'https://talent-main.s3.us-east-005.backblazeb2.com/GIFs/GIF1.gif',
      thumbnailUrl: '/images/homepage/hero/thumbnails/thmb-1.svg',
    },
    {
      id: 2,
      videoUrl:
        'https://talent-main.s3.us-east-005.backblazeb2.com/GIFs/GIF2.gif',
      thumbnailUrl: '/images/homepage/hero/thumbnails/thmb-2.svg',
    },
    {
      id: 3,
      videoUrl:
        'https://talent-main.s3.us-east-005.backblazeb2.com/GIFs/GIF3.gif',
      thumbnailUrl: '/images/homepage/hero/thumbnails/thmb-3.svg',
    },
    {
      id: 4,
      videoUrl:
        'https://talent-main.s3.us-east-005.backblazeb2.com/GIFs/GIF4.gif',
      thumbnailUrl: '/images/homepage/hero/thumbnails/thmb-4.svg',
    },
    {
      id: 5,
      videoUrl:
        'https://talent-main.s3.us-east-005.backblazeb2.com/GIFs/GIF5.gif',
      thumbnailUrl: '/images/homepage/hero/thumbnails/thmb-5.svg',
    },
  ],
  styles: {
    swiperStyle: {
      width: '100%',
      height: '100%',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    swiperSlideStyle: {
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      maxWidth: '230px',
    },
    videoStyle: {
      width: '100%',
      maxWidth: '230px',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '16.08px',
    },
  },
};

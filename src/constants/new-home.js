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
export const EMPLOYEE_HERO_DATA = {
  subTitle: `75% of <span style="color: #029894">Employers</span> Face Talent Shortages`,
  title: `Hire Top Talent Now`,
  description: `Connect with top-tier talent through our technical recruiting services. Struggling with HR tasks and finding tech talent? We’ve got you covered! Our HR outsourcing handles processes, and our specialized recruiters find exceptional top talents.`,
  bgImage: '/images/homepage/hero/emp-hero.png',
  textureImage: '/images/homepage/hero/texture-img.png',
  animatedGif: '/images/homepage/hero/65.gif',
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
      height: { xs: 'auto', lg: '650px' },
    },
  },
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
      post: 'Designers',
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
      post: 'Developers',
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    videoStyle: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '16.08px',
    },
  },
};

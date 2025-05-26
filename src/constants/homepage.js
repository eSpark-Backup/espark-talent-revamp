export const CLIENT_SLIDER_BREAK_POINTS = {
  280: {
    slidesPerView: 1,
  },
  300: {
    slidesPerView: 2,
  },
  425: {
    slidesPerView: 3,
  },
  600: {
    slidesPerView: 4,
  },
  768: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 5,
  },
  1440: {
    slidesPerView: 7,
  },
  1920: {
    slidesPerView: 8,
  },
};

export const OUTSOURCE_BENEFITS_DATA = {
  title:
    'Our Offshore Outsourcing Benefits Are Applauded By Global Business Brands​',
  paragraph: `Flexible and easy service offering is the secret of our success in the IT outsourcing market. Hire us and fill out all your HR outstaffing requirements today!`,
  items: [
    {
      icon: '/images/homepage/outsource-benefits/active_service.svg',
      title: '24/7 Active Service',
      paragraph: `Experience an unwavering commitment to your needs with 24/7 active HR outsourcing. It's not just a solution; it's an around-the-clock partner in success.`,
    },
    {
      icon: '/images/homepage/outsource-benefits/trustful_connection.svg',
      title: 'Trustful Connection',
      paragraph: `Forge a bond built on trust. eSpark Talent goes beyond transactions; we cultivate lasting relationships based on reliability and mutual confidence.`,
    },
    {
      icon: '/images/homepage/outsource-benefits/innovation.svg',
      title: 'Innovation Injection',
      paragraph: `Inject innovation into your projects. Our employees outsourcing services aren't just about tasks; they're a seamless blend of creativity and cutting-edge solutions.`,
    },
    {
      icon: '/images/homepage/outsource-benefits/friendly.svg',
      title: 'Friendly Communication',
      paragraph: `Communication shouldn't just be a channel; it should be a conversation. Enjoy a dialogue that fosters understanding, cooperation, and shared success with outsourced HR.`,
    },
    {
      icon: '/images/homepage/outsource-benefits/icon5.svg',
      title: 'Smart Professionals',
      paragraph: `Our offered professionals will be the real geniuses behind your success story. Expect brilliance, innovation, and expertise from dedicated outsourcing professionals.`,
    },
    {
      icon: '/images/homepage/outsource-benefits/icon6.svg',
      title: 'Employer Satisfaction',
      paragraph: `Your satisfaction is a measure of success for us. Live through the unimaginable joy of contented employers, knowing needs are not just met but exceeded through outsourcing.`,
    },
  ],
};

export const PROCESS_DATA = {
  title: 'Talent Acquisition Process',
  subTitle: 'Hire Outsourced Staff In Minutes At eSpark Talent.',
  icon: '/images/homepage/experties/experties-icon.svg',
  processes: [
    {
      title: 'Meet Our HR Experts, Craft Your Team.​​',
      text: 'Schedule a meeting with our HR Team, participate in in-depth interviews, and collaboratively choose the ideal expert developers for your business.​​',
      image: '/images/homepage/our-process/process-1.svg',
      isReverse: false,
      alignment: 'left',
    },
    {
      title: 'Tailor Your Needs for Top Talent.​​',
      text: 'Provide detailed insights into your employee outsourcing requirements, enabling us to identify and secure the best talent for your business.​​​',
      image: '/images/homepage/our-process/process-2.svg',
      isReverse: false,
      alignment: 'right',
    },
    {
      title: 'Smooth Onboarding for Easy Integration​​​',
      text: 'Ensure a smooth transition for your selected experts with our swift and efficient HR outsourcing assistance, making the onboarding process hassle-free​',
      image: '/images/homepage/our-process/process-3.svg',
      isReverse: false,
      alignment: 'left',
    },
  ],
  styles: {
    mainBoxStyle: {
      mx: 'auto',
      maxWidth: { xs: 'auto', md: '1000px', lg: '1100px' },
      py: { sm: 9, md: 10 },
      px: { sm: 5, md: 4, lg: 0 },
      '@media (min-width: 720px) and (max-width: 767px)': {
        px: 2,
        py: 7,
      },
      '@media (min-width: 600px) and (max-width: 719px)': {
        px: 2,
        py: 5,
      },
      '@media (min-width: 280px) and (max-width: 599px)': {
        px: 2,
        py: 5,
      },
    },
    titleAndSubTitleBoxStyle: {
      width: '100%',
      textAlign: 'center',
      mb: { xs: 4, lg: 4 },
      '@media (min-width: 600px) and (max-width: 719px)': {
        mb: 2,
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        mb: 1,
      },
    },
    titleStyle: {
      color: '#001C63',
      fontSize: { sm: '28px !important', md: '32px !important' },
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: { sm: '35px', md: '40.106px' },
      '@media (min-width: 600px) and (max-width: 767px)': {
        fontSize: '23px !important',
        lineHeight: '35px',
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        fontSize: '23px !important',
        lineHeight: '22px',
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        fontSize: '20px !important',
        lineHeight: '27px',
      },
    },
    subTitleStyle: {
      color: '#001C63',
      fontSize: { sm: '15px !important', md: '18px !important' },
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '39.602px',
      '@media (min-width: 600px) and (max-width: 719px)': {
        fontSize: '15px !important',
        lineHeight: '35px',
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        fontSize: '12px !important',
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        fontSize: '12px !important',
        lineHeight: '25px',
      },
    },
    processBoxStyle: (process) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      py: { sm: 0 },
      px: { sm: 0 },
      '@media (min-width: 720px) and (max-width: 767px)': {
        px: 1,
      },
      '@media (min-width: 600px) and (max-width: 719px)': {
        py: 2,
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        py: 1.5,
        gap: 2,
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        flexDirection: 'column',
        alignItems: process?.alignment == 'right' ? 'end' : 'start',
        pb: 2,
      },

      justifyContent: `${process?.alignment == 'right' ? 'end' : 'start'}`,
      gap: 3,
    }),
    imageBoxStyle: (process) => ({
      display: 'flex',
      justifyContent: 'start',
      order: `${process?.alignment == 'right' ? 2 : 1}`,
      '@media (min-width: 280px) and (max-width: 359px)': {
        order: 1,
      },
    }),
    imageStyle: {
      width: { sm: 200, lg: 250 },
      height: { sm: 198, lg: 248 },
      '@media (min-width: 720px) and (max-width: 767px)': {
        width: 150,
        height: 148,
      },
      '@media (min-width: 600px) and (max-width: 719px)': {
        width: 110,
        height: 100,
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        width: '76px',
        height: '68px',
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        width: '100px',
        height: '100px',
      },
    },
    titleAndTextBoxStyle: (process) => ({
      gap: 1.5,
      width: { sm: '495px', md: '520px', lg: '560px' },
      '@media (min-width: 720px) and (max-width: 767px)': {
        width: '400px',
      },
      '@media (min-width: 600px) and (max-width: 719px)': {
        width: '400px',
        gap: 0.5,
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        pl: process?.alignment == 'right' ? 1 : 0,
        width: '280px',
        gap: 0.5,
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        textAlign: 'left',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      order: `${process?.alignment == 'right' ? 1 : 1}`,

      pl: {
        sm: process?.alignment == 'right' ? 5 : 0,
        lg: process?.alignment == 'right' ? 2.3 : 0,
      },
      textAlign: `${process?.alignment == 'right' ? 'right' : 'left'}`,
    }),
    spacificTitleStyle: {
      color: '#001C63',
      fontStyle: 'normal',
      fontWeight: 500,
      '@media (min-width: 600px) and (max-width: 767px)': {
        fontSize: '16px !important',
        lineHeight: '25px',
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        fontSize: '12px !important',
        lineHeight: '20px',
      },
      lineHeight: { sm: '28.621px' },
      fontSize: { md: '25px !important', lg: '28px !important' },
    },
    textBoxStyle: (process) => ({
      color: '#001C63',
      fontSize: { sm: '17px !important' },
      fontStyle: 'normal',
      fontWeight: 400,
      direction: process?.alignment == 'right' ? 'rtl' : 'ltr',
      lineHeight: { sm: '27.363px' },
      display: 'inline',
      '@media (min-width: 500px) and (max-width: 767px)': {
        fontSize: '13px !important',
        lineHeight: '20px',
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        fontSize: '11px !important',
        lineHeight: '15px',
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        fontSize: '12px !important',
        lineHeight: '15px',
      },
    }),
    textStyle: {
      direction: 'ltr',
      display: 'inline',
      unicodeBidi: 'isolate-override',
    },
  },
};

export const PERKS_DATA = [
  {
    sno: '01',
    title: 'Hire Salary Based Employees',
    icon: '/images/homepage/our-perks/icon1.svg',
    activeIcon: '/images/homepage/our-perks/icon1a.svg',
    hoverIcons: '/images/homepage/our-perks/hover-icon.svg',
    listIcon: '/images/homepage/our-perks/list-icon.svg',
    content: {
      heading: 'Hire Full-Time Salaried Employees',
      paragraph: `This model of outstaffing advances your workforce with stable, fixed pay, regardless of weekly hours. Our commitment includes transparent communication and respecting your team's time and dedication.`,
      list: [
        { item: 'Collaborative Work Environment,' },
        { item: 'Stability in Payroll,' },
        { item: 'High-Value Contract Partnership,' },
        { item: 'Work-Life Balance Focus,' },
      ],

      buttonText: 'Book A Demo',
      buttonLink: '/book-a-demo',
    },
  },
  {
    sno: '02',
    title: 'Hire Hourly Based Employees',
    icon: '/images/homepage/our-perks/icon2.svg',
    activeIcon: '/images/homepage/our-perks/icon2a.svg',
    hoverIcons: '/images/homepage/our-perks/hover-icon.svg',
    content: {
      heading: 'Hire Hourly Employees',
      paragraph: `These employees are compensated for actual hours worked, ensuring fair pay for dedicated work. Avail the benefits of a dedicated hourly workforce, usually receiving time-and-a-half for hours exceeding 45 per week.`,
      list: [
        { item: 'Efficient Task Allocation.' },
        { item: 'Flexibility in Scheduling,' },
        { item: 'Dynamic Response to Workload.' },
        { item: 'Adherence to Labor Laws.' },
      ],
      listIcon: '/images/homepage/our-perks/list-icon.svg',
      buttonText: 'Book A Demo',
      buttonLink: '/book-a-demo',
    },
  },
  {
    sno: '03',
    title: 'Hire Our Dedicated Team ',
    icon: '/images/homepage/our-perks/icon3.svg',
    activeIcon: '/images/homepage/our-perks/icon3a.svg',
    hoverIcons: '/images/homepage/our-perks/hover-icon.svg',
    content: {
      heading: 'Hire Our Dedicated Team',
      paragraph: `Elevate your tasks with eSpark Talent's project-based employees. This dynamic approach to project outstaffing ensures adaptability and collaboration, leading to consistently enhanced outcomes.`,
      list: [
        { item: 'Cost Efficiency.' },
        { item: 'Faster Project Turnaround.' },
        { item: 'Specialized Expertise,' },
        { item: 'Strategic Project Planning.' },
      ],
      listIcon: '/images/homepage/our-perks/list-icon.svg',
      buttonText: 'Book A Demo',
      buttonLink: '/book-a-demo',
    },
  },
];
export const DEVELOEPRS_PERKS_DATA = {
  perksData: [
    {
      sno: '01',
      title: 'Hire Salary Based Developers',
      icon: '/images/homepage/our-perks/icon1.png',
      activeIcon: '/images/homepage/our-perks/icon1a.png',
      hoverIcons: '/images/homepage/our-perks/hover-icon.png',
      listIcon: '/images/homepage/our-perks/list-icon.png',
      content: {
        heading: 'Hire Full-Time Salaried Developers',
        paragraph: `This model of outstaffing advances your workforce with stable, fixed pay, regardless of weekly hours. Our commitment includes transparent communication and respecting your team's time and dedication.`,
        list: [
          { item: 'Collaborative Work Environment,' },
          { item: 'Stability in Payroll,' },
          { item: 'High-Value Contract Partnership,' },
          { item: 'Work-Life Balance Focus,' },
        ],

        buttonText: 'Hire a Developer',
        buttonLink: '/hire-a-frontend-developer/#form',
      },
    },
    {
      sno: '02',
      title: 'Hire Hourly Based Developers',
      icon: '/images/homepage/our-perks/icon2.png',
      activeIcon: '/images/homepage/our-perks/icon2a.png',
      hoverIcons: '/images/homepage/our-perks/hover-icon.png',
      content: {
        heading: 'Hire Hourly Developers',
        paragraph: `These employees are compensated for actual hours worked, ensuring fair pay for dedicated work. Avail the benefits of a dedicated hourly workforce, usually receiving time-and-a-half for hours exceeding 45 per week.`,
        list: [
          { item: 'Efficient Task Allocation.' },
          { item: 'Flexibility in Scheduling,' },
          { item: 'Dynamic Response to Workload.' },
          { item: 'Adherence to Labor Laws.' },
        ],
        listIcon: '/images/homepage/our-perks/list-icon.png',
        buttonText: 'Hire a Developer',
        buttonLink: '/hire-a-frontend-developer/#form',
      },
    },
    {
      sno: '03',
      title: 'Hire a Dedicated Team',
      icon: '/images/homepage/our-perks/icon3.png',
      activeIcon: '/images/homepage/our-perks/icon3a.png',
      hoverIcons: '/images/homepage/our-perks/hover-icon.png',
      content: {
        heading: 'Hire a Dedicated Team',
        paragraph: `Elevate your tasks with eSpark Talent's project-based employees. This dynamic approach to project outstaffing ensures adaptability and collaboration, leading to consistently enhanced outcomes.`,
        list: [
          { item: 'Cost Efficiency.' },
          { item: 'Faster Project Turnaround.' },
          { item: 'Specialized Expertise,' },
          { item: 'Strategic Project Planning.' },
        ],
        listIcon: '/images/homepage/our-perks/list-icon.png',
        buttonText: 'Hire a Developer',
        buttonLink: '/hire-a-frontend-developer/#form',
      },
    },
  ],
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    perksTitleStyle: {
      width: '100%',
      maxWidth: { xs: '400px', sm: '500px', md: '650px', lg: '800px' },
      mx: 'auto',
      px: 3,
      textAlign: 'center',
      mb: 2.5,
      fontSize: { xs: '20px', sm: '32px', md: '38px', lg: '48px' },
      fontWeight: 600,
      lineHeight: { xs: '32px', sm: '45px', md: '55px', lg: '65px' },
      color: '#001C63',
      textTransform: 'capitalize',
    },
    perksBoxStyle: {
      p: { xs: 2, sm: 5 },
      gap: 5,
      width: '95%',
      mx: 'auto',
      maxWidth: '1260px',
      maxHeight: 'auto',
      minHeight: '553px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '20px',
      background: 'linear-gradient(97deg, #029894 0.53%, #036764 102.09%)',
      '@media(min-width:1024px)': {
        flexDirection: 'row',
      },
    },
    perksButtonsBoxStyle: {
      width: { xs: '100%', md: '100%', lg: '500px' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 3.5,
      '@media(min-width:1024px)': {
        width: { md: '400px', lg: '500px' },
      },
    },
    perksButtonTextAndImageBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
    perksImageStyle: {
      width: { xs: '24px', sm: '32px', lg: 'auto' },
      height: { xs: '24px', sm: '32px', lg: 'auto' },
    },
    perksSerialNumberAndIconBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
    perksSerialNumberTextStyle: {
      fontSize: {
        xs: '42px',
        sm: '45px',
        md: '50px',
        lg: '67.34px',
      },
      fontWeight: 700,
      color: '#E0DDDDAD',
    },
    perksIconStyle: {
      width: { xs: '18px', sm: '20px', lg: '24px' },
      height: { xs: '18px', sm: '20px', lg: '24px' },
    },
    perksContentMainBoxStyle: {
      width: '100%',
      display: 'flex',
      '@media(min-width:1024px)': {
        width: 'calc(100% - 500px)',
      },
    },
    perksContentBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 1.5,
      '@media(min-width:1024px)': {
        textAlign: 'left',
      },
    },
    perksContentHeadingStyle: {
      fontSize: { xs: '20px', sm: '30px', md: '35px', lg: '37px' },
      fontWeight: 700,
      lineHeight: { xs: '30px', sm: '40px', md: '50px' },
      color: '#FFFFFF',
    },
    perksContentParagraphStyle: {
      fontSize: { xs: '12px', sm: '16px', md: '18px', lg: '20.84px' },
      fontWeight: 400,
      lineHeight: { xs: '20.85px', sm: '30px', md: '33.16px' },
      color: '#FFFFFF',
    },
    perksContentUlStyle: {
      display: 'grid',
      pl: 0,
      pt: 2,
      listStyle: 'none',
      gap: 2,
      gridTemplateColumns: 'repeat(1, 1fr)',
      '@media(min-width: 1024px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
    perksContentLiBoxStyle: {
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'center',
      gap: 1.2,
      '@media(min-width: 1024px)': { justifyContent: 'flex-start' },
    },
    perksContentLiImageStyle: {
      width: '14px',
      height: '14px',
      mt: { xs: '4px', sm: '6px' },
    },
    perksContentLiStyle: {
      fontSize: {
        xs: '10px',
        sm: '13px',
        md: '15px',
        lg: '19px',
      },
      textAlign: 'left',
      fontWeight: 400,
      lineHeight: { xs: '22px', sm: '27.35px' },
      color: '#FFFFFF',
    },
    perksButtonStyle: {
      mt: 1,
      mx: 'auto',
      color: '#fff',
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '15px',
        lg: '17.42px',
      },
      width: { xs: '150px', sm: '180px', lg: '200.6px' },
      height: {
        xs: '30px',
        sm: '38px',
        md: '43px',
        lg: '53.89px',
      },
      backgroundColor: '#001C63',
      borderRadius: '6.42px',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#001C63',
      },
      '@media(min-width: 1024px)': {
        mx: 0,
      },
    },
  },
};

export const EXPERTIES_DATA = {
  title: 'Which Experts Will Drive Your Business?',
  buttonText: 'Hire A Talent',
  buttonLink: '/book-a-demo',
  icon: '/images/homepage/experties/experties-icon.svg',
  otherIcon: '/images/homepage/experties/center.svg',
  endIcon: '/images/homepage/experties/end.svg',
  startIcon: '/images/homepage/experties/start.svg',
  sections: [
    {
      id: 1,
      lists: [
        {
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
    },
    {
      id: 2,
      lists: [
        {
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
      ],
    },
    {
      id: 3,
      lists: [
        {
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
      ],
    },
    {
      id: 4,
      lists: [
        {
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
      ],
    },
  ],
  styles: {
    mainBoxStyle: {
      py: 1,
      '@media (min-width: 600px)': { background: '#F7F8FB', py: 6 },
    },
    swiperBoxStyle: {
      borderRadius: '6px',
      background: '#F7F8FB',
      '@media (max-width: 600px)': {
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.40)',
      },
      py: 2,
      mx: 1,
    },
    renderSectionGridStyle: { mx: 'auto' },
    buttonBoxStyle: {
      width: '100%',
      textAlign: 'center',
      mt: { xs: 2, sm: 3.5 },
    },
    gridItemStlye: {
      pt: 2.3,
      mx: 'auto',
      width: { xs: '70%', sm: '80%', md: '80%', lg: '100%' },
    },
    listHeadingBoxStyle: {
      width: { sm: '100%', md: '100%', lg: '100%' },
      mx: 'auto',
    },
    listHeadingStyle: {
      py: '4px',
      fontSize: {
        xs: '15px',
        sm: '15px',
        md: '18px',
        lg: '22px',
      },
      fontWeight: 700,
    },
    listItemBoxStyle: { pb: 2 },
    imageAndLinkBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      height: '48px',
      gap: '8px',
      my: 0.2,
    },
    titleStyle: { py: '0px', color: '#000', fontSize: '14px', fontWeight: 400 },
  },
};

export const CLIENTS_SLIDER_DATA = {
  clients: [
    {
      image: '/images/homepage/clients-slider/client1.svg',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 185,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client2.svg',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 185,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client3_dark.svg',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 185,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client4_dark.svg',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 185,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client5.svg',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 185,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client6.svg',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 185,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client7.svg',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 185,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client8.svg',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 185,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client9.svg',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 185,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client10.svg',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 185,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client11_dark.png',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 220,
      imageHeight: 40,
    },
    {
      image: '/images/homepage/clients-slider/client12.png',
      imageAlt: 'Description for image 1',
      link: '/',
      imageWidth: 220,
      imageHeight: 40,
    },
  ],
};

export const CLIENTS_SLIDER_STYLES = {
  mainBoxStyle: (bgColor) => ({
    backgroundColor: bgColor,
    PY: '2.5%',
    width: '100%',
    boxShadow: '0 -6px 19.8px  rgba(0,0,0,0.25) ',
  }),
  containerStyle: (pb = '10px') => ({
    pb: pb || '10px',
    display: 'flex',
    justifyContent: 'center',
  }),
  shortTitleStyle: (fontWeight, fontSize, lineHeight) => ({
    fontWeight: fontWeight,
    py: { xs: '16px', sm: '18px', md: '30px' },
    pt: { xs: '17px', sm: '20px', md: '50px' },
    fontSize: fontSize,
    lineHeight: lineHeight,
    textAlign: 'center',
    display: 'none',
    '@media (max-width:769px)': {
      display: 'flex',
    },
  }),
  completeTitleStyle: (fontWeight, fontSize, lineHeight) => ({
    textAlign: 'center',
    fontWeight: fontWeight,
    py: { xs: '16px', sm: '18px', md: '30px' },
    pt: { xs: '17px', sm: '20px', md: '50px' },
    fontSize: fontSize,
    lineHeight: lineHeight,
    display: 'none',
    '@media (min-width:770px)': {
      display: 'flex',
    },
  }),
  swiperSlideStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBoxStyle: (pb = 5) => ({ pb: pb || 5 }),
  imageStyle: {
    width: {
      sm: '130px',
      md: '154px',
      lg: '175px',
    },
    height: {
      sm: '35px',
      md: '35px',
      lg: '37px',
    },
    '@media (min-width: 550px) and (max-width: 767px)': {
      width: '160px',
      height: '25px',
    },
    '@media (min-width: 375px) and (max-width: 549px)': {
      width: '110px',
      height: '25px',
    },
    '@media (min-width: 280px) and (max-width: 374px)': {
      width: '110px',
      height: '25px',
    },
  },
};

export const BOOK_CLIENT_SLIDER_STYLES = {
  mainBoxStyle: (bgColor) => ({
    backgroundColor: bgColor,
    PY: '2.5%',
    width: '100%',
  }),
  containerStyle: (pb = '10px') => ({ pb }),
  bothTitleStyle: (fontWeight, fontSize, lineHeight) => ({
    textAlign: 'center',
    fontWeight,
    py: { xs: '16px', sm: '18px', md: '30px' },
    pt: { xs: '17px', sm: '20px', md: '50px' },
    fontSize,
    lineHeight,
  }),
  swiperSlideStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBoxStyle: (pb = 5) => ({ pb: pb || 5 }),
  imageStyle: {
    width: {
      sm: '144px',
      md: '154px',
      lg: '150px',
    },
    height: 'auto',
    '@media (min-width: 550px) and (max-width: 767px)': {
      width: '160px',
      height: '25px',
    },
    '@media (min-width: 375px) and (max-width: 549px)': {
      width: '90px',
      height: '25px',
    },
    '@media (min-width: 280px) and (max-width: 374px)': {
      width: '88px',
      height: '25px',
    },
  },
};

export const BENEFITS_WORKS_DATA = {
  title: 'Here Is How Our Offshore Outsourcing Works.',
  paragraph: `We adhere to professional hiring practices and take care of all legal entities and documentation throughout every outsourcing collaboration.`,
  items: [
    {
      icon: '/images/homepage/outsource-benefits/icon1.svg',
      title: `Step 1`,
      paragraph: `We discover and onboard candidates by eliminating the need to establish a local entity.`,
    },
    {
      icon: '/images/homepage/outsource-benefits/icon2.svg',
      title: `Step 2`,
      paragraph: `Assign the handling of employment contracts and onboarding processes for your candidates.`,
    },
    {
      icon: '/images/homepage/outsource-benefits/icon3.svg',
      title: `Step 3`,
      paragraph: `Manage the complexities of outsourced employees, including payroll and benefits to tax compliance.`,
    },
    {
      icon: '/images/homepage/outsource-benefits/icon4.svg',
      title: `Step 4`,
      paragraph: `Align with local laws to protect against legal risks and challenges proactively.`,
    },
  ],
  vectorImages: [
    '/images/homepage/outsource-benefits/line1.svg',
    '/images/homepage/outsource-benefits/line2.svg',
    '/images/homepage/outsource-benefits/line4.svg',
    '/images/homepage/outsource-benefits/line3.svg',
  ],
  styles: {
    mainBoxStyle: { py: { xs: 4, sm: 5, md: 6 }, overflow: 'hidden' },
    titleBoxStyle: {
      mx: 'auto',
      pb: '50px',
      width: { sm: '750px', md: '750px', lg: '900px' },
      '@media (min-width: 600px) and (max-width:767px)': {
        width: '500px',
        pb: '30px',
      },
      '@media (min-width: 425px) and (max-width:599px)': {
        width: '400px',
        pb: '30px',
      },
      '@media (min-width: 300px) and (max-width:424px)': {
        pb: '30px',
      },
    },
    titleStyle: {
      color: '#001C63',
      fontSize: { sm: '24px !important', md: '24px !important' },
      fontWeight: 600,
      lineHeight: { sm: 'auto', lg: '42.289px' },
      '@media (min-width: 425px) and (max-width:767px)': {
        fontSize: '26px !important',
      },
      '@media (min-width: 300px) and (max-width:424px)': {
        fontSize: '20px !important',
      },
      '@media (min-width:768px) and (max-width: 790px)': {
        pr: '40px',
      },
      textAlign: 'center',
      flexWrap: 'wrap',
      pb: { xs: '15px' },
    },
    paragraphStyle: {
      color: '#001C63',
      textAlign: 'center',
      fontSize: {
        xs: '16px !important',
        md: '18px !important',
      },
      '@media (min-width: 300px) and (max-width:424px)': {
        px: '25px',
      },
      '@media (min-width: 426px) and (max-width:440px)': {
        pr: '45px',
      },
      '@media (min-width:768px) and (max-width: 790px)': {
        pr: '70px',
      },
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: { sm: '27.863px' },
      flexWrap: 'wrap',
      px: { xs: '35px', lg: '10px' },
      pb: { md: '10px', xs: '0px' },
    },
    gridContainerStyle: {
      position: 'relative',
      justifyContent: 'center',
      gap: { md: '13%', lg: '5.3%', sm: '1%' },
      '@media (min-width:278px) and (max-width: 300px)': {
        ml: '-35px !important',
      },
      '@media (min-width:301px) and (max-width: 340px)': {
        ml: '-34px !important',
      },
      '@media (min-width:341px) and (max-width: 425px)': {
        ml: '-34px !important',
      },
      '@media (min-width:426px) and (max-width: 600px)': {
        ml: '-45px !important',
      },
      '@media (min-width:601px) and (max-width: 768px)': {
        ml: '-46px !important',
      },
    },
    imageStyles: [
      {
        width: { xs: '180.076px', md: '200.076px' },
        height: { xs: '35.708px', md: '40.708px' },
        position: 'absolute',
        transform: {
          xs: 'rotate(152.607deg)',
          sm: 'rotate(149.607deg)',
          md: 'none',
        },
        zIndex: 0,
        top: { sm: 230, md: 90 },
        '@media (min-width:600px) and (max-width: 767px)': {
          top: 210,
        },
        '@media (min-width:425px) and (max-width: 599px)': {
          top: 190,
        },
        '@media (min-width:300px) and (max-width: 425px)': {
          top: 157,
        },
        '@media (min-width:291px) and (max-width: 299px)': {
          top: 170,
        },
        '@media (min-width:278px) and (max-width: 290px)': {
          top: 177,
        },
      },
      {
        width: { xs: '210.021px', md: '230.021px' },
        height: { xs: '70.83px', md: '85.83px' },
        position: 'absolute',
        zIndex: 0,
        display: { xs: 'none', sm: 'none', md: 'block' },
        top: { md: 160 },
      },
      {
        width: '210.021px',
        height: '68.83px',
        position: 'absolute',
        zIndex: 0,
        display: { xs: 'block', sm: 'block', md: 'none' },
        top: { sm: 455, md: 160 },
        '@media (max-width: 768px)': {
          top: 420,
        },
        '@media (min-width:600px) and (max-width: 767px)': {
          top: 380,
        },
        '@media (min-width:425px) and (max-width: 599px)': {
          top: 330,
        },
        '@media (min-width:300px) and (max-width: 424px)': {
          top: 280,
        },
        '@media (min-width:291px) and (max-width: 299px)': {
          top: 317,
        },
        '@media (min-width:278px) and (max-width: 290px)': {
          top: 335,
        },
      },
      {
        width: { xs: '192.958px', md: '210.958px' },
        height: { xs: '50.005px', md: '80.005px' },
        position: 'absolute',
        display: { xs: 'block', md: 'block' },
        transform: {
          xs: 'rotate(152.607deg)',
          sm: 'rotate(142.607deg)',
          md: 'none',
        },
        zIndex: 0,
        top: { sm: 708, md: 260 },
        '@media (max-width: 768px)': {
          top: 655,
        },
        '@media (min-width:600px) and (max-width: 767px)': {
          top: 600,
        },
        '@media (min-width:425px) and (max-width: 599px)': {
          top: 530,
        },
        '@media (max-width: 425px)': {
          top: 510,
        },
        '@media (min-width:300px) and (max-width: 424px)': {
          top: 442,
        },
        '@media (min-width:291px) and (max-width: 299px)': {
          top: 532,
        },
        '@media (min-width:278px) and (max-width: 290px)': {
          top: 555,
        },
      },
    ],
    gridItemStyle: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center',
      p: ['10px', '6px'],
      position: 'relative',
      zIndex: 1,
    },
    itemBoxStyle: {
      display: 'flex',
      borderRadius: {
        xs: '20px',
        sm: '25px',
        md: '40px',
        lg: '50px',
      },
      p: '20px',
      alignItems: 'center',
      background: ' #FFF',
      boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      height: {
        sm: '162.637px',
        lg: '162.569px',
      },
      width: {
        sm: '589.938px !important',
        lg: '580.938px !important',
      },
      '@media (min-width: 600px) and (max-width: 767px)': {
        width: '450.938px',
        height: '142.637px',
      },
      '@media (min-width: 425px) and (max-width: 599px)': {
        width: '400.938px',
        height: '122.637px',
      },
      '@media (min-width: 300px) and (max-width: 424px)': {
        width: '303.292px',
        height: '100.637px',
      },
    },
    iconStyle: {
      width: 59,
      height: 59,
      '@media (min-width: 600px) and (max-width: 767px)': {
        width: 40,
        height: 40,
      },
      '@media (min-width: 425px) and (max-width: 767px)': {
        width: 45,
        height: 45,
      },
      '@media (min-width: 300px) and (max-width: 424px)': {
        width: 36,
        height: 36,
      },
    },
    itemParagraphStyle: {
      color: '#000',
      fontWeight: 400,
      fontStyle: 'normal',

      lineHeight: { xs: '18.571px', md: '23px', lg: '30px' },
      ml: 1,
      fontSize: { lg: '20px', xs: '12px' },
    },
  },
};

export const ACHIEVEMENTS_DATA = {
  title: 'Achievement & Awards',
  items: [
    {
      image: '/images/homepage/achievement-awards/achievement-1.png',
      imageAlt: 'Description for image 1',
      imageWidth: 300,
      imageHeight: 200,
      link: '/',
    },
    {
      image: '/images/homepage/achievement-awards/achievement-2.png',
      imageAlt: 'Description for image 2',
      imageWidth: 300,
      imageHeight: 200,
      link: '/',
    },
    {
      image: '/images/homepage/achievement-awards/achievement-3.png',
      imageAlt: 'Description for image 1',
      imageWidth: 300,
      imageHeight: 200,
      link: '/',
    },
    {
      image: '/images/homepage/achievement-awards/achievement-4.png',
      imageAlt: 'Description for image 2',
      imageWidth: 300,
      imageHeight: 200,
      link: '/',
    },
  ],
};

export const ACHIEVEMENTS_STYLES = {
  mainBoxStyle: (isSpecialPath, isMeetingPath, isDemo) => ({
    background: {
      xs: isSpecialPath || isMeetingPath || isDemo ? 0 : '20px',
      md: isMeetingPath || isSpecialPath || isDemo ? null : '40px',
    },
  }),
  titleAndImagesBoxStyle: {
    py: '2.5%',
    px: '1%',
    border: '1px solid rgba(170, 169, 169, 0.41)',
  },
  titleBoxStyle: { px: { xs: '20%', md: '0' }, pt: '20px' },
  commonBoxStyles: {
    display: 'flex',
    flexWrap: { xs: 'wrap', md: 'noWrap' },
    justifyContent: 'center',
    alignItems: 'center',
    gap: { xs: 4, sm: 3, md: 5 },
    px: { xs: 2 },
  },
  renderImageBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBoxStyle: {
    width: { xs: '100px', sm: '120px', lg: '150px' },
    height: 'auto',
  },
  titleAndRenderImageBoxStyle: {
    background: '#F7F8FB',
    py: '1.5%',
    pb: { xs: '40px', sm: '70px', lg: '50px' },
    '@media (max-width:424px)': { pb: '30px' },
    '@media (min-width:425px) and (max-width:480px)': { pb: '55px' },
  },
};

export const OUR_CLIENT_SAYS = {
  heading: 'What Our Client Says',
  subHeading: `Clients express gratitude for the outstanding service, highlighting the team's unwavering dedication and expertise.`,
  slider: [
    {
      image: '/images/homepage/our-clients/dfrbot.svg',
      title: 'Ricky Ye',
      subTitle: 'CEO',
      description: `We engaged eSpark Talent for PCB and embedded development, aiming to enhance system functionality. Navigating this complex field demanded precision, and eSpark Talent demonstrated unmatched professionalism. Their expert team not only understood technical details but also swiftly addressed urgent needs.`,
      rating: 4,
    },
    {
      image: '/images/homepage/our-clients/konoozi.svg',
      title: 'Imran Khan',
      subTitle: 'CEO',
      description: `eSpark Talent's skill in .NET development and UI/UX design completely transformed our projects. Their quick response and dedicated team ensured tasks were completed smoothly. Surpassing expectations with efficiency and expertise, they've become our top choice. Enthusiastically recommending eSpark Talent for setting a new standard in reliability and excellence.`,
      rating: 4,
    },
    {
      image: '/images/homepage/our-clients/equip.svg',
      title: 'Clarie Dennis',
      subTitle: 'CEO',
      description: `Choosing eSpark Talent for outsourcing was transformative. Their WordPress developer and performance marketer showcased exceptional speed and agility. Partnering with eSpark Talent was the right decision; the outstanding service ensures my return for future projects. Highly recommended for those who want to avail top-notch outsourcing services!`,
      rating: 4,
    },
    {
      image: '/images/homepage/our-clients/project.svg',
      title: 'Jawad Ali',
      subTitle: 'CEO',
      description: `eSpark Talent is the dream team for digital excellence! From a WordPress Developer shaping my online presence to a Performance Marketer driving results, a Social Media Expert creating buzz, and a UI/UX Designer adding aesthetic magic – they nailed every role. Fully satisfied with their service, I'm excited for more collaborations. They're not just outsourcing; they're elevating my brand to new heights.`,
      rating: 4,
    },
    {
      image: '/images/homepage/our-clients/robot.svg',
      title: 'Cole Benson',
      subTitle: 'Director',
      description: `Cheers to the tech experts at eSpark Talent! They've skillfully blended the latest tech into our online venture, making innovation smooth sailing. Affordable support aligns perfectly with our business goals, making groundbreaking ideas flow effortlessly. Thanks to eSpark Talent, success in Embedded System Engineering and Firmware Development is just within reach!`,
      rating: 4,
    },
  ],
  styles: {
    headingStyle: {
      px: { xs: '5%', md: '7%' },
      fontSize: { xs: '22px', sm: '24px', md: '35px', lg: '43px' },
      mb: 1,
      fontWeight: 600,
      textAlign: 'center',
    },
    subHeadingStyle: {
      fontSize: { xs: '11px', sm: '13px', md: '16px', lg: '18px' },
      fontWeight: 500,
      textAlign: 'center',
      px: { xs: '5%', md: '7%' },
    },
    clientSaySliderBoxStyle: {
      width: '100%',
      maxWidth: 1210,
      margin: 'auto',
      position: 'relative',
      pt: 5,
    },
    clientSaySliderStyles: {
      swiperSlideStyle: {
        paddingTop: '0px',
        paddingBottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
      },
      cardStyle: {
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: { xs: '220px', sm: '220px', md: '240px', lg: '225px' },
        maxHeight: '100%',
        backgroundColor: '#FFFFFF',
        p: 3,
      },
      logoAndRatingBoxStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      ratingBoxStyle: { display: { xs: 'none', md: 'inline-flex' }, gap: 0.7 },
      cardTitle: { fontSize: '24px', fontWeight: 600, color: '#525252' },
      subTitleAndRatingBoxStyle: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        pb: 1,
      },
      cardSubTitleStyle: {
        fontSize: '18px',
        fontWeight: 400,
        color: '#525252',
      },
      subTitleRatingBoxStyle: {
        display: { xs: 'inline-flex', md: 'none' },
        gap: 0.7,
      },
      descriptionStyle: {
        fontSize: { xs: '10px', md: '11px' },
        fontWeight: 400,
        color: '#525252',
      },
      paginationBoxStyle: {
        width: '100%',
        maxWidth: '495px',
        position: 'absolute',
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'space-around',
        alignItems: 'center',
        top: 'auto',
        bottom: { xs: 75, sm: 80, md: 100 },
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
      },
      paginationStyle: {
        width: { xs: '10px', md: 'auto' },
        height: 'auto',
        cursor: 'pointer',
      },
    },
  },
};

export const DEMO_DATA = {
  title:
    'Big Dream Needs Premium Outsourcing Support To Conquer The Global Market.',
  linkText: 'Book a Demo',
  linkUrl: '/book-a-demo',
  styles: {
    containerStyle: { pb: { xs: '20px', sm: '20px', md: '30px', lg: '40px' } },
    mainBoxStyle: {
      py: { xs: '22px', sm: '30px', md: '50px', lg: '60px' },
      px: { xs: '5%', sm: '10%', md: '10%', lg: '12%' },
      backgroundColor: '#3f5294',
      color: '#fff',
      borderRadius: '20px',
      justifyContent: 'center',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
    },
    titleStyle: {
      fontSize: { xs: '20px', sm: '25px', md: '28px', lg: '35px' },
      fontWeight: 700,
      lineHeight: { xs: '44px', sm: '64px' },
      textAlign: 'center',
      pb: '20px',
    },
    buttonStyle: {
      width: { sm: '170px', md: '207.981px' },
      height: { sm: '50px', md: '54.149px' },
      backgroundColor: 'white',
      '@media (min-width: 300px) and (max-width: 767px)': {
        width: '130px',
        height: '40px',
        fontSize: '20px',
      },
      borderRadius: '6.448px',
      fontSize: '17px',
      fontWeight: 700,
      '&:hover': {
        backgroundColor: '#fff',
      },
    },
    linkTextStyle: {
      color: '#09114A',
      fontSize: { xs: '12px', sm: '15px', md: '17px', lg: '19px' },
      fontWeight: 700,
    },
  },
};

export const HIRE_A_TALENT_MENU = {
  sections: [
    {
      id: 1,
      lists: [
        {
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
    },
    {
      id: 2,
      lists: [
        {
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
      ],
    },
    {
      id: 3,
      lists: [
        {
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
      ],
    },
    {
      id: 4,
      lists: [
        {
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
      ],
    },
  ],
};

export const hideCtaPaths = [
  '/book-a-demo',
  '/careers',
  '/book-a-demo-meeting',
  '/service/mean-stack-developer',
  '/partnership-program',
  '/hire-a-backend-developer',
  '/hire-a-frontend-developer',
  '/hire-android-developers',
  '/hire-angular-developers',
  '/hire-asp-dot-net-developers',
  '/hire-devops-engineers',
  '/hire-embedded-system-engineers',
  '/hire-fintech-developers',
  '/hire-firmware-developers',
  '/hire-flutter-developers',
  '/hire-full-stack-developers',
  '/hire-javascript-developers',
  '/hire-mean-stack-developers',
  '/hire-mern-stack-developers',
  '/hire-nextjs-developers',
  '/hire-nodejs-developers',
  '/hire-pcb-designers',
  '/hire-performance-marketers',
  '/hire-php-developers',
  '/hire-ppc-specialists',
  '/hire-python-developers',
  '/hire-qa-engineers',
  '/hire-react-native-developers',
  '/hire-reactjs-developers',
  '/hire-seo-experts',
  '/hire-shopify-developers',
  '/hire-social-media-experts',
  '/hire-ui-ux-designers',
  '/hire-wordpress-developers',
];

export const buttonsStyleForPerksComponent = (index, ind) => {
  return {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '118px',
    justifyContent: 'space-between',
    gap: 1.5,
    background:
      index == ind
        ? 'linear-gradient(93deg, #029894 0.62%, #001C63 101.53%), #FFF'
        : '#fff',
    boxShadow:
      index == ind ? '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)' : 'none',
    borderRadius: '20.59px',
    transitionProperty: 'background',
    transitionDelay: '1m',
    transitionDuration: '1s',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow:
        index == ind ? '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)' : 'none',
    },
    '@media(min-width:1024px)': {
      justifyContent: 'space-between',
    },
  };
};

export const buttonTextStyleForPerksComponent = (index, ind) => {
  return {
    width: '100%',
    maxWidth: { xs: '135px', sm: '180px', md: '350px' },
    fontSize: {
      xs: '15px',
      sm: '18px',
      md: '20px',
      lg: '24px',
    },
    fontWeight: 500,
    lineHeight: {
      xs: '21.27px',
      sm: '25px',
      md: '29px',
      lg: '33.73px',
    },
    color: index == ind ? '#fff' : '#001C63',
    textAlign: 'left',
    pr: 0,
    textWrap: 'wrap',
    '@media(min-width: 1024px)': {
      textAlign: 'left',
      maxWidth: '240px',
    },
    '@media(min-width: 280px) and (max-Width:359px)': {
      maxWidth: '80px',
      py: 0.5,
      fontSize: '12px',
    },
  };
};

export const mainContainerStyleForClientSlider = (
  pathName,
  book_a_demo_metting
) => {
  return {
    pt: pathName?.includes(book_a_demo_metting)
      ? { xs: '38px', sm: '45px', md: '55px', lg: '60px' }
      : 0,
    pb: { xs: 0, lg: !pathName?.includes(book_a_demo_metting) ? 2 : 0 },
    backgroundColor: pathName?.includes(book_a_demo_metting)
      ? '#F7F8FF'
      : '#fff',
  };
};

export const TOP_BAR_DATA = {
  mailText: 'info@esparktalent.com',
  mailIcon: '/images/header/topbar/mail.svg',
  socialIcons: [
    {
      img: '/images/header/topbar/fb.svg',
      path: 'https://www.facebook.com/esparktalent/',
    },
    {
      img: '/images/header/topbar/twitter.svg',
      path: 'https://www.twitter.com/eSparkTalent',
    },
    {
      img: '/images/header/topbar/in.svg',
      path: 'https://www.linkedin.com/company/espark-talent/',
    },
    {
      img: '/images/header/topbar/ins.svg',
      path: 'https://www.instagram.com/esparktalent/',
    },
  ],
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: '32px',
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      background:
        'linear-gradient(180deg, rgba(0,28,99,1) 0%, rgba(4,16,44,1) 100%)',
      px: { md: 6.5, lg: 0 },
    },
    topBarBoxStyle: {
      width: '100%',
      maxWidth: { xs: '1280px', xl: '1400px' },
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    mailBoxStyle: { display: 'flex', alignItems: 'center', gap: 0.8 },
    mailTextStyle: {
      fontSize: { md: '13px', lg: '15px' },
      fontWeight: 500,
      color: '#fff',
      textWrap: 'nowrap',
    },
    socialIconBoxStyle: { display: 'flex', alignItems: 'center', gap: 2.5 },
  },
};

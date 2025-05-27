const routes = [
  {
    name: 'Services',
    icon: '/images/header/arrow.svg',
    // new links
    collapse: [
      {
        dropdown: true,
        collapse: [
          {
            name: 'Hire Dedicated Developers',
            route: '/hire-dedicated-developers',
          },
          {
            name: 'Offshore Development Center',
            route: '/offshore-development-center',
          },
          {
            name: 'Fixed Price Projects',
            route: '/Fixed Price Projects',
          },
        ],
      },
    ],

    // old links
    // collapse: [
    //   {
    //     name: 'Trending',
    //     dropdown: true,
    //     collapse: [
    //       {
    //         name: 'UI UX Designer',
    //         route: '/hire-ui-ux-designers',
    //       },
    //       {
    //         name: 'Full Stack Developer',
    //         route: '/hire-full-stack-developers',
    //       },
    //       {
    //         name: 'MEAN Stack Developer',
    //         route: '/hire-mean-stack-developers',
    //       },
    //       {
    //         name: 'MERN Stack Developer',
    //         route: '/hire-mern-stack-developers',
    //       },
    //       {
    //         name: 'DevOps Engineer',
    //         route: '/hire-devops-engineers',
    //       },
    //       {
    //         name: 'Fintech Developer',
    //         route: '/hire-fintech-developers',
    //       },
    //       {
    //         name: 'Software Developer',
    //         route: '/hire-software-developers',
    //       },
    //       {
    //         name: 'QA Engineer',
    //         route: '/hire-qa-engineers',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Front-End Developers',
    //     dropdown: true,
    //     collapse: [
    //       {
    //         name: 'AngularJS Developer',
    //         route: '/hire-angular-developers',
    //       },
    //       {
    //         name: 'ReactJS Developer',
    //         route: '/hire-reactjs-developers',
    //       },
    //       {
    //         name: 'JavaScript Developer',
    //         route: '/hire-javascript-developers',
    //       },
    //       {
    //         name: 'NextJS Developer',
    //         route: '/hire-nextjs-developers',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Mobile App Developers',
    //     dropdown: true,
    //     collapse: [
    //       {
    //         name: 'Android Developer',
    //         route: '/hire-android-developers',
    //       },
    //       {
    //         name: 'Flutter Developer',
    //         route: '/hire-flutter-developers',
    //       },
    //       {
    //         name: 'React Native Developer',
    //         route: '/hire-react-native-developers',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Back-End Developers',
    //     dropdown: true,
    //     collapse: [
    //       {
    //         name: 'ASP .NET Developer',
    //         route: '/hire-asp-dot-net-developers',
    //       },
    //       {
    //         name: 'PHP Developer',
    //         route: '/hire-php-developers',
    //       },
    //       {
    //         name: 'Python Developer',
    //         route: '/hire-python-developers',
    //       },
    //       {
    //         name: 'NodeJS Developer',
    //         route: '/hire-nodejs-developers',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Embedded Developers',
    //     dropdown: true,
    //     collapse: [
    //       {
    //         name: 'Firmware Developer',
    //         route: '/hire-firmware-developers',
    //       },
    //       {
    //         name: 'PCB Designer',
    //         route: '/hire-pcb-designers',
    //       },
    //       {
    //         name: 'Embedded System Engineer',
    //         route: '/hire-embedded-system-engineers',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Digital Marketer',
    //     dropdown: true,
    //     collapse: [
    //       {
    //         name: 'Social Media Expert',
    //         route: '/hire-social-media-experts',
    //       },
    //       {
    //         name: 'PPC Specialist',
    //         route: '/hire-ppc-specialists',
    //       },
    //       {
    //         name: 'SEO Expert',
    //         route: '/hire-seo-experts',
    //       },
    //       {
    //         name: 'Performance Marketer',
    //         route: '/hire-performance-marketers',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Ecommerce Developers',
    //     dropdown: true,
    //     collapse: [
    //       {
    //         name: 'WordPress Developer',
    //         route: '/hire-wordpress-developers',
    //       },
    //       {
    //         name: 'Shopify Developer',
    //         route: '/hire-shopify-developers',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    name: 'Solutions',
    icon: '/images/header/arrow.svg',
    collapse: [
      {
        name: 'Start-Ups',
        description:
          'Propel your startup with specialized support with our agile outsourcing assistance.',
        href: '/solutions/business-startup',
        icon: '/images/header/startup.png',
      },
      {
        name: 'Enterprise',
        description:
          'Drive enterprise success with our outsourced talent and offer IoT-related expertise.',
        href: '/solutions/enterprises',
        icon: '/images/header/enterPrice.png',
      },
    ],
  },
  {
    name: 'Resources',
    icon: '/images/header/arrow.svg',
    collapse: [
      {
        name: 'Blogs',
        description:
          'Go through insightful perspectives and industry trends in our blog hub.All about overview, quick start, license and contents.',
        href: '/blogs',
        icon: '/images/header/blogs.png',
      },
      {
        name: 'eSparkWiki',
        description:
          'Explore the section of job description templates and learn about market demands.',
        href: '/esparkwiki',
        icon: '/images/header/esparkWiki.png',
      },
    ],
  },
  {
    name: 'Our Company',
    icon: '/images/header/arrow.svg',
    collapse: [
      {
        name: 'Why eSpark Talent',
        description:
          'Elevate success through tailored talent solutions for unparalleled growth and innovation.',
        href: '/what-we-do',
        icon: '/images/header/whyeSpark.png',
      },
      {
        name: 'How it Works',
        description:
          'Fast onboarding of IT outsourced team. Hire the world’s top talent in minutes.',
        href: '/how-it-works',
        icon: '/images/header/howItsWork.png',
      },
      {
        name: 'Partnership Program',
        description:
          'Collaborate and excel in our referral program for shared achievements and success.',
        href: '/partnership-program',
        icon: '/images/header/partnership.png',
      },
    ],
  },
  {
    name: 'Careers',
    icon: '/images/header/arrow.svg',
    collapse: [
      {
        name: 'Current Job Openings',
        description:
          'Join a dynamic team and build your career in an innovative environment.',
        href: '/careers',
        icon: '/images/header/careers.png',
      },
      {
        name: 'Join eSpark Crew',
        description:
          'Get register With eSpark Talent for Future suitable roles.',
        href: '/join-espark-crew',
        icon: '/images/header/partnership.png',
      },
    ],
  },
];
export const Hire_Remote_Routes = [
  {
    name: 'Services',
    icon: '/images/header/arrow.svg',
    collapse: [
      {
        name: 'Trending',
        dropdown: true,
        collapse: [
          {
            name: 'UI UX Designer',
            route: '/hire-ui-ux-designers',
          },
          {
            name: 'Full Stack Developer',
            route: '/hire-full-stack-developers',
          },
          {
            name: 'MEAN Stack Developer',
            route: '/hire-mean-stack-developers',
          },
          {
            name: 'MERN Stack Developer',
            route: '/hire-mern-stack-developers',
          },
          {
            name: 'DevOps Engineer',
            route: '/hire-devops-engineers',
          },
          {
            name: 'Fintech Developer',
            route: '/hire-fintech-developers',
          },
          {
            name: 'Software Developer',
            route: '/hire-software-developers',
          },
          {
            name: 'QA Engineer',
            route: '/hire-qa-engineers',
          },
        ],
      },
      {
        name: 'Front-End Developers',
        dropdown: true,
        collapse: [
          {
            name: 'AngularJS Developer',
            route: '/hire-angular-developers',
          },
          {
            name: 'ReactJS Developer',
            route: '/hire-reactjs-developers',
          },
          {
            name: 'JavaScript Developer',
            route: '/hire-javascript-developers',
          },
          {
            name: 'NextJS Developer',
            route: '/hire-nextjs-developers',
          },
        ],
      },
      {
        name: 'Mobile App Developers',
        dropdown: true,
        collapse: [
          {
            name: 'Android Developer',
            route: '/hire-android-developers',
          },
          {
            name: 'Flutter Developer',
            route: '/hire-flutter-developers',
          },
          {
            name: 'React Native Developer',
            route: '/hire-react-native-developers',
          },
        ],
      },
      {
        name: 'Back-End Developers',
        dropdown: true,
        collapse: [
          {
            name: 'ASP .NET Developer',
            route: '/hire-asp-dot-net-developers',
          },
          {
            name: 'PHP Developer',
            route: '/hire-php-developers',
          },
          {
            name: 'Python Developer',
            route: '/hire-python-developers',
          },
          {
            name: 'NodeJS Developer',
            route: '/hire-nodejs-developers',
          },
        ],
      },
      {
        name: 'Embedded Developers',
        dropdown: true,
        collapse: [
          {
            name: 'Firmware Developer',
            route: '/hire-firmware-developers',
          },
          {
            name: 'PCB Designer',
            route: '/hire-pcb-designers',
          },
          {
            name: 'Embedded System Engineer',
            route: '/hire-embedded-system-engineers',
          },
        ],
      },
      {
        name: 'Digital Marketer',
        dropdown: true,
        collapse: [
          {
            name: 'Social Media Expert',
            route: '/hire-social-media-experts',
          },
          {
            name: 'PPC Specialist',
            route: '/hire-ppc-specialists',
          },
          {
            name: 'SEO Expert',
            route: '/hire-seo-experts',
          },
          {
            name: 'Performance Marketer',
            route: '/hire-performance-marketers',
          },
        ],
      },
      {
        name: 'Ecommerce Developers',
        dropdown: true,
        collapse: [
          {
            name: 'WordPress Developer',
            route: '/hire-wordpress-developers',
          },
          {
            name: 'Shopify Developer',
            route: '/hire-shopify-developers',
          },
        ],
      },
    ],
  },
  {
    name: 'Solutions',
    icon: '/images/header/arrow.svg',
    collapse: [
      {
        name: 'Start-Ups',
        description:
          'Propel your startup with specialized support with our agile outsourcing assistance.',
        href: '/solutions/business-startup',
        icon: '/images/header/startup.png',
      },
      {
        name: 'Enterprise',
        description:
          'Drive enterprise success with our outsourced talent and offer IoT-related expertise.',
        href: '/solutions/enterprises',
        icon: '/images/header/enterPrice.png',
      },
    ],
  },
  {
    name: 'Our Company',
    icon: '/images/header/arrow.svg',
    collapse: [
      {
        name: 'Why eSpark Talent',
        description:
          'Elevate success through tailored talent solutions for unparalleled growth and innovation.',
        href: '/what-we-do',
        icon: '/images/header/whyeSpark.png',
      },
      {
        name: 'How it Works',
        description:
          'Fast onboarding of IT outsourced team. Hire the world’s top talent in minutes.',
        href: '/how-it-works',
        icon: '/images/header/howItsWork.png',
      },
      {
        name: 'Partnership Program',
        description:
          'Collaborate and excel in our referral program for shared achievements and success.',
        href: '/partnership-program',
        icon: '/images/header/partnership.png',
      },
    ],
  },
];
export default routes;

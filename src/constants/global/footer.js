export const FOOTER_DATA = {
  logo: '/images/footer/logo.png',
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

export const HIDDEN_PATHS = ['/book-a-demo'];

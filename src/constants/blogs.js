export const VIEW_ALL_BLOGS = 'View all blogs';
export const VIEW_LESS_BLOGS = 'View less blogs';
export const READ_MORE = 'Read More';
export const TITLE = 'eSpark Talent Knowledge Junction.';
export const DESCRIPTIONS =
  'Dive into our blogs and gain insights about every modern trend!';

export const SOCIAL_LINKS_DATA = [
  {
    link: 'https://www.facebook.com/people/eSpark-Talent/61550048738610/',
    className: 'facebook',
    src: '/images/blog/icons/facebook.png',
  },
  {
    link: 'https://twitter.com/eSparkTalent',
    className: 'twitter',
    src: '/images/blog/icons/twitter-x.png',
  },
  {
    link: 'https://www.linkedin.com/company/espark-talent/',
    className: 'linkedin',
    src: '/images/blog/icons/linked-in.png',
  },
  {
    link: 'https://www.instagram.com/esparktalent/',
    className: 'instagram',
    src: '/images/blog/icons/instagram.png',
  },
];

export const buttonStyle = {
  containerBoxStyle: {
    position: 'relative',
    display: 'flex',
    transition: 'background-color 0.5s, color 0.5s',
    border: 'none',
    zIndex: 1,
    backgroundColor: 'transparent',
    width: { xs: '100%', md: '60%' },
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 500,
    margin: '5px 5px',
    overflow: 'hidden',
    cursor: 'pointer',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#029894',
      zIndex: -1,
      transform: 'translateX(-100%)',
      transition: 'transform 0.5s',
    },
    '&:hover': {
      color: '#fff ',
      '&::before': {
        transform: 'translateX(0)',
      },
    },
  },
  typographyAndArrowBoxStyle: {
    backgroundColor: '#029894',
    padding: { xs: '4px', md: '6px', lg: '10px' },
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mr: { xs: '8px', md: '8px', lg: '15px' },
    '&:hover': {
      color: '#fff',
      '&::before': {
        transform: 'translateX(0)',
      },
    },
  },
  arrowStyle: {
    fontSize: '18px',
    color: '#fff',
    transition: 'left 0.5s',
    '&:hover': {
      left: '50%',
      color: '#fff',
    },
  },
  typographyStyle: {
    fontSize: {
      xs: '13px',
      sm: '13px',
      md: '15px',
      lg: '20px',
    },
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#09114A',
    '&:hover': {
      width: '100%',
      color: '#fff',
    },
  },
  linkStyle: { display: 'flex', alignSelf: 'flex-end' },
};

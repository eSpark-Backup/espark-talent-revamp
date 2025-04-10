const NOT_FOUND_DATA = {
  image: '/images/404Error.png',
  title: 'Error 404: Page Not Found!',
  desc: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  btnLink: '/',
  btnText: 'Back to Homepage',
};

const WIKIS_NOT_FOUND_DATA = {
  image: '/images/404Error.png',
  title: 'Oops: This Wiki Not Found',
  desc: 'Please check your link and ensure that you are on the correct page.',
  btnLink: '/esparkwiki',
  btnText: 'Back to eSpark Wiki',
};

const BLOGS_NOT_FOUND_DATA = {
  image: '/images/404Error.png',
  title: 'Oops: This Blog Not Found',
  desc: 'Please check your link and make sure that you are on the right page.',
  btnLink: '/blogs',
  btnText: 'Back to Blogs',
};
const HIRES_NOT_FOUND_DATA = {
  image: '/images/404Error.png',
  title: 'Error 404: Hiring Page Not Found!',
  desc: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  btnLink: '/',
  btnText: 'Back to Homepage',
};
const SERVICE_NOT_FOUND_DATA = {
  image: '/images/404Error.png',
  title: 'Error 404: Service Page Not Found!',
  desc: 'The service page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  btnLink: '/',
  btnText: 'Back to Homepage',
};

const containerStyle = {
  py: '5%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const imageBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const titleStyle = {
  mt: 4,
  mb: 3,
  textAlign: 'center',
};
const descStyle = {
  mb: 4,
  px: '25%',
  textAlign: 'center',
};
const buttonBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Loading component data and styles
const LOADING_DATA = {
  loadingFallBackBoxStyle: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#fff',
  },
  dotAnimationStyle: (dotAnimation) => ({
    mt: -1,
    display: 'flex',
    gap: '5px',
    '& div': {
      width: '6px',
      height: '6px',
      backgroundColor: '#029894',
      borderRadius: '50%',
      animation: `${dotAnimation} 1s ease-in-out infinite`,
    },
    '& div:nth-of-type(1)': {
      animationDelay: '0s',
    },
    '& div:nth-of-type(2)': {
      animationDelay: '0.2s',
    },
    '& div:nth-of-type(3)': {
      animationDelay: '0.4s',
    },
  }),
  dots: [1, 2, 3],
  rocketBoxStyle: { position: 'relative' },
  logoBoxStyle: { display: 'flex', alignItems: 'center', gap: 0.5, pb: 1 },
  rocketImage: '/images/loading-slider-img.png',
  rocketImageStyle: (rocketAnimation) => ({
    width: 'auto',
    height: 'auto',
    animation: `${rocketAnimation} 20s ease-in forwards`,
  }),
  titleImage: '/images/espark.png',
  smokes: [1, 2, 3, 4],
  smokeAnimationStyle: (somkeAnimation, index) => ({
    position: 'absolute',
    bottom: '10px',
    left: '10%',
    width: '20px',
    height: '20px',
    backgroundColor: `rgba(211, 211, 211, 0.904)`,
    borderRadius: '50%',
    opacity: 0,
    animation: `${somkeAnimation} 1.5s ease-in forwards`,
    animationDelay: `${index}s`,
  }),
};

export {
  NOT_FOUND_DATA,
  WIKIS_NOT_FOUND_DATA,
  BLOGS_NOT_FOUND_DATA,
  HIRES_NOT_FOUND_DATA,
  SERVICE_NOT_FOUND_DATA,
  containerStyle,
  imageBoxStyle,
  titleStyle,
  descStyle,
  buttonBoxStyle,
  LOADING_DATA,
};

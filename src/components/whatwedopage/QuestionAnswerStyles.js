const containerStyles = {
  pb: { xs: 8, md: 12, lg: 15 },
};

const outerBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  rowGap: 5,
  columnGap: 5.5,
  '@media(min-width: 900px)': {
    flexDirection: 'row',
  },
};

const imageBoxStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  order: 2,
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: { xs: 'auto', md: '400px', lg: '418px' },
  maxWidth: { xs: '300px', md: '400px', lg: '500px' },
  '@media(min-width: 900px)': {
    order: 1,
    width: 'calc(100% - 500px)',
  },
};

const imageStyles = {
  width: '100%',
  height: 'auto',
};

const contentBoxStyles = {
  p: { xs: 2, sm: 4 },
  order: 1,
  width: '100%',
  display: 'flex',
  '@media(min-width: 900px)': {
    p: 0,
    order: 2,
    width: 'calc(100% - 500px)',
  },
};

const innerContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1.5,
  alignItems: 'center',
  justifyContent: 'center',
};

const titleStyles = {
  color: '#09114A',
  textAlign: 'center',
  fontSize: { xs: '20px', sm: '25px', md: '28px', lg: '32px' },
  fontWeight: 700,
  fontStyle: 'normal',
  lineHeight: {
    xs: '30px',
    sm: '35px',
    md: '38px',
    lg: '48px',
  },
  '@media(min-width: 900px)': {
    textAlign: 'start',
  },
};

const descriptionStyles = {
  color: '#001C63',
  fontSize: { xs: '11px', sm: '15px', md: '17px', lg: '18px' },
  fontWeight: { xs: 700, sm: 400 },
  fontStyle: 'normal',
  textAlign: 'center',
  lineHeight: {
    xs: '18px',
    sm: '22px',
    md: '26px',
    lg: '30px',
  },
  '@media(min-width: 900px)': {
    textAlign: 'start',
  },
};

const buttonContainerStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '@media(min-width: 900px)': {
    justifyContent: 'flex-start',
  },
};

export {
  containerStyles,
  outerBoxStyles,
  imageBoxStyles,
  imageStyles,
  contentBoxStyles,
  innerContentStyles,
  titleStyles,
  descriptionStyles,
  buttonContainerStyles,
};

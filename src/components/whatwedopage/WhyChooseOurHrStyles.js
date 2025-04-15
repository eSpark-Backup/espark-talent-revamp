const boxContainerStyles = {
  pt: { xs: 5, sm: 6, md: 7.5, lg: 8 },
  pb: { xs: 2, md: 6, lg: 7 },
};

const outerBoxStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  rowGap: { xs: 1.5, sm: 2, md: 2.5 },
  alignItems: 'center',
  '@media(min-width:900px)': {
    flexDirection: 'row',
  },
};

const leftBoxStyles = {
  width: '100%',
  maxWidth: '700px',
  '@media(min-width:900px)': {
    maxWidth: 'calc(100% - 500px)',
    pb: '50px',
  },
};

const innerBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
  p: 2,
  '@media(min-width:900px)': {
    alignItems: 'flex-start',
  },
};

const titleStyles = {
  color: '#001C63',
  fontSize: { xs: '20px', sm: '26px', md: '28px', lg: '32px' },
  fontWeight: { xs: 700, sm: 600 },
  lineHeight: { xs: '27px', sm: '32.289px', md: '42.289px' },
  textAlign: 'center',
  '@media(min-width:900px)': {
    textAlign: 'start',
  },
};

const paragraphStyles = {
  color: '#001C63',
  fontSize: { xs: '11px', sm: '16px', md: '18px', lg: '18px' },
  fontWeight: { xs: 700, sm: 400 },
  lineHeight: { xs: 'auto', lg: '31.863px' },
  textAlign: 'center',
  '@media(min-width:900px)': {
    textAlign: 'start',
  },
};

const rightBoxStyles = {
  width: '100%',
  maxWidth: '500px',
  mx: 'auto',
};

export {
  boxContainerStyles,
  outerBoxStyles,
  leftBoxStyles,
  innerBoxStyles,
  titleStyles,
  paragraphStyles,
  rightBoxStyles,
};

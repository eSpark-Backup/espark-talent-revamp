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

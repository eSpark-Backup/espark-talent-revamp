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

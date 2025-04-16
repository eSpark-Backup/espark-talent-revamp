export const styles = {
  mainBox: { width: '100%', height: '100%', backgroundColor: '#029894' },
  innerBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    pb: { xs: 3, sm: 4, md: 4, lg: 0 },
  },
  textBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    pt: { xs: 3, sm: 5, md: 7, lg: 7, xl: 10 },
    px: { xs: 0, sm: 0 },
    mb: { xs: 2, lg: 0 },
    gap: 1,
  },
  titleStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 600,
    textWrap: 'balance',
    lineHeight: { xs: '30px', sm: '42.289px' },
    fontSize: {
      xs: '27px !important',
      sm: '30px !important',
      md: '32px !important',
    },
    '@media (min-width:600px) and (max-width:767px)': {
      width: '550px',
      fontSize: '24px !important',
    },
    '@media (min-width:425px) and (max-width:599px)': {
      width: '390px',
      fontSize: '20px !important',
    },
    '@media (min-width:300px) and (max-width:424px)': {
      width: '280px',
      fontSize: '20px !important',
      lineHeight: '29px',
    },
    '@media (min-width:280px) and (max-width:299px)': {
      width: '280px',
      fontSize: '19px !important',
      lineHeight: '29px',
    },
  },
  descriptionStyle: {
    width: { xs: '100%', sm: '640px' },
    color: '#FFF',
    textAlign: 'center',
    fontSize: '16px !important',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24.863px',
    '@media (min-width:600px) and (max-width:767px)': {
      width: '550px',
      fontSize: '15px !important',
    },
    '@media (min-width:425px) and (max-width:599px)': {
      width: '390px',
      fontSize: '14px !important',
    },
    '@media (min-width:300px) and (max-width:424px)': {
      width: '280px',
      fontSize: '13px !important',
    },
    '@media (min-width:280px) and (max-width:299px)': {
      fontSize: '12px !important',
    },
  },
  imageStyle: {
    '@media (min-width:425px) and (max-width:599px)': {},
  },
};

export const gridStyles = { height: '100vh' };

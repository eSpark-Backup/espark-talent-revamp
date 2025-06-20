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

export const bookADemoFormStyles = {
  mainContainer: {
    width: 'auto',
    height: '100%',
    maxWidth: '486px',
    display: 'flex',
    alignItems: 'center',
    mx: { md: 'auto' },
    '@media(min-width: 280px) and (max-width:1259px)': {
      mx: 'auto',
    },
  },
  titleStyle: {
    color: '#001C63',
    fontSize: '32px !important',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '42.289px',
  },
  subTitleStyle: {
    color: '#001C63',
    fontSize: '15px !important',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: { xs: '25px', sm: '27.863px' },
  },
  lableStyle: {
    mb: 0.5,
    color: '#029894',
    fontSize: '14.448px !important',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '19.867px',
  },
  inputStyle: {
    width: '100%',
    borderRadius: '5.418px',
    height: '41px',
    border: ' 0.903px solid #D0D4EA',
    background: '#F5F8FA',
    fontSize: '14px',
    pl: 1.5,
    color: 'black',
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&:focus': {
      outline: 'none',
    },
  },
  submitButtonStyle: {
    mt: 1,
    mb: 3,
    width: '126.416px',
    height: '32.913px',
    borderRadius: '3.92px',
    background: '#001C63',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#029894',
    },
  },
  lastDescriptionStyle: {
    color: '#001C63',
    fontSize: '15px !important',
    fontStyle: 'normal',
    fontWeight: 400,
    linehHeight: '27.863px',
    maxWidth: '430px',
  },
};

export const formBoxStyles = (pathName, book, remote) => {
  const formBox = {
    width: '100%',
    height: { xs: 'auto', sm: '100%' },
    display: 'flex',
    flexDirection: 'column',
    mt: {
      xs: pathName == book || pathName?.includes(remote) ? 0 : 5,
      sm: pathName == book || pathName?.includes(remote) ? 0 : 5,
      md: pathName == book || pathName?.includes(remote) ? 0 : 10,
      lg: 0,
    },
    mb: {
      xs: pathName == book ? 0 : 5,
      sm: 0,
      md: 0,
      lg: 0,
    },
    px: 2,
    alignItems: { md: 'center' },
    justifyContent: { xs: 'auto', lg: 'center' },
    '@media (min-width: 600px) and (max-width: 768px)': {
      justifyContent: 'center',
      px: 2,
      width: '100%',
    },
    '@media (max-width: 425px)': {
      justifyContent: 'center',
      px: 2,
      width: '100%',
    },
  };
  return formBox;
};

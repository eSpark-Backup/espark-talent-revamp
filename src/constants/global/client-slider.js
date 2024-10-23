const boxStyle = {
  width: {
    sm: '184px',
    md: '184px',
    lg: '186px',
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
    width: '180px',
    height: '25px',
  },
  '@media (min-width: 280px) and (max-width: 374px)': {
    width: '180px',
    height: '25px',
  },
};
const completeTitleStyle = {
  textAlign: 'center',
  py: { xs: '16px', sm: '18px', md: '30px' },
  pt: { xs: '17px', sm: '20px', md: '50px' },
  display: 'none',
  '@media (min-width:770px)': {
    display: 'flex',
  },
};
const shortTitleStyle = {
  py: { xs: '16px', sm: '18px', md: '30px' },
  pt: { xs: '17px', sm: '20px', md: '50px' },
  textAlign: 'center',
  display: 'none',
  '@media (max-width:769px)': {
    display: 'flex',
  },
};
const sliderStyle = {
  PY: '2.5%',
  width: '100%',
  boxShadow: '0 -6px 19.8px  rgba(0,0,0,0.25) ',
};
const containerStyle = { display: 'flex', justifyContent: 'center' };

export {
  boxStyle,
  completeTitleStyle,
  shortTitleStyle,
  sliderStyle,
  containerStyle,
};

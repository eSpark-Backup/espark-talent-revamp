const responsiveHeaderStyle = {
  display: { xs: 'flex', md: 'none' },
  order: { xs: 2, md: 1 },
};
const menuIconStyle = {
  '&:hover': { background: 'none' },
};

const accordionStyle = {
  boxShadow: 'none !important',
  backgroundColor: 'none !important',
  width: '100%',
  border: 0,
  '.mui-bsh1p3-MuiPaper-root-MuiAccordion-root:before': {
    boxShadow: 'none !important',
    backgroundColor: 'transparent !important',
    left: 0,
    border: 0,
  },
};

const accordionSummaryStyle = {
  backgroundColor: 'red #fff ',
  boxShadow: 'none',
};

const typographyStyle = {
  color: '#222',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '21px',
};

const expandMoreIconStyle = {
  color: '#222 !important',
};

const accordionDetailsStyle = {
  backgroundColor: '#fff !important',
};

const menuItemStyle = {
  display: 'flex',
  alignItems: 'center',
};

const imageStyle = {
  marginRight: '2px',
};

const boxStyle = {
  mx: 2,
};

const subtitle1Style = {
  color: '#222',
  fontSize: '17.566px',
  fontWeight: 600,
  lineHeight: '17px',
  mb: 1,
};

const body2Style = {
  color: '#000',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  whiteSpace: 'normal',
};

const buttonStyle = {
  ml: 1.7,
  mt: 0.5,
  width: { xs: '170px', md: '180px', lg: '223px' },
  height: { xs: '44px', md: '46px', lg: '48px' },
  backgroundColor: '#101828',
  borderRadius: '100px',
  color: '#fff',
  fontSize: '20px',
  '&:hover': {
    backgroundColor: '#101828',
    color: '#fff',
  },
};

export {
  responsiveHeaderStyle,
  menuIconStyle,
  accordionStyle,
  accordionSummaryStyle,
  typographyStyle,
  expandMoreIconStyle,
  accordionDetailsStyle,
  menuItemStyle,
  imageStyle,
  boxStyle,
  subtitle1Style,
  body2Style,
  buttonStyle,
};

const containerStyles = { mb: '4%' };
const gridContainerStyles = {
  container: {
    direction: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' },
  },
  item1: {
    mb: { xs: '50px', md: '0px' },
  },
  item2: {
    order: { sm: 2, xs: 1 },
    display: 'flex',
    justifyContent: { lg: 'right', xs: 'center' },
    alignItems: 'center',
  },
};
const cardStyles = {
  container: {
    border: '1px solid #E5E5E5',
    borderRadius: '5px',
    py: '18px',
    display: 'flex',
    minHeight: { xs: '85px', sm: 'auto' },
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  typography: {
    color: '#001C63',
    px: { xs: '34px', md: '0' },
    textAlign: 'center',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
  },
};
const headingStyles = {
  color: '#001C63',
  textAlign: { xs: 'center', md: 'right' },
  flexWrap: 'wrap',
  pl: { md: '20px', lg: '118px' },
  lineHeight: { md: '56px', xs: '32px' },
  fontSize: { md: '32px', xs: '20px' },
  fontWeight: 700,
};
const subHeadingStyles = {
  color: '#001C63',
  textAlign: { xs: 'center', md: 'right' },
  my: { xs: '20px', md: '20px' },
  ml: { md: '10px ', lg: '70px' },
  lineHeight: { xs: '17px', md: '30.4px' },
  fontStyle: 'normal',
  fontSize: { xs: '10px', sm: '12px', md: '16px' },
  fontWeight: 400,
  px: { xs: '13px', md: '0px' },
};
const headingBoxStyles = {
  alignItems: 'center',
  pt: { xs: '30px', md: '0px' },
};
const gridStyles = { order: { sm: 1, xs: 2 } };
export {
  containerStyles,
  gridContainerStyles,
  cardStyles,
  headingStyles,
  gridStyles,
  subHeadingStyles,
  headingBoxStyles,
};

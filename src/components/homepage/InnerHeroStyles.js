const boxContainerStyles = (data) => ({
  py: data?.spacing,
  pt: data?.pt,
  pb: 0,
  background: data?.bgColor,
  backgroundImage: `url(${data?.bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
const gridBoxStyles = {
  alignItems: 'center',
  flexDirection: { xs: 'column', sm: 'row' },
};
const gridItemStyles = { display: 'flex', flexDirection: 'column' };
const buttonStyles = {
  backgroundColor: '#fff',
  display: { xs: 'none', sm: 'flex' },
  '&:hover': {
    color: '#fff',
    backgroundColor: '#fff',
  },
  py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
  px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
  height: '50px',
  width: '160px',
  color: '#001C63',
  fontWeight: '700',
};
const imageGridStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'right',
};

export {
  boxContainerStyles,
  gridBoxStyles,
  gridItemStyles,
  buttonStyles,
  imageGridStyle,
};

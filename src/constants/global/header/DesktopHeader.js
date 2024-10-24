const boxStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
};

const desktopNavStyle = {
  flexGrow: 1,
  display: { xs: 'none', md: 'flex' },
  ml: { md: '20px', lg: '30px' },
};

const buttonStyle = {
  my: 2,
  mx: { md: 0.5, lg: 1 },
  color: '#222',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '21.766px',
  display: 'flex',
  alignItems: 'center',
  '&:hover': { background: 'none' },
};

const typographyStyle = {
  color: '#222',
  fontSize: { xs: '16px', lg: '18px' },
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '21.766px',
  fontFamily: 'Titillium Web, sans-serif',
};

const dividerStyle = { mx: '20%' };
const buttonBoxStyle = { display: 'flex' };
const popperBoxStyle = {
  bgcolor: 'background.paper',
  boxShadow: 'rgba(0, 0, 0, 0.10) 0px 5px 8px',
  borderRadius: '10px',
  mt: { lg: '30px', md: '30px' },
};
const menuItemStyle = {
  width: '341px',
  height: 'auto',
  padding: 2,
};
const menuItemBoxStyle = {
  display: 'flex',
  alignItems: 'center',
};
const subMenuItemStyle = {
  color: '#222',
  fontSize: '17.566px',
  fontWeight: 600,
  lineHeight: '17px',
  mb: 1,
};
const subMenuItemDescriptionStyle = {
  color: '#000',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  width: '240px',
  whiteSpace: 'normal',
};
const subMenuItemBoxStyle = { mx: 2 };

export {
  boxStyle,
  desktopNavStyle,
  buttonStyle,
  typographyStyle,
  dividerStyle,
  buttonBoxStyle,
  popperBoxStyle,
  menuItemStyle,
  menuItemBoxStyle,
  subMenuItemStyle,
  subMenuItemDescriptionStyle,
  subMenuItemBoxStyle,
};

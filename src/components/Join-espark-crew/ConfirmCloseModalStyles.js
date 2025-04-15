const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: 450 },
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const headingStyle = {
  fontSize: '30px',
  fontWeight: 600,
};

const descriptionStyle = {
  fontSize: '15px',
  textAlign: 'center',
  color: 'black',
  my: 3,
};

const buttonStyle = {
  padding: '5px 40px',
};

const stackStyle = {
  mt: 2,
};

export { style, headingStyle, descriptionStyle, buttonStyle, stackStyle };

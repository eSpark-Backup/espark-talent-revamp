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
const titleBoxStyle = {
  fontSize: '40px',
  fontWeight: 600,
};
const descriptionBoxStyle = {
  fontSize: '18px',
  textAlign: 'center',
  color: 'black',
};
const buttonBoxStyle = { mt: 2 };
const buttonStyle = {
  padding: '5px 40px',
};

export {
  style,
  titleBoxStyle,
  descriptionBoxStyle,
  buttonBoxStyle,
  buttonStyle,
};

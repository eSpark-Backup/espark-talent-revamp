const modalStyle = {
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

const titleStyle = {
  fontSize: '40px',
  fontWeight: 600,
};

const descriptionStyle = {
  fontSize: '18px',
  textAlign: 'center',
  color: 'black',
};

const buttonStyle = {
  padding: '5px 40px',
};

export { modalStyle, titleStyle, descriptionStyle, buttonStyle };

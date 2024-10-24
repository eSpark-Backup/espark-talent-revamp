const textAreaStyle = {
  border: '1px solid #cccccc',
  backgroundColor: 'white',
  color: 'black',
  minHeight: '20px',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '8px',
  width: '100%',
};
const infoIconStyle = {
  color: (theme) => theme.palette.primary.main,
  marginLeft: '5px',
  fontSize: '13px',
  marginBottom: '12px',
};
const infoIconBoxStyle = {
  width: '20px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
};
const requiredStyle = {
  color: '#ff0000',
};
const labelStyle = {
  fontSize: { xs: '14px', md: '18px' },
  mb: 1,
  textAlign: 'left',
  color: 'secondary',
};
const labelBoxStyle = {
  display: 'flex',
  alignItems: 'center',
};

export {
  textAreaStyle,
  infoIconStyle,
  infoIconBoxStyle,
  requiredStyle,
  labelStyle,
  labelBoxStyle,
};

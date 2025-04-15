const labelStyle = {
  fontSize: { xs: '14px', md: '18px' },
};

const infoIconStyle = {
  color: (theme) => theme?.palette?.primary?.main,
  marginLeft: '5px',
  fontSize: '13px',
  marginBottom: '12px',
};

const boxStyle = {
  display: 'flex',
  alignItems: 'center',
};

const tooltipBoxStyle = {
  width: '20px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
};

const inputStyle = {
  height: '51px',
  fontSize: '16px',
  backgroundColor: 'white',
  color: 'black',
  padding: '10px',
  width: '100%',
  resize: 'vertical',
};

export { labelStyle, infoIconStyle, boxStyle, tooltipBoxStyle, inputStyle };

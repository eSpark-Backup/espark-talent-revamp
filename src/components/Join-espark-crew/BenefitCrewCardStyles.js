const gridStyle = {
  padding: '20px',
};

const stackStyle = {
  backgroundColor: '#E8F4FF66',
  padding: { xs: '8px', md: '10px' },
  border: '0.67px solid #0000004D',
  borderRadius: '3.34px',
};

const boxStyle = {
  backgroundColor: (theme) => theme?.palette?.primary?.main,
  minWidth: '35px',
  maxWidth: '35px',
  borderRadius: '50%',
  height: '35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
export { gridStyle, stackStyle, boxStyle };

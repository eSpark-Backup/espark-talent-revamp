const stackBoxStyle = {
  display: 'flex',
  alignItems: 'center',
};

const typographyStyle = {
  fontSize: { xs: '14px', md: '18px' },
};

const infoIconStyle = {
  color: (theme) => theme?.palette?.primary?.main,
  marginLeft: '5px',
  fontSize: '13px',
  marginBottom: '12px',
};

const tooltipBoxStyle = {
  width: '20px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
};
export { stackBoxStyle, typographyStyle, infoIconStyle, tooltipBoxStyle };

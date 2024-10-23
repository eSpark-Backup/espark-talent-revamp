const mediumScreenStyle = {
  textAlign: 'center',
  px: { xs: 2, sx: 2, md: 2, lg: 2 },
  pb: { xs: 2, sx: 2, md: 2, lg: 2 },
  pt: '20px',
  gap: '20px',
};

const linkStyle = {
  color: '#001C63',
  fontSize: {
    xs: '12px',
    sm: '12px',
    md: '13px',
    lg: '15px',
    xl: '20px',
  },
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
};

const copyrightStyle = {
  color: '#0E0F1D',
  fontSize: {
    xs: '12px',
    sm: '12px',
    md: '13px',
    lg: '15px',
    xl: '20px',
  },
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
};

const largeScreenStyle = {
  display: 'flex',
  textAlign: 'center',
  px: { xs: 0, sx: 0, md: 2, lg: 2 },
  py: { xs: 1, sx: 1, md: 2, lg: 2 },
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
};

export { mediumScreenStyle, linkStyle, copyrightStyle, largeScreenStyle };

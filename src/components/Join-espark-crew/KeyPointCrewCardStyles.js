const indexStyle = { width: '30px', height: '30px' };
const indexBoxStyle = (index, KEYS) => ({
  borderRadius: '50%',
  padding: '7px',
  position: 'relative',
  ':after': {
    content: '" "',
    position: 'absolute',
    top: '40px',
    left: '22px',
    backgroundColor: '#029894',
    width: { xs: '0px', sm: '2px' },
    height: index !== KEYS?.length - 1 ? '50px' : '0px',
  },
});
const titleStyles = { fontWeight: 700, color: '#001C63' };
const descStyles = {
  marginTop: '5px',
  lineHeight: 1.65,
  fontWeight: 500,
  fontSize: {
    xs: '12px',
    sm: '12px',
    md: '16px',
    lg: '18px',
    xl: '18px',
  },
  color: 'secondary',
};
const stackStyles = (index, KEYS) => ({
  marginBottom: index !== KEYS?.length - 1 ? '20px' : '0px',
});
export { indexStyle, indexBoxStyle, titleStyles, descStyles, stackStyles };

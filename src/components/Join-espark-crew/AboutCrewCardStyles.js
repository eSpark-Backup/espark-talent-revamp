const gridStyles = (index) => ({
  width: '100%',
  justifyContent: 'flex-end',
  display: { sm: 'inline-block', md: index === 0 && 'flex' },
});

const stackStyles = (index) => ({
  width: {
    sm: '100%',
    md: index === 0 || index === 1 ? '80%' : '100%',
  },
  padding: '10px',
  boxShadow: '0px 4px 25.2px 0px #0000001F',
  borderRadius: '7px',
  position: 'relative',
  minHeight: '95px',
  ':after': {
    content: '" "',
    width: { sm: '3px', md: '3px' },
    height: '100%',
    position: 'absolute',
    top: '0px',
    left: { sm: '0px', md: 'auto !important' },
    [index % 2 !== 0 ? 'left' : 'right']: '0px !important',
    backgroundColor: '#029894',
  },
});
const indexStyle = { letterSpacing: '5px' };

export { gridStyles, stackStyles, indexStyle };

const fileNameStyle = {
  fontSize: { xs: '11px', md: '12px', lg: '14px' },
  color: '#029894',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: 'calc(100% - 100px)',
  maxWidth: '260px',
};
const boxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  pb: '5px',
  borderBottom: '2px solid #d0d0d0',
  '&:hover': {
    borderBottom: '2px solid #029894',
  },
};
export { fileNameStyle, boxStyle };

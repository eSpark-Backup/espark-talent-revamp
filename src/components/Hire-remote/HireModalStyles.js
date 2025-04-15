const modalStyle = {
  position: 'absolute',
  width: '95%',
  maxWidth: '519px',
  minHeight: '611px',
  maxHeight: '98%',
  bgcolor: 'white',
  borderRadius: '24px',
  boxShadow: '0px 4px 10.1px 0px rgba(0, 0, 0, 0.38)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

const closeButtonContainerStyle = {
  width: '100%',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'flex-end',
  backgroundColor: '#fff',
  py: 1.2,
  px: 1.2,
};

const closeButtonStyle = {
  color: '#029894',
  width: { xs: '25px', md: '30px' },
  height: { xs: '25px', md: '30px' },
  borderRadius: '100%',
  cursor: 'pointer',
  border: '2px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'cursive',
  fontSize: '15px',
  fontWeight: 'bold',
};

const contentStyle = {
  flex: 1,
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '3px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#ccc',
    borderRadius: '10px',
    border: '2px solid transparent',
    backgroundClip: 'content-box',
  },
  scrollbarWidth: 'thin',
  scrollbarColor: '#ccc transparent',
  height: '500px',
  maxHeight: '850px',
  px: { xs: 2, sm: 3.5, md: 5 },
  pt: { xs: 3, sm: 0.2 },
  my: { xs: 3, sm: 5 },
};

const modalContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export {
  modalStyle,
  closeButtonContainerStyle,
  closeButtonStyle,
  contentStyle,
  modalContainerStyle,
};

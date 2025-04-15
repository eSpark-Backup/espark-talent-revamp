const conatinerStyles = { width: '100%' };
const submitStyles = {
  fontSize: '21.21px',
};
const modalStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const closeButtonBoxStyles = {
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: { xs: '97%', md: '90%', lg: '80%', xl: '70%' },
  overflowY: 'scroll',
  height: '80vh',
  position: 'relative',
};
const closeButtonStyles = { position: 'absolute', top: '10px', right: '10px' };
const submitBoxStyles = (theme, loading) => ({
  width: '100%',
  height: '50px',
  backgroundColor: (theme) =>
    !loading ? theme?.palette?.primary?.main : '#ccc',
  color: 'white',
  margin: 'auto auto',
  border: 'none',
  fontSize: '22px',
  cursor: 'pointer',
  marginBottom: '10px',
  borderRadius: '8px',
});
const submitContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 30px',
  width: '100%',
};
const dropdownBoxStyles = (theme, item) => ({
  [theme?.breakpoints?.up('xs')]: {
    width: '100%',
  },

  [theme?.breakpoints?.up('md')]: {
    width:
      item?.name === 'city' ||
      item?.name === 'job_type' ||
      item?.name === 'projects'
        ? '100%'
        : '30%',
  },
});
const feildsBoxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
};
const headingTitleStyles = {
  fontSize: {
    xs: '18px',
    sm: '22px',
    lg: '24px',
    fontWeight: 600,
  },
  pl: { xs: '12px' },
};
const infoIconStyles = {
  color: (theme) => theme?.palette?.primary?.main,
  marginLeft: '5px',
  fontSize: '13px',
  marginBottom: '12px',
};
const resumeTitleStyles = {
  fontSize: {
    xs: '18px',
    sm: '22px',
    lg: '24px',
    fontWeight: 600,
  },
  pl: { xs: '12px' },
};
const orTextStyles = { color: 'black' };
const skilsStyles = { fontSize: { xs: '14px', md: '18px' } };
const skilsBoxStyles = {
  display: 'flex',
  alignItems: 'center',
};
const inputBoxStyles = (theme, item) => ({
  [theme?.breakpoints?.up('xs')]: {
    width: '100%',
  },
  [theme?.breakpoints?.up('md')]: {
    width:
      item?.name === 'projects'
        ? '100%'
        : item?.name === 'city' ||
            item?.name === 'country' ||
            item?.name === 'education' ||
            item?.name === 'major'
          ? '48%'
          : '31%',
  },
  marginBottom: { xs: '10px', md: '15px' },
});
const containerBoxStyles = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  [theme?.breakpoints?.up('xs')]: {
    flexDirection: 'column',
    padding: '20px 10px',
    rowGap: '10px',
  },

  [theme?.breakpoints?.up('md')]: {
    flexDirection: 'row',
    padding: '30px',
  },
});
const personalinfoHeadingStyle = {
  fontSize: {
    xs: '18px',
    sm: '25px',
    lg: '30px',
    fontWeight: 600,
  },
  pl: { xs: '12px' },
};
const imageUploaderStack = {
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
  div: { width: '50%', div: { width: '100%' } },
};
const feildsBoxStyles2 = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
  rowGap: '6px',
};
export {
  closeButtonStyles,
  containerBoxStyles,
  conatinerStyles,
  submitStyles,
  modalStyle,
  closeButtonBoxStyles,
  submitBoxStyles,
  submitContainerStyles,
  dropdownBoxStyles,
  infoIconStyles,
  feildsBoxStyles,
  headingTitleStyles,
  feildsBoxStyles2,
  orTextStyles,
  skilsBoxStyles,
  resumeTitleStyles,
  skilsStyles,
  inputBoxStyles,
  personalinfoHeadingStyle,
  imageUploaderStack,
};

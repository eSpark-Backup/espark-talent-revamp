const titleSkeltonStyle = { fontSize: '3rem', width: '80%' };
const locationSkeltonStyle = { fontSize: '1rem', width: '70%' };
const skeltonStyle = { fontSize: '3rem' };
const itemSkeltonStyle = { fontSize: '1rem' };

export const cardContainerStyle = {
  px: 3,
  py: { xs: 3.5, sm: 4, md: 5 },
  my: 2.5,
  rowGap: 2,
  mx: 'auto',
  width: '95%',
  display: 'flex',
  flexDirection: 'column',
  borderTop: '.5px solid #ced4da',
  borderRadius: '20px',
  boxShadow: `5px 5px 15px rgba(0,0,0,.3)`,
  '@media(min-width:900px)': {
    width: '100%',
    flexDirection: 'row',
    boxShadow: 'none',
    borderRadius: '0',
    pl: 4,
  },
};

export const jobTitleBoxStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 0.5,
  '@media(min-width:900px)': {
    width: '300px',
  },
};

export const jobTitleTextStyle = {
  lineHeight: {
    xs: 1.5,
  },
  fontSize: {
    xs: '18px',
    sm: '20px',
    md: '24px',
    lg: '28px',
  },
};

export const jobLocationTextStyle = {
  color: '#000',
  fontSize: {
    xs: '12px',
    sm: '13px',
    md: '15px',
    lg: '20px',
  },
};

export const jobDiscriptionBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  pt: 2,
  pr: 1.5,
  gap: 1,
  width: '100%',
  maxWidth: '100%',
  borderTop: '2px solid #ced4da',
  '@media(min-width:900px)': {
    maxWidth: 'calc(100% - 550px)',
    borderTop: 'none',
    gap: 0.5,
    pt: 0,
  },
};

export const jobDiscriptionHeadingStyle = {
  fontSize: {
    xs: '18px',
    sm: '20px',
    md: '24px',
    lg: '28px',
  },
};

export const jobDiscriptionTextStyle = {
  fontSize: {
    xs: '11px',
    sm: '13px',
    md: '15px',
    lg: '20px',
  },
};

export const applyButtonBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  width: '100%',
  '@media(min-width:900px)': {
    justifyContent: 'center',
    width: '250px',
  },
};

export const applyButtonStyle = {
  width: { xs: '100%', sm: '160px' },
  py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
  px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
  backgroundColor: '#029894',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#029894',
    color: '#fff',
  },
};

export const applyButtonTextStyle = {
  fontWeight: 600,
  fontSize: {
    xs: '15px',
    sm: '12px',
    md: '15px',
    lg: '20px',
  },
  transition: 'none',
  '&:hover': {
    transform: 'none',
  },
};

export {
  titleSkeltonStyle,
  locationSkeltonStyle,
  skeltonStyle,
  itemSkeltonStyle,
};

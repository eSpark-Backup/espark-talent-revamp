const outerBoxStyle = {
  my: 2,
  pt: { lg: '45px' },
  pb: { sm: '25px' },
};

const containerGridStyle = {
  display: 'flex',
  alignItems: 'center',
};

const leftGridStyle = {
  mr: { xs: '', md: '25px', lg: '35px' },
};

const titleTypographyStyle = {
  color: '#001C63',
  fontSize: { xs: '20px', md: '28px' },
  lineHeight: { xs: '31px', md: '41.547px' },
  fontWeight: 500,
  mr: { lg: '35px', xs: '0' },
  textAlign: { xs: 'center', md: 'left' },
  mb: { xs: '10px', md: '10px', lg: '15px' },
  mx: { xs: '20px', md: '0px' },
};

const listItemBoxStyle = {
  display: 'flex',
  textAlign: 'baseline',
  '@media (min-width: 700px) and (max-width:768px)': {
    ml: '20%',
  },
  '@media (min-width: 550px) and (max-width:699px)': {
    ml: '20%',
  },
  '@media (min-width: 427px) and (max-width:549px)': {
    ml: '13%',
  },
};

const listItemIconStyle = {
  minWidth: { xs: '28px', md: '30px' },
};

const taskAltIconStyle = {
  color: '#029894',
  fontSize: { xs: '15px', md: '22px' },
};

const listItemTypographyStyle = {
  mb: 2,
  color: '#001C63',
  fontSize: { xs: '13px', md: '14px' },
  lineHeight: { xs: '13.729px', md: '23.741px' },
  textAlign: 'justify',
  fontWeight: 600,
  fontStyle: 'normal',
};

const imageBoxStyle = {
  borderRadius: '17.311px',
  backgroundColor: '#3B59980A',
  mt: { xs: 1, md: 2 },
  pt: 1,
  py: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export {
  outerBoxStyle,
  containerGridStyle,
  leftGridStyle,
  titleTypographyStyle,
  listItemBoxStyle,
  listItemIconStyle,
  taskAltIconStyle,
  listItemTypographyStyle,
  imageBoxStyle,
};

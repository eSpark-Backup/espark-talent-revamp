const outerBoxSx = {
  pt: { lg: '70px', md: '60px', sm: '40px', xs: '30px' },
  pb: { lg: '80px', md: '60px', sm: '40px', xs: '30px' },
};

const innerBoxSx = {
  px: { md: '12.2%', sm: '10%', xs: '2%' },
  pb: { lg: '45px', md: '25px', sm: '15px', xs: '15px' },
};

const titleTypographySx = {
  textAlign: 'center',
  flexWrap: 'wrap',
  fontWeight: 600,
  fontSize: {
    xl: '32px',
    lg: '32px',
    md: '26px',
    sm: '20px',
    xs: '20px',
  },
  mx: { xs: '5.699px', sm: '0px' },
};

const subtitleTypographySx = {
  textAlign: 'center',
  fontSize: {
    xl: '20px',
    lg: '18px',
    md: '16px',
    sm: '12px',
    xs: '12px',
  },
};

const gridItemSx = {
  borderRadius: '20px',
  px: { lg: '19px', md: '19px', sm: '18px', xs: '17px' },
  py: { lg: '35px', md: '30px', sm: '25px', xs: '15px' },
  height: {
    lg: '274.691px',
    md: '270px',
    sm: '228px',
    xs: '212px',
  },
  '@media (min-width: 300px) and (max-width: 348px)': {
    height: '238px !important',
  },
  '@media (min-width: 278px) and (max-width: 299px)': {
    height: '255px !important',
  },
  maxWidth: '409.681px',
  mx: 'auto',
  mb: { lg: '20px' },
  background: ' #FFF',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  border: '1px solid #029894',
};

const itemTitleTypographySx = {
  color: '#001C63',
  fontSize: {
    lg: '28px',
    md: '26px',
    sm: '18px',
    xs: '18px',
  },
  lineHeight: 1.3,
  fontWeight: 600,
  fontStyle: 'normal',
};

const listBoxSx = {
  display: 'flex',
  marginTop: '10px',
};

const listItemIconSx = {
  minWidth: { xs: '28px', md: '30px' },
};

const taskAltIconSx = {
  color: '#029894',
  fontSize: { xs: '15px', md: '22px' },
};

const listItemTypographySx = {
  color: '#000',
  fontSize: {
    md: '14px',
    sm: '13px',
    xs: '13px',
  },
  lineHeight: 1.3,
  fontWeight: 400,
};

export {
  outerBoxSx,
  innerBoxSx,
  titleTypographySx,
  subtitleTypographySx,
  gridItemSx,
  itemTitleTypographySx,
  listBoxSx,
  listItemIconSx,
  taskAltIconSx,
  listItemTypographySx,
};

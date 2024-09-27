const containerSx = {
  background: '#F7F8FB',
  py: '3%',
  my: '2%',
};

const headingBoxSx = {
  pb: '30px',
  px: { md: '20%', sm: '10%', xs: '2%' },
};

const headingTypographySx = {
  textAlign: 'center',
  flexWrap: 'wrap',
  fontWeight: 600,
  mb: { xs: 1, sm: 0 },
  lineHeight: { sm: '38px', md: '40px', lg: '42.289px' },
  fontSize: {
    xs: '20px',
    sm: '24px',
    md: '25px',
    lg: '32px',
  },
};

const descriptionTypographySx = {
  textAlign: 'center',
  fontSize: { xs: '14px', sm: '16px', md: '18px' },
  fontWeight: 400,
};

const gridContainerSx = {
  justifyContent: 'center',
  gap: 2,
};

const itemBoxSx = {
  py: '20px',
  display: 'flex',
  gap: '10px',
};

const itemTitleTypographySx = {
  fontSize: {
    xs: '16px',
    sm: '18px',
    md: '20px',
    lg: '25px',
  },
  fontWeight: 500,
};

const itemParagraphTypographySx = {
  color: '#000',
  fontSize: {
    xs: '14px',
    sm: '18px',
    md: '18px',
    lg: '18px',
  },
};

const buttonContainerSx = {
  pt: '40px',
  pb: { xs: '20px', md: '0', lg: '0' },
  textAlign: 'center',
};

const buttonSx = {
  backgroundColor: '#001C63',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#029894',
  },
  py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
  px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
  height: '50px',
  width: '160px',
  color: '#fff',
  fontWeight: '700',
};

export {
  containerSx,
  headingBoxSx,
  headingTypographySx,
  descriptionTypographySx,
  gridContainerSx,
  itemBoxSx,
  itemTitleTypographySx,
  itemParagraphTypographySx,
  buttonContainerSx,
  buttonSx,
};

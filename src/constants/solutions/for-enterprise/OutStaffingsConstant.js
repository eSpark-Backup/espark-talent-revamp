const containerStyle = {
  background: '#F7F8FB',
  py: '3%',
  my: '2%',
};

const headingBoxStyle = {
  pb: '30px',
  px: { md: '20%', sm: '10%', xs: '2%' },
};

const headingTypographyStyle = {
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

const descriptionTypographyStyle = {
  textAlign: 'center',
  fontSize: { xs: '14px', sm: '16px', md: '18px' },
  fontWeight: 400,
};

const gridContainerStyle = {
  justifyContent: 'center',
  gap: 2,
};

const itemBoxStyle = {
  py: '20px',
  display: 'flex',
  gap: '10px',
};

const itemTitleTypographyStyle = {
  fontSize: {
    xs: '16px',
    sm: '18px',
    md: '20px',
    lg: '25px',
  },
  fontWeight: 500,
};

const itemParagraphTypographyStyle = {
  color: '#000',
  fontSize: {
    xs: '14px',
    sm: '18px',
    md: '18px',
    lg: '18px',
  },
};

const buttonContainerStyle = {
  pt: '40px',
  pb: { xs: '20px', md: '0', lg: '0' },
  textAlign: 'center',
};

const buttonStyle = {
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
  containerStyle,
  headingBoxStyle,
  headingTypographyStyle,
  descriptionTypographyStyle,
  gridContainerStyle,
  itemBoxStyle,
  itemTitleTypographyStyle,
  itemParagraphTypographyStyle,
  buttonContainerStyle,
  buttonStyle,
};

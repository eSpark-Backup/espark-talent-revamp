const accordionStyles = (color) => ({
  mb: { xs: 1, md: 4 },
  position: 'relative',
  backgroundColor: color || '#F7F8FF',
});

const accordionSummaryStyles = {
  alignItems: 'flex-start',
};

const accordionIconStyles = (expanded, panel) => ({
  color: 'black',
  fontSize: { xs: '1.5em', md: '2em' },
  mt: expanded === panel ? 0 : 0.5,
  mb: expanded === panel ? 1.5 : 0,
});

const headingStyles = (expanded, panel) => ({
  color: '#09114A  !important',
  fontSize: {
    lg: '21.94px',
    md: '20px',
    sm: '15px',
    xs: '10.85px',
  },
  fontWeight: expanded === panel ? 600 : 400,
  lineHeight: { xs: '12.86px', md: '26px' },
});

const detailsStyles = {
  mt: { xs: '-10px', md: '0px' },
};

const descriptionStyles = {
  color: '#09114A !important ',
  fontWeight: 400,
  fontSize: {
    lg: '18px',
    md: '15px',
    sm: '10px',
    xs: '10px',
  },
  lineHeight: { xs: '15px', md: '23.69px' },
  pr: '50px',
};

const titleStyles = {
  textAlign: 'center',
  flexWrap: 'wrap',
  fontSize: { xs: '20px', md: '32px ' },
  fontWeight: 700,
  color: '#001C63',
  pb: { lg: 4, md: 2, sm: 4, xs: 3 },
};

const containerStyles = {
  pt: { xs: '0%', md: '1%' },
  pb: '5%',
};
export {
  accordionIconStyles,
  accordionSummaryStyles,
  accordionStyles,
  headingStyles,
  detailsStyles,
  descriptionStyles,
  titleStyles,
  containerStyles,
};

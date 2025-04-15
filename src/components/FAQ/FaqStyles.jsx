const boxContainerStyles = { pt: '1%', pb: '5%' };
const accordianStyles = { mb: 4, position: 'relative' };
const accordianSummaryStyles = {
  alignItems: 'flex-start',
};
const accordianDropDownIconStyles = (expanded, panel) => ({
  color: 'black',
  fontSize: { xs: '1.5em', md: '2em' },
  mt: expanded === panel ? 0 : 0.5,
  mb: expanded === panel ? 1.5 : 0,
});
const accordianDropDownIconStyles2 = (expanded, panel) => ({
  color: 'black',
  fontSize: { xs: '1.5em', md: '2em' },
  mt: expanded === panel ? 0 : 0.6,
  mb: expanded === panel ? 1.9 : 0,
});
const headingStyles = (expanded, panel) => ({
  color: '#09114A  !important',
  fontSize: {
    lg: '24px',
    md: '20px',
    sm: '15px',
    xs: '15px',
  },
  fontWight: { lg: 400, md: 400, sm: 700, xs: 700 },
  fontWeight: expanded === panel ? 600 : 400,
});
const accordionDetailsStyles = {
  color: '#09114A !important ',
  textAlign: 'justify',
  fontWeight: 400,
  fontSize: {
    lg: '18px',
    md: '15px',
    sm: '10px',
    xs: '12px',
  },
  lineHeight: '23.69px',
};
export {
  boxContainerStyles,
  accordionDetailsStyles,
  headingStyles,
  accordianStyles,
  accordianDropDownIconStyles2,
  accordianDropDownIconStyles,
  accordianSummaryStyles,
};

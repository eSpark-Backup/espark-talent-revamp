const accordionStyle = { mb: 2 };
const accordionHeadingStyle = (expanded, panel) => ({
  color: '#09114A  !important',
  fontSize: '14px',
  fontWight: { lg: 400, md: 400, sm: 700, xs: 700 },
  fontWeight: expanded === panel ? 600 : 400,
});
const accordionDetailsStyle = {
  color: '#09114A !important ',
  textAlign: 'justify',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '23.69px',
};
const boxContainerStyle = { py: '1%' };
export {
  accordionStyle,
  accordionHeadingStyle,
  accordionDetailsStyle,
  boxContainerStyle,
};

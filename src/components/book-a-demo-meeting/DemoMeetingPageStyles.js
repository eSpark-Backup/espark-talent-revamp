const teamBannerBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 4, sm: 5, md: 7, lg: 10 },
};
const letsConnectBoxStyles = { mt: { xs: -2, md: -2.5, lg: -3.5 } };
const pricingWorksContainerStyle = { position: 'relative' };
const priicingWorksBoxStyle = {
  width: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'none',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  '@media(min-width: 1300px)': {
    display: 'flex',
  },
};
const clientSaysStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 4, sm: 5, md: 7, lg: 10 },
  pb: { xs: 5, sm: 6, md: 7, lg: 10 },
};
const formBoxStyle = { position: 'relative', zIndex: 3 };
export {
  teamBannerBoxStyles,
  letsConnectBoxStyles,
  pricingWorksContainerStyle,
  priicingWorksBoxStyle,
  clientSaysStyle,
  formBoxStyle,
};

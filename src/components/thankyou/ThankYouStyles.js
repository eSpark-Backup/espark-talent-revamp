const mainBoxStyle = (data) => ({
  py: '50px',
  backgroundImage: `url(${data?.bgimage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: '#fff',
});
const innerBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};
const headingStyle = {
  fontSize: { xs: '30px', md: '35px' },
  fontWeight: '700',
  textAlign: 'center',
};
const subHeadingStyle = {
  fontSize: { xs: '24px', md: '32px' },
  fontWeight: '500',
  textAlign: 'center',
};
const subTitleStyle = {
  fontSize: { xs: '24px', md: '32px' },
  fontWeight: '500',
  textAlign: 'center',
  pb: '15px',
};
const descriptionStyle = {
  fontSize: { xs: '14px', md: '16px' },
  fontWeight: '400',
  lineHeight: 2,
  textAlign: 'center',
  px: { xs: '5%', md: '0' },
};
const stepsTitle = {
  fontSize: { xs: '24px', md: '32px' },
  fontWeight: '500',
  textAlign: 'center',
  pt: '20px',
  pb: '20px',
};
const imageBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pb: '20px',
};
const gridContainerStyle = { justifyContent: 'center' };
const stepTitle = {
  fontSize: { xs: '18px', md: '20px' },
  fontWeight: '700',
  pb: '15px',
  textAlign: 'center',
};
const itemBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  px: '10%',
};
const listIconStyle = {
  minWidth: 'unset',
  mr: { lg: '20px', md: '20px', sm: '20px' },
};
const itemTyporaphyStyle = {
  fontSize: { xs: '12px', md: '13px' },
  fontWeight: '400',
  lineHeight: 1.8,
};

export {
  mainBoxStyle,
  innerBoxStyle,
  headingStyle,
  subHeadingStyle,
  subTitleStyle,
  descriptionStyle,
  stepsTitle,
  imageBoxStyle,
  gridContainerStyle,
  stepTitle,
  itemBoxStyle,
  itemTyporaphyStyle,
  listIconStyle,
};

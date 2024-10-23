const boxStyle = {
  display: 'flex',
  flexWrap: { xs: 'wrap', md: 'noWrap' },
  justifyContent: 'center',
  alignItems: 'center',
  gap: { xs: 4, sm: 3, md: 5 },
  px: { xs: 2 },
};
const imageStyle = {
  width: { xs: '100px', sm: '120px', lg: '150px' },
  height: 'auto',
};
const containerStyle = {
  py: '2.5%',
  px: '1%',
  border: '1px solid rgba(170, 169, 169, 0.41)',
};
const paragraphTitleStyle = { px: { xs: '20%', md: '0' }, pt: '20px' };
const imageBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerBoxStyle = {
  background: '#F7F8FB',
  py: '1.5%',
  pb: { xs: '40px', sm: '70px', lg: '50px' },
  '@media (max-width:424px)': { pb: '30px' },
  '@media (min-width:425px) and (max-width:480px)': { pb: '55px' },
};

export {
  boxStyle,
  imageStyle,
  containerStyle,
  paragraphTitleStyle,
  imageBoxStyle,
  containerBoxStyle,
};

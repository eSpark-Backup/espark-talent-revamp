const cardStyle = {
  borderRadius: '10px',
  px: '30px',
  py: '20px',
  height: '100%',
  background: '#fff',
};

const gridBoxStyle = { backgroundColor: '#3b59980f' };
const gridStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
  pt: '4%',
  px: 1,
  gap: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 2,
  },
};
const skeltonStyles = { fontSize: '2rem' };
const skeltonStyle = { borderRadius: '50px' };
const skeltonBoxStyle = { fontSize: '1rem' };
const avgSalaryBoxStyle = { pb: '15px' };
const containerBoxStyle = { py: '3%' };
const boxContainerStyle = { px: { md: '3%', lg: '10%' } };
const categoryButtonStyle = {
  border: 'none',
  borderRadius: '50px',
  fontWeight: 600,
  fontSize: {
    xs: '12px',
    sm: '13px',
    md: '15px',
    lg: '20px',
  },
  px: 2.2,

  '&:hover': {
    border: 'none',
  },
};
const filteredGridStyle = { display: 'flex', justifyContent: 'left' };
const cardBoxStyle = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  pb: '15px',
};
const avgSalaryNameStyles = {
  width: '120px',
  textTransform: 'capitalize',
};
const avgSalaryToFromStyles = {
  textWrap: 'nowrap',
};
export {
  cardStyle,
  gridBoxStyle,
  gridStyle,
  skeltonStyles,
  skeltonStyle,
  skeltonBoxStyle,
  avgSalaryBoxStyle,
  containerBoxStyle,
  boxContainerStyle,
  categoryButtonStyle,
  filteredGridStyle,
  cardBoxStyle,
  avgSalaryNameStyles,
  avgSalaryToFromStyles,
};

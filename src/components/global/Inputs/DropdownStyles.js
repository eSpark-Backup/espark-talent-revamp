const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black',
    ':hover': {
      backgroundColor: '#e6e9eb',
    },
    backgroundColor: state?.isSelected ? '#029894' : 'white',
    zIndex: 9999,
  }),
  control: (provided) => ({
    ...provided,
    color: 'black',
    fontSize: '16px',
    minHeight: '51px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #cccccc',
    },
    '&:focus': {
      border: '1px solid #cccccc',
    },
    border: '1px solid #cccccc',
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: '16px',
    backgroundColor: '#F4F4F4',
  }),
};
const infoIconStyle = {
  marginLeft: '5px',
  fontSize: '13px',
  marginBottom: '12px',
};
const toolTipStyle = {
  width: '20px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
};
const labelStyle = { fontSize: { xs: '14px', md: '18px' } };
const stackBoxStyle = {
  display: 'flex',
  alignItems: 'center',
};

export { customStyles, infoIconStyle, toolTipStyle, labelStyle, stackBoxStyle };

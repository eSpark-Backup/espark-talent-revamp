const containerStyles = {
  width: '100%',
  height: '100%',
  maxWidth: '486px',
  display: 'flex',
  mx: { md: 'auto' },
  '@media(min-width: 280px) and (max-width:1259px)': {
    mx: 'auto',
  },
};
const innerContainerStyles = {
  width: '100%',
  height: { xs: 'auto', sm: '100%' },
  display: 'flex',
  flexDirection: 'column',
  px: 2,
  alignItems: { md: 'center' },
  '@media (min-width: 600px) and (max-width: 768px)': {
    px: 2,
    width: '100%',
  },
  '@media (max-width: 425px)': {
    px: 2,
    width: '100%',
  },
};
const titleStyles = {
  color: '#001C63',
  fontSize: {
    xl: '32px',
    lg: 'calc(32px*.8)',
    md: 'calc(32px*.7)',
    sm: 'calc(32px*.7)',
    xs: 'calc(32px*.7)',
  },
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 1.4,
};
const descriptionStyles = {
  color: '#001C63',
  fontSize: {
    xl: '15px',
    lg: 'calc(15px*.8)',
    md: 'calc(15px*.7)',
    sm: 'calc(15px*.6)',
    xs: 'calc(15px*.5)',
  },
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 1.6,
};
const inputStyles = {
  width: '100%',
  borderRadius: '5.418px',
  height: {
    xl: '40px',
    lg: 'calc(40px*.8)',
    md: 'calc(40px*.8)',
    sm: 'calc(40px*.7)',
    xs: 'calc(40px*.7)',
  },
  border: '0.903px solid #D0D4EA',
  background: '#F5F8FA',
  fontSize: {
    xl: '14px',
    lg: 'calc(14px*.8)',
    md: 'calc(14px*.8)',
    sm: 'calc(14px*.7)',
    xs: 'calc(14px*.7)',
  },
  pl: 1.5,
  color: 'black',
  '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '&:focus': {
    outline: 'none',
  },
};
const buttonStyles = {
  mt: 1,
  mb: 2,
  width: '126.416px',
  height: '32.913px',
  borderRadius: '3.92px',
  background: '#001C63',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#029894',
  },
};
const feildBoxStyles = { width: '100%', mb: 1.2 };
const lableTitlestyles = {
  mb: 0.5,
  color: '#029894',
  fontSize: {
    xl: '14px',
    lg: 'calc(14px*.8)',
    md: 'calc(14px*.8)',
    sm: 'calc(14px*.7)',
    xs: 'calc(14px*.7)',
  },
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: {
    xl: '19px',
    lg: 'calc(19px*.8)',
    md: 'calc(19px*.8)',
    sm: 'calc(19px*.7)',
    xs: 'calc(19px*.7)',
  },
};
const fileUploadBoxStyles = { pt: 0.8 };
export {
  containerStyles,
  innerContainerStyles,
  titleStyles,
  descriptionStyles,
  inputStyles,
  buttonStyles,
  feildBoxStyles,
  lableTitlestyles,
  fileUploadBoxStyles,
};

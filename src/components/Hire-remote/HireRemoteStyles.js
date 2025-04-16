export const cardStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  mx: { xs: 2, md: 1.5, lg: 1.5 },
  height: '100%',
  minHeight: { xs: '147px', sm: '180px', md: '243px', lg: '243px' },
  width: '100%',
  maxWidth: '400px',
  backgroundColor: '#F7F8FB',
  borderRadius: '15px',
  border: '0.9px solid rgba(0, 0, 0, 0.5)',
  '@media(min-width:1024px) and (max-width:1123px)': {
    mx: 1.4,
    maxWidth: '100%',
    minHeight: '270px',
    maxHeight: '100%',
  },
  '@media(min-width:952px) and (max-width:1023px)': {
    mx: 1,
    maxWidth: '100%',
    minHeight: '200px',
  },
  '@media(min-width:900px) and (max-width:951px)': {
    mx: 1,
    maxWidth: '100%',
    minHeight: '220px',
  },
  '@media(min-width:480px) and (max-width:768px)': {
    mx: 1,
    maxWidth: '350px',
  },
  '@media(min-width:320px) and (max-width:479px)': {
    mx: 1,
    maxWidth: '271px',
  },
  '&:hover': {
    backgroundColor: 'rgb(255, 255, 255)',
  },
};

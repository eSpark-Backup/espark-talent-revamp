export const styles = {
  container: {
    mt: '2%',
    mb: '6%',
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media(min-width: 1024px)': {
      flexDirection: 'row',
      gap: 1,
    },
  },
  contentBox: {
    width: '100%',
    '@media(min-width: 1024px)': {
      flexDirection: 'row',
      width: 'calc(100% - 505px)',
    },
  },
  title: {
    color: '#001C63',
    px: { xs: '40px', sm: 0 },
    py: '5px',
    pt: { xs: '25px', md: '35px' },
    fontSize: {
      xs: '20px !important',
      md: '32px !important',
    },
    lineHeight: { xs: '29px', md: '56.266px' },
    fontStyle: 'normal',
    fontWeight: 700,
    textAlign: { xs: 'center', md: 'left' },
  },
  description: {
    color: '#263238',
    textAlign: { xs: 'center', md: 'justify' },
    fontSize: { xs: '10px', md: '18px' },
    fontWeight: 400,
    lineHeight: { xs: '17px', md: '45.766px' },
  },
  listItem: {
    display: 'flex',
    textAlign: 'baseline',
  },
  listItemIcon: {
    minWidth: { xs: '15px', md: '22px' },
    ml: { md: '27px' },
  },
  circleIcon: {
    color: '#000',
    fontSize: { xs: '5px', md: '9px' },
    width: '10px',
    mt: { xs: '10px', md: '23px' },
    display: {
      xs: 'initial',
      sm: 'initial',
      md: 'none',
      lg: 'none',
    },
  },
  rectangleIcon: {
    color: '#000',
    fontSize: { xs: '5px', md: '9px' },
    width: '10px',
    mt: { xs: '10px', md: '23px' },
    display: {
      xs: 'none',
      sm: 'none',
      md: 'initial',
      lg: 'initial',
    },
  },
  listItemText: {
    color: '#263238',
    textAlign: 'justify',
    fontSize: { xs: '10px', md: '18px !important' },
    fontWeight: 400,
    lineHeight: { xs: '17px', md: '45.766px' },
  },
  formBox: {
    width: '100%',
    maxWidth: '505px',
    mx: 'auto',
    '@media(min-width: 1024px)': {
      width: '505px',
    },
  },
};

export const JOIN_CREW_FOOTER_DATA = {
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: { xs: 'auto', lg: '100vh' },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight: { xs: 'auto', lg: '457px' },
      backgroundColor: '#029894',
      '@media(min-width: 1024px) and (max-width: 1399px)': {
        maxHeight: '350px',
      },
      '@media(min-width: 768px) and (max-width: 1023px)': {
        maxHeight: '320px',
      },
      '@media(min-width: 460px) and (max-width: 767px)': {
        maxHeight: 'auto',
      },
      '@media(min-width: 280px) and (max-width: 459px)': {
        maxHeight: 'auto',
      },
    },
    innerBoxStyle: {
      width: '94%',
      maxWidth: '1250px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '@media(min-width: 768px) and (max-width: 1023px)': {
        width: '92%',
      },
      '@media(min-width: 460px) and (max-width: 767px)': {
        width: '92%',
      },
      '@media(min-width: 280px) and (max-width: 459px)': {
        width: '92%',
      },
    },
    contentBoxStyle: {
      width: { xs: '90%', lg: '80%' },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 1.5,
      maxWidth: { xs: '600px', lg: '80%' },
      py: { xs: 3, lg: 0 },
      '@media(min-width: 1024px) and (max-width: 1399px)': {
        maxWidth: '730px',
      },
    },
    titleStyle: {
      textAlign: 'center',
      fontSize: {
        lg: '54px',
      },
      fontWeight: 700,
      lineHeight: { lg: '73px' },
      color: '#ECECED',
      '@media(min-width: 1024px) and (max-width: 1399px)': {
        fontSize: '40px',
        lineHeight: '53px',
        maxWidth: '800px',
      },
      '@media(min-width: 768px) and (max-width: 1023px)': {
        fontSize: '32px',
        lineHeight: '40px',
      },
      '@media(min-width: 460px) and (max-width: 767px)': {
        fontSize: '19px',
        lineHeight: '30px',
        maxWidth: '500px',
      },
      '@media(min-width: 360px) and (max-width: 459px)': {
        fontSize: '15px',
        lineHeight: '25px',
      },
      '@media(min-width: 280px) and (max-width: 359px)': {
        fontSize: '16px',
        lineHeight: '25px',
      },
    },
    descriptionStyle: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: 'auto',
      color: '#ECECED',
      '@media(min-width: 1024px) and (max-width: 1399px)': {
        fontSize: '20px',
      },
      '@media(min-width: 768px) and (max-width: 1023px)': {
        fontSize: '18px',
      },
      '@media(min-width: 460px) and (max-width: 767px)': {
        fontSize: '14px',
        maxWidth: '500px',
      },
      '@media(min-width: 360px) and (max-width: 459px)': {
        fontSize: '11px',
      },
      '@media(min-width: 280px) and (max-width: 359px)': {
        fontSize: '12px',
        maxWidth: '280px',
        mx: 'auto',
      },
    },
    buttonStyle: {
      mt: 1,
      border: '1px solid #fff',
      borderRadius: '10px',
      width: { xs: '130px', sm: '140px', md: '160px', lg: '180px' },
      height: { xs: '34px', sm: '34px', md: '44px', lg: '54px' },
      fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' },
      fontWeight: 600,
      backgroundColor: 'transparent',
      color: '#fff',
      ':hover': {
        backgroundColor: 'transparent',
        color: '#fff',
      },
    },
  },
};

export const FOOTER_CTA_DATA = {
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: { xs: 'auto', lg: '100vh' },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight: { xs: 'auto', lg: '457px' },
      backgroundColor: '#029894',
      mt: { lg: 10 },
      '@media(min-width: 1024px) and (max-width: 1399px)': {
        mt: 6,
        maxHeight: '350px',
      },
      '@media(min-width: 768px) and (max-width: 1023px)': {
        mt: 2,
        maxHeight: '320px',
      },
      '@media(min-width: 460px) and (max-width: 767px)': {
        mt: 2,
        maxHeight: 'auto',
      },
      '@media(min-width: 360px) and (max-width: 459px)': {
        maxHeight: '200px',
        mt: 2,
      },
      '@media(min-width: 280px) and (max-width: 359px)': {
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
      width: { lg: 'calc(100% - 400px)' },
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
      '@media(min-width: 1024px) and (max-width: 1399px)': {
        width: 'calc(100% - 300px)',
      },
      '@media(min-width: 768px) and (max-width: 1023px)': {
        width: 'calc(100% - 220px)',
      },
      '@media(min-width: 460px) and (max-width: 767px)': {
        width: 'calc(100% - 210px)',
        py: 0,
        gap: 1,
      },
      '@media(min-width: 360px) and (max-width: 459px)': {
        width: 'calc(100% - 176px)',
        py: 0,
        gap: 1,
      },
      '@media(min-width: 280px) and (max-width: 359px)': {
        width: 'calc(100%)',
        py: 2,
        gap: 1,
      },
    },
    titleStyle: {
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
        maxWidth: '380px',
      },
      '@media(min-width: 360px) and (max-width: 459px)': {
        fontSize: '15px',
        lineHeight: '25px',
      },
      '@media(min-width: 280px) and (max-width: 359px)': {
        fontSize: '16px',
        lineHeight: '25px',
        textAlign: 'center',
      },
    },
    descriptionStyle: {
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
        maxWidth: '380px',
      },
      '@media(min-width: 360px) and (max-width: 459px)': {
        fontSize: '11px',
      },
      '@media(min-width: 280px) and (max-width: 359px)': {
        fontSize: '12px',
        textAlign: 'center',
        maxWidth: '280px',
        mx: 'auto',
      },
    },
    buttonStyle: {
      mt: 1.8,
      width: '225px',
      height: '58px',
      fontSize: '16px',
      fontWeight: 700,
      backgroundColor: '#FFFFFF',
      color: '#09114A',
      ':hover': {
        backgroundColor: '#FFFFFF',
        color: '#09114A',
      },
      '@media(min-width: 1024px) and (max-width: 1399px)': {
        width: '180px',
        height: '54px',
        fontSize: '14px',
      },
      '@media(min-width: 768px) and (max-width: 1023px)': {
        width: '160px',
        height: '44px',
        fontSize: '13px',
      },
      '@media(min-width: 460px) and (max-width: 767px)': {
        width: '110px',
        height: '25px',
        fontSize: '9px',
        mt: 1,
      },
      '@media(min-width: 360px) and (max-width: 459px)': {
        width: '100px',
        height: '25px',
        fontSize: '9px',
        mt: 1,
      },
      '@media(min-width: 280px) and (max-width: 359px)': {
        width: '100px',
        height: '25px',
        fontSize: '9px',
        mt: 1,
        mx: 'auto',
      },
    },
    imageBoxStyle: {
      position: 'relative',
      width: 'auto',
      height: 'auto',
      '@media(min-width: 1400px)': {
        width: '400px',
        mt: -10.3,
        height: '539px',
      },
      '@media(min-width: 1024px) and (max-width: 1399px)': {
        width: '300px',
        mt: -6.9,
        height: '439px',
      },
      '@media(min-width: 768px) and (max-width: 1023px)': {
        width: '270px',
        mt: -2.5,
        height: '370px',
      },
      '@media(min-width: 460px) and (max-width: 767px)': {
        width: '210px',
        mt: -1.5,
        height: '282px',
      },
      '@media(min-width: 360px) and (max-width: 459px)': {
        width: '176px',
        mt: -1.7,
        height: '213px',
      },
      '@media(min-width: 280px) and (max-width: 359px)': {
        display: 'none',
      },
    },
    imageStyle: { objectFit: 'contain' },
  },
};
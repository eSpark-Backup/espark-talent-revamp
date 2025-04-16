export const FOOTER_STYLE = {
  mainBoxStyle: { width: '100%', height: '100%', backgroundColor: '#ECECED' },
  innerBoxStyle: {
    width: '100%',
    height: '100%',
    mx: 'auto',
    maxWidth: { lg: '1300px', xl: '1400px' },
    maxHeight: { xs: '100%', lg: '380px' },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: { xs: 'space-between', md: 'center' },
    px: { xs: 1, md: 2.5 },
    py: { xs: 2.5, lg: 3.5 },
    flexWrap: 'nowrap',
    '@media(min-width:768px) and (max-width: 1399px)': {
      maxWidth: '1350px',
      justifyContent: 'start',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'start',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      flexDirection: 'column',
      alignItems: 'start',
    },
  },
  logoSectionBoxStyle: {
    width: {
      xs: '100%',
      lg: `calc(100% - 800px)`,
      '@media(min-width:1024px) and (max-width: 1399px)': {
        width: 'calc(100% - 700px)',
      },
      '@media(min-width:768px) and (max-width: 1023px)': {
        width: 'calc(100% - 530px)',
      },
    },
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    p: { xs: 0, md: 1 },
  },
  imageBoxStyle: {
    position: 'relative',
    width: { lg: '174px' },
    height: { lg: '85px' },
    '@media(min-width:768px) and (max-width: 1399px)': {
      width: '154px',
      height: '65px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      width: '134px',
      height: '45px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      width: '100px',
      height: '45px',
    },
  },
  imageStyle: { objectFit: 'contain' },
  descriptionStyle: {
    fontSize: { xs: '8px', sm: '10px', md: '13px', lg: '15px' },
    fontWeight: 400,
    lineHeight: { xs: '24px' },
    color: '#001C63',
    pl: { md: 1.6, lg: 0 },
    pr: { md: 3, lg: 3 },
    '@media(min-width:768px) and (max-width: 1023px)': {
      pl: 1.6,
      pr: 3,
      fontSize: '13px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      pl: 2,
      pr: 2,
      fontSize: '13px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      pl: 1,
      pr: 1,
      fontSize: '11px',
    },
  },
  socialMediaIconBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    gap: 2.5,
    ml: { xs: 1.5, sm: 2, md: 1 },
    my: 1.5,
  },
  socialLinkBoxStyle: {
    position: 'relative',
    width: { lg: '18px' },
    height: { lg: '18px' },
    '@media(min-width:768px) and (max-width: 1399px)': {
      width: '16px',
      height: '16px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      width: '16px',
      height: '16px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      width: '15px',
      height: '15px',
    },
  },
  iconStyle: { objectFit: 'contain' },
  pagesBoxStyle: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  pageBoxStyle: (index) => ({
    width: { lg: index === 2 ? '300px' : '250px' },
    '@media(min-width:1024px) and (max-width: 1399px)': {
      width: index === 2 ? '340px' : '180px',
    },
    '@media(min-width:768px) and (max-width: 1023px)': {
      width: '170px',
    },
    '@media(min-width:530px) and (max-width: 767px)': {
      width: index === 2 ? '40%' : '30%',
      px: 2,
    },
    '@media(min-width:425px) and (max-width: 529px)': {
      width: index === 2 ? 'auto' : '50%',
      px: 2,
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      width: index === 2 ? 'auto' : '50%',
      px: 1,
    },
  }),
  labelAndUlBoxStyle: (mpIndex) => ({
    mt: mpIndex === 0 ? 0 : 2,
    '@media(max-width: 767px)': {
      my: 1,
    },
  }),
  lebelStyle: {
    fontSize: { md: '18px', lg: '24px' },
    fontWeight: 600,
    color: '#001C63',
    '@media(min-width:768px) and (max-width: 1023px)': {
      fontSize: '18px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      fontSize: '16px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '14px',
    },
  },
  ulStyle: { pl: 0, listStyle: 'none', pt: 1 },
  textIconAndValueBoxStyle: {
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    gap: 1.5,
  },
  iconBoxStyle: (_textIndex) => ({
    position: 'relative',
    width: { lg: '25px' },
    height: { lg: '23px' },
    mt: _textIndex === 0 ? 0 : 1,
    '@media(min-width:768px) and (max-width: 1399px)': {
      width: '25px',
      height: '22px',
      pr: 1,
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      width: '25px',
      height: '22px',
      pr: 1,
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      width: '20px',
      height: '20px',
      pr: 1,
    },
  }),
  pageLinkIconStyle: { objectFit: 'contain' },
  valueStyle: (_textIndex) => ({
    width: _textIndex === 5 ? 'auto' : 'calc(100% - 25px)',
    fontSize: { md: '13px', lg: '15px' },
    fontWeight: 400,
    color: '#000000',
    mt: _textIndex === 0 ? 0 : 1,
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    '@media(min-width:768px) and (max-width: 1023px)': {
      fontSize: '13px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      fontSize: '12px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  }),
  trustPilotImageBoxStyle: {
    position: 'relative',
    width: { lg: '200px' },
    height: { lg: '55px' },
    mt: 1,
    '@media(min-width:768px) and (max-width: 1399px)': {
      width: '170px',
      height: '55px',
      pr: 2.5,
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      width: '150px',
      height: '45px',
      pr: 2.5,
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      width: '120px',
      height: '35px',
      pr: 2.5,
    },
  },
  trustPilotImageStyle: { objectFit: 'contain' },
  pageNameStyle: (_pIndex) => ({
    fontSize: { md: '13px', lg: '15px' },
    fontWeight: 400,
    color: '#001C63',
    mt: _pIndex === 0 ? 0 : 1,
    '@media(min-width:768px) and (max-width: 1023px)': {
      fontSize: '13px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      fontSize: '12px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  }),
  horizontalLineStyle: {
    mx: 'auto',
    width: '90%',
    height: '2px',
    backgroundColor: '#001C63',
    opacity: 0.17,
  },
  copyRightBoxStyle: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyRightTextStyle: {
    fontSize: {
      lg: '15px',
    },
    fontWeight: 400,
    color: '#0E0F1D',
    py: 2.3,
    textAlign: 'center',
    '@media(min-width:768px) and (max-width: 1399px)': {
      fontSize: '13px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      fontSize: '10px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '8px',
    },
  },
  termsAndConditionBoxStyle: (linkIndex) => ({
    ml: {
      xs: linkIndex === 0 ? 1.5 : 0.5,
      sm: linkIndex === 0 ? 4 : 3,
    },
  }),
  termsAndConditionLinkStyle: { color: '#001C63' },
  termsAndConditionTextStyle: {
    color: '#001C63',
    fontSize: { lg: '15px' },
    fontWeight: 400,
    '@media(min-width:768px) and (max-width: 1399px)': {
      fontSize: '13px',
    },
    '@media(min-width:425px) and (max-width: 767px)': {
      fontSize: '10px',
    },
    '@media(min-width:0px) and (max-width: 424px)': {
      fontSize: '8px',
    },
  },
};

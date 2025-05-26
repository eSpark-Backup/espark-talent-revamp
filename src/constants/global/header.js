export const HIRE_A_TALENT = 'Services';
export const BOOK_A_DEMO = 'Book a Demo';
export const Request_Candidate = 'Schedule a Call';
export const HIRE_A_TALENT_LINK = '/book-a-demo';
export const EXCLUDED_PATHS = [
  '/book-a-demo',
  '/demo',
  '/thankyou',
  '/book-a-meeting',
  '/hire-a-frontend-developer',
  '/hire-remote-developers',
  '/book-a-demo-meeting',
];
export const NAVBAR_STYLE = {
  popperStyle: (dropdownName) => ({
    zIndex: 1002,
    mx: 'auto',
    width: dropdownName === 'Services' ? '100%' : 'auto',
  }),
  growStyle: (dropdownName) => ({
    background: !dropdownName
      ? 'transparent'
      : dropdownName === 'Services'
        ? '#F7F8FB'
        : '#fff',
    borderRadius: '11px',
    boxShadow: '0px 0px 4px 0px #00000040',
    maxWidth: dropdownName === 'Services' ? '99%' : 'auto',
    minHeight: 'auto',
    mx: 'auto',
  }),
  growBoxStyle: (dropdownName) => ({
    width: 'auto',
    p: dropdownName === 'Services' ? 1 : 0,
    mt: 1.5,
  }),
  navbarItemStyle: {
    itemBoxStyle: (index, lastIndex, collapseStatus) => ({
      mx: { xs: 2, md: 1.5, lg: 2 },
      height: '95px',
      cursor: 'pointer',
      userSelect: 'none',
      gap: 0.7,
      '@media(max-width: 1023px)': {
        py: 1,
        height: 'auto',
        justifyContent: 'space-between',
        borderTop: 1,
        borderBottom: index === lastIndex && !collapseStatus ? 1 : 0,
        borderColor: '#e6e6e6',
      },
    }),
    typographyStyle: {
      height: '100%',
      fontSize: { xs: '15px', md: '16px', lg: '17px', xl: '18px' },
      color: '#222222',
      fontWeight: 400,
      ml: 0,
      mr: 0.25,
      '@media(min-width: 1024px) and (max-width:1249px)': {
        fontSize: '13px',
      },
      '@media(min-width: 1250px) and (max-width:1399px)': {
        fontSize: '16px',
      },
    },
    imageStyle: (dropdownName, name) => ({
      transform: dropdownName === name ? 'rotate(182deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease-in-out',
    }),
  },
  dropdownItemsStyle: {
    mainBoxStyle: {
      maxWidth: { xs: '300px', lg: '340px' },
      display: 'flex',
      alignItems: 'start',
      gap: 2.5,
      pt: 2.5,
      px: 2.5,
      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
    },
    iconBoxStyle: { width: { xs: '30px' }, pt: 0.5 },
    iconStyle: { width: '100%', height: '100%' },
    contentBoxStyle: (lastIndex, index) => ({
      width: '80%',
      borderBottom: lastIndex === index ? 0 : '1px solid #0000001A',
      pb: 2.5,
    }),
    nameStyle: {
      color: '#222222',
      fontSize: { xs: '11px', sm: '12px', md: '13px', lg: '17px' },
      fontWeight: 600,
    },
    descriptionStyle: {
      transition: 'all 300ms linear',
      color: 'rgb(0, 0, 0)',
      fontSize: { xs: '10px', lg: '12px' },
      fontWeight: 400,
    },
  },
  hireLinkStyle: {
    mainBoxStyle: (currentPage) => ({
      my: currentPage?.includes('hire-remote-deevelopers') ? 4 : 3.7,
      width: '100%',
      background: '#F7F8FB',
      '@media (max-width: 987px)': {
        background: '#fff',
        my: 0,
      },
    }),
    innerBoxStyle: {
      width: '100%',
      borderRadius: '6px',
      background: '#F7F8FB',
      mx: 'auto',
      '@media (min-width:1500px)': {
        maxWidth: '1450px',
      },
      '@media (max-width: 987px)': {
        background: '#fff',
      },
    },
    parentBoxStyle: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    sectionBoxStyle: (index) => ({
      maxWidth: index === 0 ? '220px' : '260px',
      mx: { xs: 0, md: 'auto' },
      p: 2,
      pl: 5,
      pr: 3.5,
      '@media (min-width: 1440px)': {
        maxWidth: index === 0 ? '300px' : '330px',
      },
      '@media (min-width:1060px) and (max-width: 1439px)': {
        maxWidth: index === 0 ? '300px' : '330px',
      },
      '@media (max-width: 987px)': {
        p: 0,
      },
    }),
    headingStyle: {
      pb: '4px',
      fontWeight: 700,
      textWrap: { xs: 'wrap', lg: 'nowrap' },
      fontSize: {
        xs: '16px',
        sm: '15px',
        md: '16px',
        lg: '16px',
        xl: '23px',
      },
    },
    linkBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      my: 1.5,
    },
    titleStyle: {
      py: '0px',
      color: 'black',
      '&:hover': {
        color: '#029894',
      },
      fontSize: {
        xs: '14px',
        sm: '15px',
        md: '15px',
        lg: '16px',
      },
      fontWeight: 400,
    },
  },
  globalLayoutStyle: {
    mainBoxStyle: (relative, sticky) => ({
      display: 'flex',
      alignItems: 'center',
      px: { xs: 2, sm: 2, md: 2.5, lg: 2 },
      position: relative ? 'relative' : sticky ? 'sticky' : 'static',
      top: sticky ? 0 : 'unset',
      zIndex: sticky ? 1100 : 'unset',
      height: '76px',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid black',
      boxShadow: '0px 4px 22px 0px #00000016',
      '@media(min-width:1250px)': {
        height: '95px',
      },
      '@media(min-width:1024px) and (max-width:1249px)': {
        height: '88px',
      },
      '@media(max-width:1023px)': {
        height: '76px',
      },
    }),
    innerBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      mx: 'auto',
      justifyContent: 'space-between',
      maxWidth: { md: '96%', lg: '1260px', xl: '1380px' },
      width: '100%',
    },
    navbarItemBoxStyle: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      mr: 11,
      '@media(min-width: 1024px) and (max-width: 1399px)': {
        mr: 7,
      },
    },
    linkBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      cursor: 'pointer',
      width: { xs: '70px', md: '90px' },
      '@media(min-width:1024px)': {
        width: { md: '110px', lg: '115px', xl: '128px' },
      },
    },
    linkStyle: {
      display: 'flex',
      alignItems: 'center',
    },
    ulStyle: {
      height: '100%',
      display: 'none',
      '@media(min-width: 1024px)': {
        display: 'flex',
        ml: 'auto',
        listStyle: 'none',
        alignItems: 'center',
        m: 0,
        p: 0,
      },
    },
    buttonStyle: {
      width: '238px',
      height: '44px',
      background: '#029894',
      justifyContent: 'space-between',
      color: '#fff',
      pl: 3,
      pr: 1.5,
      fontSize: '17px',
      borderRadius: '36px',
      '&:hover': {
        backgroundColor: '#029894',
        background: '#029894',
        color: '#fff',
      },
      '@media(min-width:1024px) and (max-width:1249px)': {
        fontSize: '12px',
        width: '190px',
      },
      display: 'none',
      '@media(min-width:1024px)': {
        display: 'flex',
      },
    },
    endIconStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 0.5,
      backgroundColor: '#175A59',
      borderRadius: '100%',
      '@media(min-width:1024px) and (max-width:1249px)': {
        width: '30px',
        height: '30px',
      },
    },
    buttonBoxStyle: {
      display: 'none',
      '@media(min-width: 1024px)': {
        display: 'inline-block',
      },
    },
    navBarIconButtonBoxStyle: {
      display: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '@media(max-width: 1023px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    iconButtonStyle: {
      display: 'none',
      '@media(max-width: 1023px)': {
        display: 'flex',
        width: '30px',
        height: '30px',
        p: 0,
      },
      '&:hover': { backgroundColor: 'transparent' },
    },
    closeIconStyle: { '&:hover': { backgroundColor: 'transparent' } },
    menuIconStyle: { width: '30px', height: '30px', color: '#001C63' },
  },

  remoteLayoutStyle: {
    mainBoxStyle: {
      px: { xs: 2, sm: 2, md: 3, lg: 2 },
      height: '76px',
      '@media(min-width:1250px)': {
        height: '95px',
      },
      '@media(min-width:1024px) and (max-width:1249px)': {
        height: '88px',
      },
      '@media(max-width:1023px)': {
        height: '76px',
      },
    },
    innerBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      mx: 'auto',
      justifyContent: 'space-between',
      maxWidth: { md: '900px', lg: '1150px' },
      width: '100%',
    },
    logoAndItemBoxStyle: { display: 'flex', alignItems: 'center', gap: 7 },
    linkBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      width: { xs: '80px', md: '100px', lg: '115px', xl: '128px' },
      height: 'auto',
      cursor: 'pointer',
    },
    linkStyle: {
      display: 'flex',
      alignItems: 'center',
    },
    ulStyle: {
      height: '100%',
      display: 'none',
      '@media(min-width: 1024px)': {
        display: 'flex',
        ml: 'auto',
        listStyle: 'none',
        alignItems: 'center',
        m: 0,
        p: 0,
      },
    },
    buttonStyle: {
      display: 'none',
      '@media(min-width: 988px)': {
        display: 'block',
      },
      width: { xs: '150px', md: '180px', lg: '223px' },
      height: { xs: '44px', md: '46px', lg: '48px' },
      backgroundColor: '#101828',
      borderRadius: '100px',
      color: '#fff',
      fontSize: '20px',
      '&:hover': {
        backgroundColor: '#1c4e72',
        color: '#fff',
      },
    },
    buttonBoxStyle: {
      mr: 10,
      display: 'none',
      '@media(min-width: 1024px)': {
        display: 'inline-block',
      },
    },
    navBarIconButtonBoxStyle: {
      display: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '@media(max-width: 1023px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    iconButtonStyle: {
      display: 'none',
      '@media(max-width: 1023px)': {
        display: 'flex',
        width: '30px',
        height: '30px',
        p: 0,
      },
      '&:hover': { backgroundColor: 'transparent' },
    },
    closeIconStyle: { '&:hover': { backgroundColor: 'transparent' } },
    menuIconStyle: { width: '30px', height: '30px', color: '#001C63' },
  },
  mobileNavbarStyle: {
    mainBoxStyle: {
      height: 'auto',
      maxHeight: '13rem',
      overflowY: 'scroll',
      px: 2,
      pb: 1,
      mb: 2,
    },
    nameStyle: { fontSize: '16px', fontWeight: 700 },
    linkStyle: {
      display: 'block',
      fontSize: '14px',
      color: 'black',
      '&:hover': {
        color: '#029894',
      },
    },
    nameAndDescriptionBoxStyle: {
      display: 'flex',
      alignItems: 'start',
      gap: 2.5,
      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
      py: 1,
      pl: 1,
    },
    iconBoxStyle: { width: { xs: '30px' }, pt: 0.5 },
    iconStyle: { width: '100%', height: '100%' },
    nameLinkStlyle: { width: 'auto', backgroundColor: 'yellow' },
    collapseNameStyle: {
      color: '#222222',
      fontSize: { xs: '15px', md: '15px' },
      fontWeight: 600,
    },
    collapseDescriptionStyle: {
      transition: 'all 300ms linear',
      color: 'rgb(0, 0, 0)',
      fontSize: { xs: '12px', md: '13px' },
      fontWeight: 400,
    },
    menuStyle: {
      mt: '25px',
      width: '100%',
      boxShadow: '0px',
      zIndex: 1100,
    },
    menuPaperPropStyle: {
      width: '100%',
      boxShadow:
        '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
      borderTopLeftRadius: 0,
      borderTop: `1px solid #cfcfd0`,
      borderTopRightRadius: 0,
      py: { xs: 1.5, sm: 3 },
      px: { xs: 3, sm: 3 },
    },
    collapseStyle: {
      width: '100%',
      mx: 'auto',
    },
  },
};

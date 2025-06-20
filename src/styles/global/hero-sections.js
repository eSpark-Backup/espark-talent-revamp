export const HERO_SECTIO_STYLE = {
  mainBoxStyle: (data) => ({
    py: data?.spacing,
    pt: data?.pt,
    pb: data?.pb,
    background: data?.bgColor,
    backgroundImage: `url(${data?.bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
  linkBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainerStyle: (data) => ({
    alignItems: 'center',
    flexDirection: { xs: 'column', sm: 'row' },
    pt: data?.pt2 || '50px',
    pb: data?.pb2 || '30px',
  }),
  gridItemStyle: (isBlogOrStartup) => ({
    display: 'flex',
    flexDirection: 'column',
    mt: isBlogOrStartup ? { xs: 3.5, sm: 0.5, md: 0 } : 0,
    mb: isBlogOrStartup ? { xs: 0.5, sm: 0.5, md: 2 } : 0,
  }),
  titleStyle: (data) => ({
    lineHeight: 1.4,
    color: data?.titleColor,
    fontSize: { xs: '22px', sm: '25px', md: '35px', lg: '45px' },
    textAlign: { xs: 'center', sm: 'left' },
    fontWeight: 700,
  }),
  descStyle: (data, isHome) => ({
    pr: isHome ? { lg: '80px' } : undefined,
    color: data?.descColor,
    lineHeight: 1.65,
    fontWeight: 500,
    fontSize: { xs: '12px', sm: '12px', md: '16px', lg: '18px' },
    textAlign: { xs: 'center', sm: 'left' },
  }),
  buttonBoxStyle: {
    mx: { xs: 'auto', sm: 'unset' },
    py: { xs: '14px', sm: '14px', md: '16px', lg: '18px' },
  },
  buttonStyle: (isHome, isDemo, isEnterprise) => ({
    backgroundColor: isHome || isDemo ? '#001C63' : '#fff',
    '&:hover': {
      color: isEnterprise ? '#fff' : '#fff',
      backgroundColor: `${isEnterprise ? '#001C63' : '#029894'}`,
    },
    py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
    px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
    height: { xs: '40px', md: '45px', lg: '50px' },
    width: { xs: '130px', md: '140px', lg: '160px' },
    color: isHome || isDemo ? '#fff' : '#001C63',
    fontWeight: '700',
  }),
  elseButtonStyle: (isCrew, isHome, isDemo, isEnterprise) => ({
    border: isCrew ? '1px solid #fff' : '1px solid transparent',
    backgroundColor:
      isHome || isDemo ? '#001C63' : isCrew ? 'transparent' : '#fff',
    '&:hover': {
      color: isEnterprise ? '#fff' : isCrew ? '#029894' : '#fff',
      backgroundColor: `${isEnterprise ? '#001C63' : isCrew ? '#ffffff' : '#029894'}`,
    },
    py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
    px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
    height: '50px',
    width: '160px',
    color: isHome || isDemo || isCrew ? '#fff' : '#001C63',
    fontWeight: '700',
  }),
  imgageGridItemStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
  },
  imageStyle: {
    width: { xs: '220px', md: '380px', lg: '450px' },
    height: 'auto',
  },
};

export const buttonsStyleForPerksComponent = (index, ind) => {
  return {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '118px',
    justifyContent: 'space-between',
    gap: 1.5,
    background:
      index == ind
        ? 'linear-gradient(93deg, #029894 0.62%, #001C63 101.53%), #FFF'
        : '#fff',
    boxShadow:
      index == ind ? '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)' : 'none',
    borderRadius: '20.59px',
    transitionProperty: 'background',
    transitionDelay: '1m',
    transitionDuration: '1s',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow:
        index == ind ? '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)' : 'none',
    },
    '@media(min-width:1024px)': {
      justifyContent: 'space-between',
    },
  };
};

export const buttonTextStyleForPerksComponent = (index, ind) => {
  return {
    width: '100%',
    maxWidth: { xs: '135px', sm: '180px', md: '350px' },
    fontSize: {
      xs: '15px',
      sm: '18px',
      md: '20px',
      lg: '24px',
    },
    fontWeight: 500,
    lineHeight: {
      xs: '21.27px',
      sm: '25px',
      md: '29px',
      lg: '33.73px',
    },
    color: index == ind ? '#fff' : '#001C63',
    textAlign: 'left',
    pr: 0,
    textWrap: 'wrap',
    '@media(min-width: 1024px)': {
      textAlign: 'left',
      maxWidth: '240px',
    },
    '@media(min-width: 280px) and (max-Width:359px)': {
      maxWidth: '80px',
      py: 0.5,
      fontSize: '12px',
    },
  };
};

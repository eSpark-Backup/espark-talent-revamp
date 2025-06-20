export const THANKYOUDATA = {
  styles: {
    mainBoxStyle: (data) => ({
      py: '50px',
      backgroundImage: `url(${data?.bgimage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: '#fff',
    }),
    innerBoxStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    headingStyle: {
      fontSize: { xs: '30px', md: '35px' },
      fontWeight: '700',
      textAlign: 'center',
    },
    subHeadingStyle: {
      fontSize: { xs: '24px', md: '32px' },
      fontWeight: '500',
      textAlign: 'center',
    },
    subTitleStyle: {
      fontSize: { xs: '24px', md: '32px' },
      fontWeight: '500',
      textAlign: 'center',
      pb: '15px',
    },
    descriptionStyle: {
      fontSize: { xs: '14px', md: '16px' },
      fontWeight: '400',
      lineHeight: 2,
      textAlign: 'center',
      px: { xs: '5%', md: '0' },
    },
    stepsTitle: {
      fontSize: { xs: '24px', md: '32px' },
      fontWeight: '500',
      textAlign: 'center',
      pt: '20px',
      pb: '20px',
    },
    imageBoxStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pb: '20px',
    },
    gridContainerStyle: { justifyContent: 'center' },
    stepTitle: {
      fontSize: { xs: '18px', md: '20px' },
      fontWeight: '700',
      pb: '15px',
      textAlign: 'center',
    },
    itemBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      px: '10%',
    },
    listIconStyle: {
      minWidth: 'unset',
      mr: { lg: '20px', md: '20px', sm: '20px' },
    },
    itemTyporaphyStyle: {
      fontSize: { xs: '12px', md: '13px' },
      fontWeight: '400',
      lineHeight: 1.8,
    },
  },
};

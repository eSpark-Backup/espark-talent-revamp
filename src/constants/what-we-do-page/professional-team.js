export const TEAM_CARD_DATA = {
  heading:
    'Our Team With Years of Professional Assistance is Waiting for You to Connect!',
  arrowIcon: '/images/whatwedo/why-choose-our-hr/arrow.svg',
  arrowIconLeft: '/images/whatwedo/why-choose-our-hr/Prev.png',
  disabledArrowIconRight: '/images/whatwedo/why-choose-our-hr/disableNext.png',
  disabledArrowIconLeft: '/images/whatwedo/why-choose-our-hr/disablePrev.png',
  arrowIconRight: '/images/whatwedo/why-choose-our-hr/Next.png',
  arrowIconCircle: '/images/whatwedo/why-choose-our-hr/Circle.png',
  alt: 'arrow',
  cardData: [
    {
      icon: '/images/whatwedo/professional-team/book1.svg',
      alt: 'Observant Recruiters',
      title: 'Observant Recruiters',
      paragraph:
        'Our HRM never misses any accomplished professional and picks candidates with sharp eagle-eye instincts.',
    },
    {
      icon: '/images/whatwedo/professional-team/team.svg',
      alt: 'Clever Hiring Team',
      title: 'Clever Hiring Team',
      paragraph:
        'The hiring process goes through a professional recruitment cycle, as we select employees with sharp hunches.',
    },
    {
      icon: '/images/whatwedo/professional-team/managment.svg',
      alt: 'Dynamic Management Trainers',
      title: 'Dynamic Management Trainers',
      paragraph:
        'We find, select, and train our top-picked professionals so that you can get your intended talent without any hurdles.',
    },
  ],
};

// Professional-team styles

export const containerStyle = {
  width: '100%',
  maxWidth: 1200,
  margin: 'auto',
  padding: '8px 0',
  position: 'relative',
};

export const headingStyle = {
  width: '100%',
  mx: 'auto',
  maxWidth: { xs: '80%', sm: '70%', md: '65%', lg: '70%' },
  display: 'flex',
  justifyContent: 'center',
  pb: { xs: 2, sm: 3, md: 4, lg: 5 },
};

export const headingTextStyle = {
  color: '#001C63',
  textAlign: 'center',
  fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '32px' },
  fontWeight: 700,
  lineHeight: { xs: '30px', md: '48px' },
};

export const slideStyle = {
  paddingTop: '20px',
  paddingBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  backgroundColor: '#fff',
};

export const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: { xs: '90%', sm: '90%', md: '97%' },
  height: '100%',
  maxWidth: { xs: '520px', md: '95%', lg: '97%' },
  minHeight: { md: '166px', lg: '100%' },
  maxHeight: '100%',
  boxShadow:
    '0px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '13.858px',
  '@media(min-width:769px) and (max-width:837px)': {
    minHeight: '189px',
  },
  '@media(min-width:481px) and (max-width:768px)': {
    minHeight: '135px',
  },
  '@media(min-width:383px) and (max-width:480px)': {
    minHeight: '145px',
  },
  '@media(min-width:320px) and (max-width:382px)': {
    minHeight: '155px',
  },
  '@media(min-width:280px) and (max-width:319px)': {
    minHeight: '190px',
  },
};

export const headerStyle = {
  px: 2.5,
  pt: { xs: 0, md: 3 },
  pb: 0,
  gap: { xs: 0.5, sm: 1 },
};

export const avatarStyle = {
  display: 'flex',
  width: { xs: '30px', md: '40px', lg: '50px' },
  height: { xs: 'auto', sm: '35px', lg: '40px' },
};

export const titleStyle = {
  mb: 1,
  color: '#09114A',
  fontSize: { xs: '15.32px', sm: '18.32px', md: '18.32px', lg: '20.32px' },
  fontWeight: 600,
  lineHeight: { xs: 'auto', md: '24.39px' },
};

export const contentStyle = {
  pt: 0,
  pl: { xs: 8.8, sm: 9.4, md: 10.6, lg: 11.8 },
  pr: 4,
  pb: { xs: '0 !important', md: '24px !important' },
};

export const paragraphStyle = {
  color: '#6F76A8',
  fontSize: { xs: '12px', md: '14px', sm: '14px', lg: '18px' },
  fontWeight: { xs: 700, sm: 400 },
  lineHeight: { xs: 'auto', lg: '30px' },
};

export const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 1,
  mt: 1,
  pb: { xs: 1, sm: 3, md: 5, lg: 7 },
};

// ******************************

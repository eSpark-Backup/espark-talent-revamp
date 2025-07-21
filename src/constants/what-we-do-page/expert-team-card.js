export const EXPERT_TEAM_CARD = {
  heading:
    'It’s Our Job to Help You Build an Unbreakable Team of Professionals!',
  card: [
    {
      icon: '/images/whatwedo/prolific.png',
      alt: 'team',
      title: 'Furnish Prolific Professionals',
      paragraph:
        'Recruitment made easy lean on our skilled and creative professionals for seamless support, with innovative solutions',
    },
    {
      icon: '/images/whatwedo/creative.png',
      alt: 'team',
      title: 'Train Creative Talent',
      paragraph:
        'We know what you are aiming for. We train the younger talent to be the best of themselves and offer their earned expertise.',
    },
    {
      icon: '/images/whatwedo/onboard.png',
      alt: 'team',
      title: 'Easy Onboard Process',
      paragraph:
        'You will just need to reach out to us, and we will take it from there. Our services are just one click away from offering you.',
    },
  ],
};

export const containerStyle = {
  width: '100%',
  maxWidth: 1200,
  margin: 'auto',
  padding: '8px 0',
  position: 'relative',
  pb: { xs: 6, sm: 8, md: 11, lg: 12 },
};

export const headingStyle = {
  width: '100%',
  mx: 'auto',
  maxWidth: { xs: '75%', sm: '70%', md: '60%', lg: '65%' },
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
  mx: { xs: 2, md: 1.5, lg: 1.2 },
  height: '100%',
  minHeight: { md: '250px', lg: '317px' },
  maxHeight: '317px',
  borderRadius: '11px',
  backgroundColor: '#fff',
  width: '100%',
  maxWidth: '382px',
  boxShadow: '0px 0px 5px 2px rgba(6, 6, 6, 0.12)',
  '@media(min-width:900px) and (max-width:1024px)': {
    mx: 1.4,
    maxWidth: '100%',
    minHeight: '250px',
  },
  '@media(min-width:769px) and (max-width:899px)': {
    mx: 1.4,
    maxWidth: '100%',
    minHeight: '230px',
  },
  '@media(min-width:481px) and (max-width:768px)': {
    maxWidth: '320px',
    minHeight: '260px',
  },
  '@media(min-width:280px) and (max-width:480px)': {
    maxWidth: '310px',
    minHeight: '258px',
  },
};

export const headerStyle = {
  flexDirection: 'column',
  px: 2.5,
  pt: { xs: 0, md: 3 },
  pb: 0,
  gap: { xs: 0.5, sm: 1 },
};

export const avatarStyle = {
  mb: 1,
  ml: 2.5,
  width: { xs: '33px', sm: '40px', lg: '50px' },
  height: { xs: '33px', sm: '40px', lg: '50px' },
};

export const titleStyle = {
  ml: 0,
  mr: 'auto',
  mb: 1,
  color: '#001C63',
  fontSize: { xs: '17px', sm: '18.32px', md: '18.32px', lg: '22px' },
  fontWeight: 600,
  lineHeight: { xs: 'auto', md: '24.39px' },
};

export const contentStyle = {
  textAlign: { xs: 'center', lg: 'left' },
  maxWidth: '325px',
  mx: 'auto',
  pt: 0,
  pb: { xs: '0 !important', md: '24px !important' },
};

export const paragraphStyle = {
  width: 'auto',
  color: '#000000',
  fontSize: { xs: '13px', sm: '13px', md: '14px', lg: '16px' },
  fontWeight: { xs: 400 },
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

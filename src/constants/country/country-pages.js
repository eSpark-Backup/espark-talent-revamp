export const COUNTRY = [
  {
    // Saudi Arabia
    path: 'ksa',
    heroSection: {
      title: 'Top Employee Outsourcing Company in Saudi Arabia for Tech Talent',
      description:
        'Focus on growing your business while we handle the hiring. Our employee outsourcing services in Saudi Arabia connect you with skilled professionals, reduce your costs, and provide full support. As a trusted HR solutions provider in KSA, we make building your team simple and efficient. ',
      btnText: 'Schedule a Call',
      btnLink: '/book-a-demo',
      styles: {
        mainBoxStyle: {
          width: '100%',
          height: 'calc(80vh - 127px)',
          minHeight: '450px',
          maxHeight: { xs: '450px', md: '700px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          py: { xs: 6, md: 8 },
          backgroundImage: "url('images/country/hero-section/background.png')",
          borderRadius: '0px 0px 54px 54px',
          borderBottom: '2px solid rgba(0, 0, 0, 0.04)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          gap: 2,
          textAlign: 'center',
          '@media(min-width:1921px)': {
            maxHeight: '700px',
            py: 8,
          },
        },
        titleStyle: {
          fontSize: { xs: '23px', sm: '32px', md: '54px', lg: '74px' },
          width: '95%',
          maxWidth: { sm: '420px', md: '950px', lg: '1450px' },
          fontWeight: 600,
          lineHeight: 1.2,
          color: '#0B395A',
        },
        textStyle: {
          width: { xs: '90%', sm: '100%' },
          maxWidth: { xs: '100%', sm: '90%', md: '740px', lg: '1250px' },
          fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '22px' },
          color: '#26292B',
        },
        buttonStyle: {
          mt: 2,
          width: '65%',
          maxWidth: '213px',
          height: { xs: '38px', md: '44px' },
          color: '#FFFFFF',
          background: 'rgba(2, 152, 148, 1)',
          border: '2px solid rgba(27, 202, 198, 0.47)',
          borderRadius: '10px',
          fontSize: { xs: '14px', md: '18px', lg: '21px' },
          px: 4,
          py: 1.5,
          textTransform: 'none',
          textWrap: 'nowrap',
        },
      },
    },
  },
  {
    // Malaysia
    path: 'my',
  },
  {
    // UAE
    path: 'uae',
  },
  {
    // United Kingdom
    path: 'uk',
  },
  {
    // USA
    path: 'usa',
  },
  {
    // Oman
    path: 'om',
  },
  {
    // Qatar
    path: 'qa',
  },
  {
    // Canada
    path: 'ca',
  },
];

export const countryPath = COUNTRY?.map(({ path }) => path);

const buttonStyles = (hover, size) => ({
  width: size,
  py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
  px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
  '&:hover': {
    backgroundColor: hover && hover ? hover : '#029894',
    color: hover ? '#001C63' : '#fff',
  },
});

const typographyStyles = (pathName, book_A_demo_meeting) => ({
  fontWeight: 600,
  transition:
    pathName === book_A_demo_meeting ? 'transform 0.3s ease-in-out' : 'none',
  '&:hover': {
    transform: pathName === book_A_demo_meeting ? 'scale(0.8)' : 'none',
  },
  fontSize: {
    xs: '15px',
    sm: '12px',
    md: '15px',
    lg: '20px',
  },
});
export { buttonStyles, typographyStyles };

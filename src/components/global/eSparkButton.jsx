import React from 'react';
import { Button, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ESparkButton = ({ title, link, color, onClick, size, hover, target }) => {
  const pathName = usePathname();
  const book_A_demo_meeting = '/book-a-demo-meeting';

  let btnVariant;

  if (color === 'primary') {
    btnVariant = 'primary';
  } else if (color === 'secondary') {
    btnVariant = 'secondary';
  } else if (color === 'default') {
    btnVariant = 'default';
  } else {
    return null;
  }

  const buttonStyle = {
    width: size,
    py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
    px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
    '&:hover': {
      backgroundColor: hover && hover ? hover : '#029894',
      color: hover ? '#001C63' : '#fff',
    },
  };

  const typographyStyle = {
    fontWeight: 600,
    fontSize: {
      xs: '15px',
      sm: '12px',
      md: '15px',
      lg: '20px',
    },
    transition:
      pathName === book_A_demo_meeting ? 'transform 0.3s ease-in-out' : 'none',
    '&:hover': {
      transform: pathName === book_A_demo_meeting ? 'scale(0.8)' : 'none',
    },
  };

  return (
    <Link href={link} target={target}>
      <Button
        size="small"
        variant={btnVariant}
        onClick={onClick}
        sx={buttonStyle}
      >
        <Typography variant="body1" sx={typographyStyle}>
          {title}
        </Typography>
      </Button>
    </Link>
  );
};

export default ESparkButton;

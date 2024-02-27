import React from 'react';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

const ESparkButton = ({ title, link, color, onClick, size, hover, target }) => {
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

  return (
    <Link href={link} target={target}>
      <Button
        size="small"
        variant={btnVariant}
        onClick={onClick}
        sx={{
          width: size,
          py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
          px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
          '&:hover': {
            backgroundColor: hover && hover ? hover : '#029894',
            color: hover ? '#001C63' : '#fff',
          },
        }}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: '15px',
            sm: '12px',
            md: '15px',
            lg: '20px',
          }}
          sx={{ fontWeight: 600 }}
        >
          {title}
        </Typography>
      </Button>
    </Link>
  );
};

export default ESparkButton;

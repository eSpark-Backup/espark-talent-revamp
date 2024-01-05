import React from 'react';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

const ESparkButton = ({ title, link, color, onClick, size, hover }) => {
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
    <Link href={link}>
      <Button
        variant={btnVariant}
        onClick={onClick}
        sx={{
          width: size,
          py: '8px',
          px: '15px',
          '&:hover': {
            backgroundColor: hover && hover ? hover : '#029894',
          },
        }}
      >
        <Typography variant="body1">{title}</Typography>
      </Button>
    </Link>
  );
};

export default ESparkButton;

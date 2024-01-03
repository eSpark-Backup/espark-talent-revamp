import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'next/link';

const EsparkButton = ({ title, link, color, onClick }) => {
  const btnSx = {}; 
  const txtSx = {};

  let variant = "contained";
  let textColor = "inherit";

  if (color === 'green') {
    variant = "contained";
    textColor = "white";
  } else if (color === 'white') {
    variant = "outlined";
    textColor = "default";
  } else if (color === 'red') {
    variant = "contained";
    textColor = "white";
    btnSx.backgroundColor = 'red'; 
  }

  return (
    <Link href={link}>
      <Button variant={variant} color={color === 'red' ? undefined : 'primary'} onClick={onClick} sx={btnSx}>
        <Typography variant="body1" color={textColor} sx={txtSx}>
          {title}
        </Typography>
      </Button>
    </Link>
  );
};

export default EsparkButton;

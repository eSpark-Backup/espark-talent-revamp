import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'next/link';

const eSparkButton = ({ title, link, color, onClick }) => {
  return color === green ? (
    <Link href={link}>
      <Button variant="primary"  color={'red'} onClick={onClick} sx={btnSx}>
        <Typography variant="body1" color={'white'} sx={txtSx}>{title}</Typography>
      </Button>
    </Link>
  ) : color === blue ? (
    <Link href={link}>
      <Button variant="secondary"  color={'red'} onClick={onClick} sx={btnSx}>
        <Typography variant="body1" color={'white'} sx={txtSx}>{title}</Typography>
      </Button>
    </Link>
  ) : color === white ?(
    <Link href={link}>
      <Button variant={btnVariant}  color={'red'} onClick={onClick} sx={btnSx}>
        <Typography variant={btnVariant} color={'white'} sx={txtSx}>{title}</Typography>
      </Button>
    </Link>
  )
};

export default eSparkButton;




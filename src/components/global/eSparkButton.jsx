import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'next/link';

const eSparkButton = ({ title, link, onClick }) => {
  const btnSx = {};
  const txtSx = {};

  // let variant = 'contained';
  // let textColor = 'inherit';

  // if (color === 'green') {
  //   variant = 'contained';
  //   textColor = 'white';
  // } else if (color === 'white') {
  //   variant = 'outlined';
  //   textColor = 'default';
  // } else if (color === 'red') {
  //   variant = 'contained';
  //   textColor = 'white';
  //   btnSx.backgroundColor = 'red';
  // }

  return (
    <Link href={link}>
      <Button variant="primary" color={'red'} onClick={onClick} sx={btnSx}>
        <Typography variant="body1" color={'white'} sx={txtSx}>
          {title}
        </Typography>
      </Button>
    </Link>
  );
  // : color === blue ? (
  //   <Link href={link}>
  //     <Button variant="secondary"  color={'red'} onClick={onClick} sx={btnSx}>
  //       <Typography variant="body1" color={'white'} sx={txtSx}>{title}</Typography>
  //     </Button>
  //   </Link>
  // ) : color === white ?(
  //   <Link href={link}>
  //     <Button variant={btnVariant}  color={'red'} onClick={onClick} sx={btnSx}>
  //       <Typography variant={btnVariant} color={'white'} sx={txtSx}>{title}</Typography>
  //     </Button>
  //   </Link>
  // ): null
};

export default eSparkButton;

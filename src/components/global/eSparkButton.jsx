import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'next/link';

const eSparkButton = ({ title, link, design, onClick }) => {
  return design === 1 ? (
    <Link href={link}>
      <Button variant="primary" sx={{ py: '10px', px: '30px' }}>
        <Typography variant="body1">{title}</Typography>
      </Button>
    </Link>
  ) : design === 2 ? (
    <Button variant="secondary" onClick={onClick}>
      <Typography variant="body1">{title}</Typography>
    </Button>
  ) : (
    <Link href={link}>
      <Button variant="primary">
        <Typography variant="body1">{title}</Typography>
      </Button>
    </Link>
  );
};

export default eSparkButton;

'use client';
import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';

const WikiSingleRigth = () => {
  return (
    <Box
      sx={{
        px: '15px',
        py: '30px',
        borderRadius: `15px`,
        background: '#3B5998',
        boxShadow: '0px 0px 7.8px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Typography
        color={'white'}
        pb="10px"
        textAlign={'center'}
        fontWeight={600}
        sx={{
          fontSize: {
            xs: '12px',
            sm: '16px',
            md: '20px',
            lg: '22px',
            xl: '22px',
          },
        }}
      >
        {`Recruit the top developer.`}
      </Typography>
      <Typography
        variant="body1"
        color={'white'}
        textAlign={'center'}
        sx={{
          fontSize: {
            xs: '12px',
            sm: '13px',
            md: '16px',
            lg: '18px',
            xl: '18px',
          },
        }}
      >
        {`Let us know about your business requirements on an discovery call, and
        we'll handle the matchmaking process.`}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: '20px' }}>
        <Link href={`/book-a-demo`}>
          <Button variant="primary" color="secondary">
            {`Hire ME`}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default WikiSingleRigth;

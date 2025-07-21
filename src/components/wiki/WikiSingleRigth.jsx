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
        lineHeight={1.85}
        textAlign={'left'}
        fontWeight={700}
        sx={{
          fontSize: {
            xs: '12px',
            sm: '20px',
            md: '22px',
            lg: '25px',
            xl: '25px',
          },
        }}
      >
        {`Recruit the top developer.`}
      </Typography>
      <Typography
        variant="body1"
        color={'white'}
        textAlign={'left'}
        lineHeight={2}
        sx={{
          fontSize: {
            xs: '12px',
            sm: '12px',
            md: '14px',
            lg: '16px',
            xl: '16px',
          },
        }}
      >
        {`Let us know about your business requirements on an discovery call, and
        we'll handle the matchmaking process.`}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: '20px' }}>
        <Link href={`/book-a-demo`} target="_blank">
          <Button variant="primary" color="secondary">
            {`Hire Now`}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default WikiSingleRigth;

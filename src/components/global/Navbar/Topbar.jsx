import { Box, Typography } from '@mui/material';
import React from 'react';

const Topbar = () => {
  return (
    <Box
      backgroundColor={'#029894'}
      sx={{
        height: { lg: '26px', md: '40px' },
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      }}
    >
      <Typography
        color={'#fff'}
        sx={{
          fontSize: {
            xs: '3px',
            sm: '15px !important',
          },
          fontWeight: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        Scale up your business with our exclusive offer! Start with No
        Management Fee for First Employee.
        <Box
          src="/images/homepage/rocket.svg"
          sx={{ mx: 0.5, width: '16px', height: '100%' }}
          component={'img'}
        />
      </Typography>
    </Box>
  );
};

export default Topbar;

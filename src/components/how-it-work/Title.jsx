import React from 'react';
import { Box, Typography } from '@mui/material';

const Title = ({ heading, subHeading }) => {
  return (
    <Box
      sx={{
        width: { md: '100%' },
        textAlign: 'center',
        margin: '0px auto',
        pb: '25px',
      }}
    >
      <Typography
        sx={{
          color: '#09114A',
          textAlign: 'center',
          fontSize: { md: '32px', xs: '20px' },
          lineHeight: { lg: '48px', xs: '26px' },

          fontWeight: 700,
          fontStyle: 'normal',
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          px: { md: '300px' },

          color: '#001C63',
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '30px',
          fontStyle: 'normal',
        }}
      >
        {subHeading}
      </Typography>
    </Box>
  );
};

export default Title;

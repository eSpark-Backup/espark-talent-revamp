import React from 'react';
import { Box, Typography } from '@mui/material';

const Title = ({ heading, subHeading }) => {
  return (
    <Box
      sx={{
        width: { md: '70%' },
        textAlign: 'center',
        margin: '0px auto',
      }}
    >
      <Typography
        variant="h2"
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
        variant="body1"
        sx={{
          px: { md: '180px' },

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

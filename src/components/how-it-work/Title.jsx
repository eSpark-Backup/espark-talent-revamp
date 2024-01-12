import React from 'react';
import { Box, Typography } from '@mui/material';

const Title = ({ heading, subHeading }) => {
  return (
    <Box
      sx={{
        width: { md: '100%' },
        textAlign: 'center',
        margin: '0px auto',
        pb: { xs: '20px', md: '25px' },
        pt: { xs: '25px', md: '0px' },
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
          pb: { xs: '5px' },
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          px: { xs: '10px', lg: '240px' },
          color: '#001C63',
          textAlign: 'center',
          fontSize: { xs: '10px', sm: '12px', md: '18px' },
          fontWeight: 400,
          lineHeight: { xs: '18px', md: '30px' },
          fontStyle: 'normal',
        }}
      >
        {subHeading}
      </Typography>
    </Box>
  );
};

export default Title;

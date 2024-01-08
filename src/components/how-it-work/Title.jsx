import React from 'react';
import { Box, Typography } from '@mui/material';

const Title = ({ heading, subHeading }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          color: '#09114A',
          textAlign: 'center',
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '48px',
          fontStyle: 'normal',
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="body1"
        sx={{
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

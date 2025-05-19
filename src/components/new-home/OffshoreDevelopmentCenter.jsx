import React from 'react';
import { Box } from '@mui/material';
import ODCProcess from './Doorstep';
import { DOORSTEP_DATA } from '@/constants/new-home';

const OffshoreDevelopmentCenter = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 5, sm: 8, lg: 10 },
        pb: { xs: 5, sm: 8, lg: 10 },
        backgroundColor: '#F5F5F5',
      }}
    >
      <ODCProcess data={DOORSTEP_DATA} />
    </Box>
  );
};

export default OffshoreDevelopmentCenter;

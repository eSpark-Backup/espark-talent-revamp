import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Rights = ({ copyRights }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: 1,
      }}
    >
      <Typography
        sx={{
          color: '#0E0F1D',
          fontSize: '15px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        {copyRights}
      </Typography>
    </Box>
  );
};

export default Rights;

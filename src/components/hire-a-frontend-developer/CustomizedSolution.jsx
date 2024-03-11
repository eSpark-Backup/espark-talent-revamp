import { Box } from '@mui/material';
import React from 'react';

const CustomizedSolution = ({ data }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${data?.bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    ></Box>
  );
};

export default CustomizedSolution;

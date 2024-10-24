import { Box, Typography } from '@mui/material';
import React from 'react';
import titleStyle from '../../constants/global/title';
const Title = ({ title }) => {
  return (
    <Box>
      <Typography sx={titleStyle}>{title}</Typography>
    </Box>
  );
};

export default Title;

import React from 'react';
import { Box, Typography } from '@mui/material';

const TitleParagraph = ({ title, paragraph }) => {
  return (
    <Box sx={{ pb: '30px' }}>
      <Typography
        variant="h2"
        color="secondary"
        sx={{ textAlign: 'center', flexWrap: 'wrap' }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="secondary"
        sx={{ textAlign: 'center' }}
      >
        {paragraph}
      </Typography>
    </Box>
  );
};

export default TitleParagraph;

'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

const ParagraphTitle = ({
  title,
  paragraph,
  hVar,
  hColor,
  pColor,
  pVar,
  hAlign,
  pAlign,
}) => {
  return (
    <>
      <Box sx={{ pb: '30px', px: { md: '20%', sm: '10%', xs: '2%' } }}>
        <Typography
          variant={hVar || 'h2'}
          color={hColor || 'secondary'}
          sx={{ textAlign: hAlign || 'center', flexWrap: 'wrap' }}
        >
          {title}
        </Typography>
        <Typography
          variant={pVar || 'body1'}
          color={pColor || 'secondary'}
          sx={{ textAlign: pAlign || 'center' }}
        >
          {paragraph}
        </Typography>
      </Box>
    </>
  );
};

export default ParagraphTitle;

'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

const ParagraphTitle = ({ title, paragraph,hVar, pVar }) => {
  return (
    <>
      <Box sx={{ pb: '30px', px: { md: '20%', sm: '10%', xs: '2%' } }}>
        <Typography
          variant={hVar || "h2"}
          color="secondary"
          sx={{ textAlign: 'center', flexWrap: 'wrap' }}
        >
          {title}
        </Typography>
        <Typography
          variant={pVar || "body1"}
          color="secondary"
          sx={{ textAlign: 'center' }}
        >
          {paragraph}
        </Typography>
      </Box>
    </>
  );
};

export default ParagraphTitle;

'use client';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const DedicatedBanner = ({ data }) => {
  const { title, text, buttonText, link, styles } = data || {};
  const { mainBoxStyle, titleStyle, textStyle, buttonStyle } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Typography sx={titleStyle} dangerouslySetInnerHTML={{ __html: title }} />
      <Typography sx={textStyle}>{text}</Typography>
      <Button
        variant="contained"
        onClick={() => window?.open(link, '_blank')}
        sx={buttonStyle}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default DedicatedBanner;

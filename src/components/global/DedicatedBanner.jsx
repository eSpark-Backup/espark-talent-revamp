'use client';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const DedicatedBanner = ({ data }) => {
  const { title, text, buttonText, link, styles } = data || {};
  const {
    mainBoxStyle,
    overlayImageStyle,
    titleStyle,
    textStyle,
    buttonStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Box
        component="img"
        alt="Background"
        sx={overlayImageStyle}
        src="/images/country/hero-section/background.png"
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          sx={titleStyle}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Typography sx={textStyle}>{text}</Typography>
        <Button
          variant="contained"
          onClick={() => window?.open(link, '_blank')}
          sx={buttonStyle}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default DedicatedBanner;

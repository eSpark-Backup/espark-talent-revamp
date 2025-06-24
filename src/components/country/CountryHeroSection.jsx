import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const CountryHeroSection = ({ data }) => {
  const { title, description, btnText, btnLink, styles } = data || {};
  const { mainBoxStyle, titleStyle, textStyle, buttonStyle } = styles || {};
  return (
    <Box sx={mainBoxStyle}>
      <Typography sx={titleStyle}>{title} </Typography>
      <Typography sx={textStyle}>{description} </Typography>
      <Button
        variant="contained"
        onClick={() => window?.open(btnLink, '_blank')}
        sx={buttonStyle}
      >
        {btnText}
      </Button>
    </Box>
  );
};

export default CountryHeroSection;

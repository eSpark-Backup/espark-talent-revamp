import React from 'react';
import { Box } from '@mui/material';
import CountryHeroSection from './CountryHeroSection';

const CountryPage = ({ data }) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CountryHeroSection data={data?.heroSection} />
    </Box>
  );
};

export default CountryPage;

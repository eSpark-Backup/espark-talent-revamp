import React from 'react';
import { Box } from '@mui/material';
import DedicatedBanner from '../global/DedicatedBanner';
import { COUNTRY_HERO_STYLE } from '@/styles/countryComponentStyles';
const CountryPage = ({ data }) => {
  const { styles } = COUNTRY_HERO_STYLE || {};

  // Inject styles into heroSection
  const heroSection = {
    ...data?.heroSection,
    styles: {
      ...styles,
    },
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <DedicatedBanner data={heroSection} />
    </Box>
  );
};

export default CountryPage;

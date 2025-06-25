import React from 'react';
import { Box } from '@mui/material';
import DedicatedBanner from '../global/DedicatedBanner';
import {
  COUNTRY_HERO_STYLE,
  LETS_WORK_TOGETHER_STYLE,
} from '@/styles/countryComponentStyles';
import LetsWorkTogether from './LetsWorkTogether';
const CountryPage = ({ data }) => {
  // Inject styles into heroSection
  const heroSectionData = {
    ...data?.heroSection,
    styles: {
      ...(COUNTRY_HERO_STYLE || {}),
    },
  };

  const LetsWorkTogetherData = {
    ...data?.letsWorkTogether,
    styles: {
      ...(LETS_WORK_TOGETHER_STYLE || {}),
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(247, 247, 249, 1)',
        gap: { xs: 5, sm: 7, lg: 8 },
        pb: { xs: 5, sm: 7, lg: 8 },
      }}
    >
      <DedicatedBanner data={heroSectionData} />
      <LetsWorkTogether data={LetsWorkTogetherData} />
    </Box>
  );
};

export default CountryPage;

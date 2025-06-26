import React from 'react';
import { Box } from '@mui/material';
import DedicatedBanner from '../global/DedicatedBanner';
import {
  COMPARISON_TABLE_STYLE,
  COUNTRY_HERO_STYLE,
  LETS_WORK_TOGETHER_STYLE,
} from '@/styles/countryComponentStyles';
import LetsWorkTogether from './LetsWorkTogether';
import ComparisonTable from './ComparisonTable';
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

  const ComparisonTableData = {
    ...data?.comparisonTable,
    styles: {
      ...(COMPARISON_TABLE_STYLE || {}),
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
      <ComparisonTable data={ComparisonTableData} />
    </Box>
  );
};

export default CountryPage;

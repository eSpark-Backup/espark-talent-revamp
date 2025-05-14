import { Box } from '@mui/material';
import React from 'react';
import DedicatedBanner from '../global/DedicatedBanner';
import {
  EXPLAINING_FIXED_PRICES_PROJECTS_DATA,
  FIXED_PRICES_PROJECTS_DATA,
  OFFSHORE_DEVELOPMENT_CENTER_DATA,
} from '@/constants/new-home';
import HighStakesProjects from './HighStakesProjects';
import OffshoreDevelopmentCenter from './OffshoreDevelopmentCenter';

const FixedPriceProjects = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 5, sm: 8, lg: 10 },
        pb: { xs: 5, sm: 8, lg: 10 },
      }}
    >
      <DedicatedBanner data={FIXED_PRICES_PROJECTS_DATA} />
      <HighStakesProjects data={EXPLAINING_FIXED_PRICES_PROJECTS_DATA} />
      <OffshoreDevelopmentCenter data={OFFSHORE_DEVELOPMENT_CENTER_DATA} />
    </Box>
  );
};

export default FixedPriceProjects;

import { Box } from '@mui/material';
import React from 'react';
import DedicatedBanner from '../global/DedicatedBanner';
import {
  FIXED_PRICES_PROJECTS_DATA,
  FIXED_PRICE_PROJECT_CONTRACT,
  OFFSHORE_DEVELOPMENT_CENTER_DATA,
  EXPLAINING_FIXED_PRICES_PROJECTS_DATA,
  FIXED_PRICE_FREQUENTLY_ASKED_QUESTIOND_DATA,
} from '@/constants/new-home';
import HighStakesProjects from './HighStakesProjects';
import OffshoreDevelopmentCenter from './OffshoreDevelopmentCenter';
import ProjectContract from './ProjectContract';
import FrequetlyAskedQuestions from './FrequentlyAskedQuestions';

const FixedPriceProjects = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 5, sm: 8, lg: 10 },
        pb: { xs: 5, sm: 8, lg: 10 },
        backgroundColor: '#F5F5F5',
      }}
    >
      <DedicatedBanner data={FIXED_PRICES_PROJECTS_DATA} />
      <HighStakesProjects data={EXPLAINING_FIXED_PRICES_PROJECTS_DATA} />
      <OffshoreDevelopmentCenter data={OFFSHORE_DEVELOPMENT_CENTER_DATA} />
      <ProjectContract data={FIXED_PRICE_PROJECT_CONTRACT} />
      <FrequetlyAskedQuestions
        data={FIXED_PRICE_FREQUENTLY_ASKED_QUESTIOND_DATA}
      />
    </Box>
  );
};

export default FixedPriceProjects;

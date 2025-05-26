import { Box } from '@mui/material';
import React from 'react';
import DedicatedBanner from '../global/DedicatedBanner';
import {
  FIXED_PRICES_PROJECTS_DATA,
  FIXED_PRICE_PROJECT_CONTRACT,
  EXPLAINING_FIXED_PRICES_PROJECTS_DATA,
  FIXED_PRICE_FREQUENTLY_ASKED_QUESTIOND_DATA,
  PRODUCT_JOURNEY_DATA,
  CHOOSE_AN_OFFSHORE_DEVELOPMENT_CENTER_DATA,
} from '@/constants/new-home';
import HighStakesProjects from './HighStakesProjects';
import ProjectContract from './ProjectContract';
import FrequetlyAskedQuestions from './FrequentlyAskedQuestions';
import ProductJourney from './ProductJourney';
import ChooseAnOffshoreDevelopmentCenter from './ChooseAnOffshoreDevelopmentCenter';

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
      <ProductJourney data={PRODUCT_JOURNEY_DATA} />
      <ChooseAnOffshoreDevelopmentCenter
        data={CHOOSE_AN_OFFSHORE_DEVELOPMENT_CENTER_DATA}
      />
      <ProjectContract data={FIXED_PRICE_PROJECT_CONTRACT} />
      <FrequetlyAskedQuestions
        data={FIXED_PRICE_FREQUENTLY_ASKED_QUESTIOND_DATA}
      />
    </Box>
  );
};

export default FixedPriceProjects;

import React from 'react';
import { Box } from '@mui/material';
import {
  DOORSTEP_DATA,
  ODC_FOUNDATION_DATA,
  ODC_SERVICES_DATA,
  ODC_SOLUTIONS,
  OFFSHORE_DEVELOPMENT_CENTER_DATA,
  OFFSHORE_DEVELOPMENT_FREQUENTLY_ASKED_QUESTIOND_DATA,
  WHY_CHOOSE_AN_OFFSHORE_DEVELOPMENT_CENTER,
} from '@/constants/home-page/new-home';
import DedicatedBanner from '../global/DedicatedBanner';
import ProductJourney from './ProductJourney';
import ExpertDeveloper from './ExpertDevelopers';
import FrequetlyAskedQuestions from './FrequentlyAskedQuestions';
import ODCFoundation from './ODCFoundation';
import Doorstep from './Doorstep';
import ODCServives from './ODCServives';

const OffshoreDevelopmentCenter = () => {
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
      <DedicatedBanner data={OFFSHORE_DEVELOPMENT_CENTER_DATA} />
      <ProductJourney data={ODC_SOLUTIONS} />
      <ODCServives data={ODC_SERVICES_DATA} />
      <ODCFoundation data={ODC_FOUNDATION_DATA} />
      <ExpertDeveloper data={WHY_CHOOSE_AN_OFFSHORE_DEVELOPMENT_CENTER} />
      <Doorstep data={DOORSTEP_DATA} />
      <FrequetlyAskedQuestions
        data={OFFSHORE_DEVELOPMENT_FREQUENTLY_ASKED_QUESTIOND_DATA}
      />
    </Box>
  );
};

export default OffshoreDevelopmentCenter;

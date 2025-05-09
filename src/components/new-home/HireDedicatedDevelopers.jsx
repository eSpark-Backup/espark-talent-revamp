import React from 'react';
import { Box } from '@mui/material';
import DedicatedBanner from '../global/DedicatedBanner';
import {
  EASY_STEPS_DATA,
  HIRE_DEDICATED_DEVELOPERS_DATA,
  OUR_AREA_OF_EXPERTISE_DATA,
} from '@/constants/new-home';
import OurAreaOfExpertise from './OurAreaOfExpertise';
import EasySteps from './EasySteps';

const HireDedicatedDevelopers = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 5, sm: 6, lg: 7.5 },
        pb: { xs: 5, sm: 6, lg: 7.5 },
      }}
    >
      <DedicatedBanner data={HIRE_DEDICATED_DEVELOPERS_DATA} />
      <OurAreaOfExpertise data={OUR_AREA_OF_EXPERTISE_DATA} />
      <EasySteps data={EASY_STEPS_DATA} />
    </Box>
  );
};

export default HireDedicatedDevelopers;

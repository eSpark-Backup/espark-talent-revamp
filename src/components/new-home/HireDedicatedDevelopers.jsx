import React from 'react';
import { Box } from '@mui/material';
import DedicatedBanner from '../global/DedicatedBanner';
import {
  HIRE_DEDICATED_DEVELOPERS_DATA,
  OUR_AREA_OF_EXPERTISE_DATA,
} from '@/constants/new-home';
import OurAreaOfExpertise from './OurAreaOfExpertise';

const HireDedicatedDevelopers = () => {
  return (
    <Box
      sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 5 }}
    >
      <DedicatedBanner data={HIRE_DEDICATED_DEVELOPERS_DATA} />
      <OurAreaOfExpertise data={OUR_AREA_OF_EXPERTISE_DATA} />
    </Box>
  );
};

export default HireDedicatedDevelopers;

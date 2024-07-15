import { Box } from '@mui/material';
import React from 'react';
import PricingCard from './PricingCard';

const PricingHero = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'linear-gradient(180deg, #029894 21.1%, #023A39 158.47%)',
          height: `100%`,
          color: '#fff',
          mb: 10,
          '@media(max-width: 783px)': {
            mb: 0,
          },
        }}
      >
        <PricingCard data={data} />
      </Box>
    </>
  );
};

export default PricingHero;

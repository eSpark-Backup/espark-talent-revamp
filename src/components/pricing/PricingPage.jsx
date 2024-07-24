import React from 'react';
import ServiceFaq from '../service/ServiceFaq';
import { FAQ_DATA } from '@/constants/home-page/faq-section';
import { DIFFERENCE_DATA } from '@/constants/new-home';
import PricingBenifits from './PricingBenifits';
import PricingHero from './PricingHero';
import BlueCard from './BlueCard';
import { Box } from '@mui/material';
import PricingDefference from './PricingDefference';
import PricingWorks from './PricingWorks';

const PricingPage = ({ data }) => {
  return (
    <>
      <PricingHero data={data} />
      <Box
        sx={{
          mt: 5,
          mb: 3,
          display: 'none',
          '@media(max-width: 783px)': {
            display: 'flex',
          },
        }}
      >
        <BlueCard data={data} />
      </Box>
      <PricingBenifits data={data?.benifits} />
      <PricingDefference data={DIFFERENCE_DATA} />
      <PricingWorks data={data?.howItWorks} />
      <ServiceFaq data={FAQ_DATA} color={'#fff'} />
    </>
  );
};

export default PricingPage;

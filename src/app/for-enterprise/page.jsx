import React from 'react';

import { Container, Box, Typography } from '@mui/material';

import AchievementAwards from '@/components/homepage/achievementAwards';
import ClientSlider from '@/components/global/clientSlider';
import TitleParagraph from '@/components/global/titleParagraph';
import OutSourcingWonders from '@/components/for-enter/outSourcingWonders';

import { ACHIEVEMENTS_DATA, CLIENTS_SLIDER_DATA } from '@/constants/homepage';
import { OUTSOURCING_WONDERS_DATA } from '@/constants/for-enterprise';

const page = () => {
  return (
    <>
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        bgColor={'#3B59980A'}
        txtColor={'#001C63'}
        fontWeight={500}
        title={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
      />
      <Box sx={{ py: '30px' }}>
        <TitleParagraph
          title={'eSpark Talent Is Here To Boost Start-Ups.'}
          paragraph={`Access to the World's Best Talent!`}
        />
      </Box>
      <OutSourcingWonders data={OUTSOURCING_WONDERS_DATA} />
      <AchievementAwards data={ACHIEVEMENTS_DATA} design={2} />
    </>
  );
};

export default page;

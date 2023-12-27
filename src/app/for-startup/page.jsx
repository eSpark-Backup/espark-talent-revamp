import React from 'react';

import { Container, Box, Typography } from '@mui/material';

import TitleParagraph from '@/components/global/titleParagraph';
import AchievementAwards from '@/components/homepage/achievementAwards';
import ClientSlider from '@/components/global/clientSlider';
import OutSourcingSolutions from '@/components/for-startup/outSourcingSolutions';

import { ACHIEVEMENTS_DATA, CLIENTS_SLIDER_DATA } from '@/constants/homepage';
import { OUTSOURCING_SOLUTIONS_DATA } from '@/constants/for-startup';

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
          title={'How Fast Are Our Outsourcing Services?'}
          paragraph={`At eSpark Talent, our services move with the rhythm of urgency,
          promising a pace that surprises and a speed that advances.`}
        />
      </Box>
      <OutSourcingSolutions data={OUTSOURCING_SOLUTIONS_DATA} />
      <AchievementAwards data={ACHIEVEMENTS_DATA} design={2} />
    </>
  );
};

export default page;

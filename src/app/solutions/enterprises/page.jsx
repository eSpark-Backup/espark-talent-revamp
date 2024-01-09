'use client';
import React from 'react';

import { Box } from '@mui/material';

import Hero from '@/components/homepage/Hero';
import ClientSlider from '@/components/global/ClientSlider';
import AwardAchievement from '@/components/homepage/AwardAchiefment';
import ParagraphTitle from '@/components/homepage/ParagraphTitle';
import OutSourcingItem from '@/components/for-enterprise/OutSourcingItem';
import OutStaffings from '@/components/for-enterprise/OutStaffings';
import OutSourcingWonder from '@/components/for-enterprise/OutSourcingWonder';
import OutSourcingAdvantage from '@/components/for-enterprise/OutSourcingAdvantage';
import Faq from '@/components/FAQ/Faq';

import {
  ACHIEVEMENTS_DATA,
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
} from '@/constants/homepage';
import {
  OUTSOURCING_ADVANTAGES_DATA,
  OUTSOURCING_LIST_DATA,
  OUTSOURCING_WONDERS_DATA,
  OUTSTAFFING_TRUST_DATA,
} from '@/constants/for-enterprise';
import { ENTERPRISE_HERO_DATA } from '@/constants/global/hero-sections';
import { FAQ_DATA_ENTERPRISE } from '@/constants/home-page/faq-section';

const page = () => {
  return (
    <>
      <Hero data={ENTERPRISE_HERO_DATA} color="default" />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        bgColor={'#3B59980A'}
        txtColor={'#001C63'}
        fontWeight={500}
        title={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
      />
      <Box sx={{ pt: '2%', px: '10%' }}>
        <ParagraphTitle
          title={'How Fast Are Our Outsourcing Services?'}
          paragraph={`At eSpark Talent, our services move with the rhythm of urgency, promising a pace that surprises and a speed that advances.`}
        />
      </Box>
      <OutSourcingItem data={OUTSOURCING_LIST_DATA} />
      <OutSourcingAdvantage data={OUTSOURCING_ADVANTAGES_DATA} />
      <OutSourcingWonder data={OUTSOURCING_WONDERS_DATA} />
      <OutStaffings data={OUTSTAFFING_TRUST_DATA} />
      <AwardAchievement data={ACHIEVEMENTS_DATA} design={2} />
      <Faq data={FAQ_DATA_ENTERPRISE} />
    </>
  );
};

export default page;

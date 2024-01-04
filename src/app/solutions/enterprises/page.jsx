import React from 'react';

import { Box } from '@mui/material';

import AchievementAwards from '@/components/homepage/achievementAwards';
import ClientSlider from '@/components/global/clientSlider';
import TitleParagraph from '@/components/global/titleParagraph';
import OutSourcingWonders from '@/components/for-enterprise/outSourcingWonders';
import OutSourcingList from '@/components/for-enterprise/outSourcingList';
import OutStaffingTrust from '@/components/for-enterprise/outStaffingTrust';
import OutSourcingAdvantages from '@/components/for-enterprise/outSourcingAdvantages';

import { ACHIEVEMENTS_DATA, CLIENTS_SLIDER_DATA } from '@/constants/homepage';
import {
  OUTSOURCING_LIST_DATA,
  OUTSOURCING_WONDERS_DATA,
  OUTSTAFFING_TRUST_DATA,
  OUTSOURCING_ADVANTAGES_DATA,
} from '@/constants/for-enterprise';
import HeroSection from '@/components/homepage/heroSection';
import { ENTERPRISE_HERO_DATA } from '@/constants/global/hero-sections';

const page = () => {
  return (
    <>
      <HeroSection data={ENTERPRISE_HERO_DATA} />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        bgColor={'#3B59980A'}
        txtColor={'#001C63'}
        fontWeight={500}
        title={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
      />
      <Box sx={{ pt: '2%', px: '10%' }}>
        <TitleParagraph
          title={'How Fast Are Our Outsourcing Services?'}
          paragraph={`At eSpark Talent, our services move with the rhythm of urgency, promising a pace that surprises and a speed that advances.`}
        />
      </Box>
      <OutSourcingList data={OUTSOURCING_LIST_DATA} />
      <OutSourcingAdvantages data={OUTSOURCING_ADVANTAGES_DATA} />
      <OutSourcingWonders data={OUTSOURCING_WONDERS_DATA} />
      <OutStaffingTrust data={OUTSTAFFING_TRUST_DATA} />
      <AchievementAwards data={ACHIEVEMENTS_DATA} design={2} />
    </>
  );
};

export default page;

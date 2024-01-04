'use client';
import React from 'react';

import WhyChooseOurHr from '@/components/whatwedopage/WhyChooseOurHr';
import QuestionAnswer from '@/components/whatwedopage/QuestionAnswer';
import ExpertTeamCard from '@/components/whatwedopage/ExpertTeamCard';
import ProfessionalTeamCard from '@/components/whatwedopage/ProfessionalTeamCard';
import Faq from '@/components/FAQ/Faq';
import ClientSlider from '@/components/global/clientSlider';
import { CLIENTS_SLIDER_DATA } from '@/constants/homepage';

import { WHAT_WE_DO_HERO_DATA } from '@/constants/global/hero-sections';
import { TEAM_CARD_DATA } from '@/constants/what-we-do-page/professional-team';
import { EXPERT_TEAM_CARD } from '@/constants/what-we-do-page/expert-team-card';
import Hero from '@/components/homepage/Hero';

const page = () => {
  return (
    <>
      <Hero data={WHAT_WE_DO_HERO_DATA} />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        bgColor={'#3B59980A'}
        txtColor={'#001C63'}
        fontWeight={500}
        title={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
      />
      <WhyChooseOurHr />
      <QuestionAnswer />
      <ProfessionalTeamCard teamData={TEAM_CARD_DATA} />
      <ExpertTeamCard teamData={EXPERT_TEAM_CARD} />
      <Faq />
    </>
  );
};

export default page;

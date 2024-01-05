'use client';
import React from 'react';

import Hero from '@/components/homepage/Hero';
import ClientSlider from '@/components/global/ClientSlider';
import WhyChooseOurHr from '@/components/whatwedopage/WhyChooseOurHr';
import QuestionAnswer from '@/components/whatwedopage/QuestionAnswer';
import ExpertTeamCard from '@/components/whatwedopage/ExpertTeamCard';
import ProfessionalTeamCard from '@/components/whatwedopage/ProfessionalTeamCard';
import Faq from '@/components/FAQ/Faq';

import {
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
} from '@/constants/homepage';
import { WHAT_WE_DO_HERO_DATA } from '@/constants/global/hero-sections';
import { TEAM_CARD_DATA } from '@/constants/what-we-do-page/professional-team';
import { EXPERT_TEAM_CARD } from '@/constants/what-we-do-page/expert-team-card';
import { WHY_CHOOSE_OUR_HR_DATA } from '@/constants/what-we-do-page/why-choose-hr';
import { FAQ_DATA } from '@/constants/home-page/faq-section';

const page = () => {
  return (
    <>
      <Hero data={WHAT_WE_DO_HERO_DATA} />
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
      <WhyChooseOurHr data={WHY_CHOOSE_OUR_HR_DATA} />
      <QuestionAnswer />
      <ProfessionalTeamCard teamData={TEAM_CARD_DATA} />
      <ExpertTeamCard teamData={EXPERT_TEAM_CARD} />
      <Faq data={FAQ_DATA} />
    </>
  );
};

export default page;

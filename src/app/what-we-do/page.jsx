import React from 'react';

import HeroSection from '@/components/homepage/heroSection';
import WhyChooseOurHr from '@/components/whatwedopage/WhyChooseOurHr';
import QuestionAnswer from '@/components/whatwedopage/QuestionAnswer';
import ExpertTeamCard from '@/components/whatwedopage/ExpertTeamCard';
import ProfessionalTeamCard from '@/components/whatwedopage/ProfessionalTeamCard';
import Faq from '@/components/FAQ/Faq';

import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import { TEAM_CARD_DATA } from '@/constants/what-we-do-page/professional-team';
import { EXPERT_TEAM_CARD } from '@/constants/what-we-do-page/expert-team-card';

const page = () => {
  return (
    <>
      <HeroSection data={HP_HERO_DATA} />
      <WhyChooseOurHr />
      <QuestionAnswer />
      <ProfessionalTeamCard teamData={TEAM_CARD_DATA} />
      <ExpertTeamCard teamData={EXPERT_TEAM_CARD} />
      <Faq />
    </>
  );
};

export default page;

import React from 'react';
import HeroSection from '@/components/homepage/heroSection';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import WhyChooseOurHr from '@/components/whatwedopage/WhyChooseOurHr';
import QuestionAnswer from '@/components/whatwedopage/QuestionAnswer';
import ProfessionalTeamCard from '@/components/whatwedopage/ProfessionalTeamCard';
import { TEAM_CARD_DATA } from '@/constants/what-we-do-page/professional-team';

const page = () => {
  return (
    <>
      <HeroSection data={HP_HERO_DATA} />
      <WhyChooseOurHr />
      <QuestionAnswer />
      <ProfessionalTeamCard teamData={TEAM_CARD_DATA} />
    </>
  );
};

export default page;

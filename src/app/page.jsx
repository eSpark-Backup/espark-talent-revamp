import React from 'react';
import Faq from '@/components/FAQ/Faq';
import AchievementAwards from '@/components/homepage/achievementAwards';
import ClientSlider from '@/components/global/clientSlider';
import HeroSection from '@/components/homepage/heroSection';
import OurExperties from '@/components/homepage/ourExperties';
import OurPerks from '@/components/homepage/ourPerks';
import OurProcess from '@/components/homepage/ourProcess';
import OutSourceBenefits from '@/components/homepage/outSourceBenefits';
import BenefitsWorks from '@/components/homepage/benefitsWorks';

import {
  ACHIEVEMENTS_DATA,
  BENEFITS_WORKS_DATA,
  CLIENTS_SLIDER_DATA,
  EXPERTIES_DATA,
  HERO_DATA,
  OUTSOURCE_BENEFITS_DATA,
  PERKS_DATA,
  PROCESS_DATA,
} from '@/constants/homepage';

const Home = () => {
  return (
    <>

      <HeroSection data={HERO_DATA} />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        bgColor={'#029894'}
        txtColor={'#ffffff'}
        title={'Meet our partners who trust our certified tech experts'}
      />
      <OurProcess data={PROCESS_DATA} />
      <OutSourceBenefits data={OUTSOURCE_BENEFITS_DATA} />
      <OurPerks data={PERKS_DATA} />
      <BenefitsWorks data={BENEFITS_WORKS_DATA} />
      <OurExperties data={EXPERTIES_DATA} />
      <AchievementAwards
        data={ACHIEVEMENTS_DATA}
        design={1}
        background={'#F7F8FB'}
      />
      <Faq />
    </>
  );
};
export default Home;

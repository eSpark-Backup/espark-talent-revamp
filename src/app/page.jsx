import React from 'react';
import FooterCTA from '@/components/homepage/FooterCTA';
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
  OUTSOURCE_BENEFITS_DATA,
  PERKS_DATA,
  PROCESS_DATA,
  OUR_CLIENT_SAYS,
} from '@/constants/homepage';
import HomePageBlogs from '@/components/blogs/homePageBlogs';

import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import ClientSays from '@/components/homepage/ClientSays';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AchievementAwards />
      <HeroSection data={HP_HERO_DATA} />
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
      <HomePageBlogs />
      <ClientSays data={OUR_CLIENT_SAYS} />
      <Faq />
      <FooterCTA />
    </>
  );
};
export default Home;

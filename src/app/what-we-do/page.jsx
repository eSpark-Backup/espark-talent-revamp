import React from 'react';
import HeroSection from '@/components/homepage/heroSection';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import WhyChooseOurHr from '@/components/whatwedopage/WhyChooseOurHr';
import QuestionAnswer from '@/components/whatwedopage/QuestionAnswer';

const page = () => {
  return (
    <>
      <HeroSection data={HP_HERO_DATA} />
      <WhyChooseOurHr />
      <QuestionAnswer />
    </>
  );
};

export default page;

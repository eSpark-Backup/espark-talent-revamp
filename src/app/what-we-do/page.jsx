import React from 'react';
import HeroSection from '@/components/homepage/heroSection';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import WhyChooseOurHr from '@/components/whatwedopage/WhyChooseOurHr';

const page = () => {
  return (
    <><HeroSection data={HP_HERO_DATA} />
      <WhyChooseOurHr />
    </>
  );
};

export default page;
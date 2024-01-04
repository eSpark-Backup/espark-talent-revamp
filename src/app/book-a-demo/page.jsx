import React from 'react';

import HeroSection from '@/components/homepage/heroSection';

import { HP_HERO_DATA } from '@/constants/global/hero-sections';

const page = () => {
  return (
    <>
      <HeroSection data={HP_HERO_DATA} />
    </>
  );
};

export default page;

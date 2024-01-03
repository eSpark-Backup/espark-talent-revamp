import React from 'react';

import HeroSection from '@/components/homepage/heroSection';

import { PARTNERSHIP_HERO_DATA } from '@/constants/global/hero-sections';

const page = () => {
  return (
    <>
      <HeroSection data={PARTNERSHIP_HERO_DATA} />
    </>
  );
};

export default page;

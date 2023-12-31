import HeroSection from '@/components/homepage/heroSection';
import Partnership from '@/components/partnership/Partnership';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import { PARTNERSHIP } from '@/constants/partnership';
import React from 'react';

const page = () => {
  return (
    <>
      <HeroSection data={HP_HERO_DATA} />
      <Partnership partnership={PARTNERSHIP} />
    </>
  );
};

export default page;

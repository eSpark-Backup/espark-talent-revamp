import React from 'react';

import HeroSection from '@/components/homepage/heroSection';
import Partnership from '@/components/partnership/Partnership';

import { PARTNERSHIP_HERO_DATA } from '@/constants/global/hero-sections';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import { PARTNERSHIP } from '@/constants/partnership';

const page = () => {
  return (
    <>
      <HeroSection data={PARTNERSHIP_HERO_DATA}
      <Partnership partnership={PARTNERSHIP} />
    </>
  );
};

export default page;

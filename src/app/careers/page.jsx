import React from 'react';

import CareerCards from '@/components/careers/careerCards';
import HeroSection from '@/components/homepage/HeroSection';

import { JOBS_HERO_DATA } from '@/constants/global/hero-sections';
import { CAREERS_DATA } from '@/constants/careers';

const page = () => {
  return (
    <>
      <HeroSection data={JOBS_HERO_DATA} />
      <CareerCards data={CAREERS_DATA} />
    </>
  );
};

export default page;

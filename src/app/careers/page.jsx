import React from 'react';

import CareerCards from '@/components/careers/CareerCards';
import Hero from '@/components/homepage/Hero';

import { JOBS_HERO_DATA } from '@/constants/global/hero-sections';
import { CAREERS_DATA } from '@/constants/careers';

const page = () => {
  return (
    <>
      <Hero data={JOBS_HERO_DATA} />
      <CareerCards data={CAREERS_DATA} />
    </>
  );
};

export default page;

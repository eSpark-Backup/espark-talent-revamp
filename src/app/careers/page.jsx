import React from 'react';

import CareerCards from '@/components/careers/CareerCards';

import { JOBS_HERO_DATA } from '@/constants/global/hero-sections';
import { CAREERS_DATA } from '@/constants/careers';
import Hero from '@/components/homepage/Hero';

const Page = () => {
  return (
    <>
      <Hero data={JOBS_HERO_DATA} />
      <CareerCards data={CAREERS_DATA} />
    </>
  );
};

export default Page;

import React from 'react';

import Partnership from '@/components/partnership/Partnership';

import { PARTNERSHIP_HERO_DATA } from '@/constants/global/hero-sections';
import { PARTNERSHIP } from '@/constants/partnership';
import Hero from '@/components/homepage/Hero';

const page = () => {
  return (
    <>
      <Hero data={PARTNERSHIP_HERO_DATA} />
      <Partnership partnership={PARTNERSHIP} />
    </>
  );
};

export default page;

import HeroSection from '@/components/homepage/heroSection';
import { BLOGS_HERO_DATA} from '@/constants/global/hero-sections';
import React from 'react';

const page = () => {
  return (
    <>
      <HeroSection data={BLOGS_HERO_DATA} />
    </>
  );
};

export default page;
